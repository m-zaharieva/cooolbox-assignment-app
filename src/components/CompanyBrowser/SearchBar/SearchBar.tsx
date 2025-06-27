import { useEffect, useMemo, useState } from 'react';
import './SearchBar.css';
import data from '../../../data/data.json';
import type { Company } from '../../../types/dataTypes';
import { customSort, type SortField } from '../../../utils/sortUtils';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { advancedSearch } from '../../../utils/searchUtils';
import SearchChips from './SearchChips/SearchChips';

const industries = Array.from(new Set((data as Company[]).map(c => c.industry)));
const companyTypes = Array.from(new Set((data as Company[]).map(c => c.details.company_type)));

export default function SearchBar({
    updateFiltered,
}: {
    updateFiltered: (filteredData: Company[]) => void;
}) {
    const [query, setQuery] = useState('');
    const [sortField, setSortField] = useState<SortField>('name');
    const [sortAsc, setSortAsc] = useState(true);
    const [industryFilter, setIndustryFilter] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const debouncedQuery = useDebouncedValue(query, 400); // 400ms debounce

    const filtered = useMemo(() => {
        let companies = data as Company[];
        // Filtering
        if (industryFilter) companies = companies.filter(c => c.industry === industryFilter);
        if (typeFilter) companies = companies.filter(c => c.details.company_type === typeFilter);
        // Search
        companies = advancedSearch(companies, debouncedQuery);
        // Sort
        companies = customSort(companies, sortField, sortAsc);
        return companies;
    }, [debouncedQuery, sortField, sortAsc, industryFilter, typeFilter]);

    useEffect(() => {
        updateFiltered(filtered);
    }, [filtered, updateFiltered]);

    function chipCloseHandler(filterName: string) {
        switch (filterName) {
            case 'search':
                setQuery('');
                break;
            case 'industry':
                setIndustryFilter('');
                break;
            case 'type':
                setTypeFilter('');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="searchBar">
                <div className="searchBar__fieldContainer">
                    <label htmlFor="search" className="searchBar__label">
                        Search
                    </label>
                    <input
                        id="search"
                        className="searchBar__input"
                        type="text"
                        placeholder="Search companies..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <div className="searchBar__dropdowns">
                    <div className="searchBar__fieldContainer">
                        <label htmlFor="industries" className="searchBar__label">
                            Industries
                        </label>
                        <select
                            id="industries"
                            className="searchBar__select"
                            value={industryFilter}
                            onChange={e => setIndustryFilter(e.target.value)}
                        >
                            <option value="">All Industries</option>
                            {industries.map(industry => (
                                <option key={industry} value={industry}>
                                    {industry}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="searchBar__fieldContainer">
                        <label htmlFor="type" className="searchBar__label">
                            Type
                        </label>
                        <select
                            id="type"
                            className="searchBar__select"
                            value={typeFilter}
                            onChange={e => setTypeFilter(e.target.value)}
                        >
                            <option value="">All Types</option>
                            {companyTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="searchBar__dropdowns">
                    <div className="searchBar__fieldContainer">
                        <label htmlFor="sortBy" className="searchBar__label">
                            Sort By
                        </label>
                        <select
                            id="sortBy"
                            className="searchBar__select"
                            value={sortField}
                            onChange={e => setSortField(e.target.value as SortField)}
                        >
                            <option value="name">Name</option>
                            <option value="founded_year">Founded Year</option>
                            <option value="revenue">Revenue</option>
                            <option value="company_type">Company Type</option>
                        </select>
                    </div>
                    <div className="searchBar__fieldContainer">
                        <label className="searchBar__label">&nbsp;</label>
                        <button onClick={() => setSortAsc(a => !a)}>
                            {sortAsc ? 'Asc' : 'Desc'}
                        </button>
                    </div>
                </div>
            </div>
            <SearchChips
                query={query}
                industryFilter={industryFilter}
                typeFilter={typeFilter}
                closeHandler={chipCloseHandler}
            />
        </>
    );
}
