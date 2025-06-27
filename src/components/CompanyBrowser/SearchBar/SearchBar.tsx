import { useEffect, useMemo, useState } from 'react';
import './SearchBar.css';
import data from '../../../data/data.json';
import type { Company } from '../../../types/dataTypes';
import { customSort, type SortField } from '../../../utils/sortUtils';
import { customSearch } from '../../../utils/searchUtils';
import { advancedSearch } from '../../../utils/searchUtils';

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
    }, [query, sortField, sortAsc, industryFilter, typeFilter]);

    useEffect(() => {
        updateFiltered(filtered);
    }, [filtered, updateFiltered]);

    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search companies..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{ flex: 1, minWidth: 200 }}
            />
            <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)}>
                <option value="">All Industries</option>
                {industries.map(industry => (
                    <option key={industry} value={industry}>
                        {industry}
                    </option>
                ))}
            </select>
            <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                <option value="">All Types</option>
                {companyTypes.map(type => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <select value={sortField} onChange={e => setSortField(e.target.value as SortField)}>
                <option value="name">Name</option>
                <option value="founded_year">Founded Year</option>
                <option value="revenue">Revenue</option>
                <option value="company_type">Company Type</option>
            </select>
            <button onClick={() => setSortAsc(a => !a)}>{sortAsc ? 'Asc' : 'Desc'}</button>
        </div>
    );
}
