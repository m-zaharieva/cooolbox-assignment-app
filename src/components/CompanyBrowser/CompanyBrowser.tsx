import { useState } from 'react';
import './CompanyBrowser.css';
import data from '../../data/data.json';
import type { Company } from '../../types/dataTypes';
import SearchBar from './SearchBar/SearchBar';
import CompanyItem from './CompanyItem/CompanyItem';
import NoDataFound from '../Icons/NoDataFound';

export default function CompanyBrowser() {
    const [filtered, setFiltered] = useState<Company[]>(data as Company[]);

    function updateFiltered(filteredData: Company[]) {
        setFiltered(filteredData);
    }

    return (
        <div className="companyBrowser">
            <SearchBar updateFiltered={updateFiltered} />
            <div>
                {filtered.length === 0 ? (
                    <div className="companyBrowser__noResult">
                        <NoDataFound />
                        <p>No results found.</p>
                    </div>
                ) : (
                    <ul className="companyBrowser__list">
                        {filtered.map(company => (
                            <CompanyItem key={company.name} company={company} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
