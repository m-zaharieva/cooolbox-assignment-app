import { useState } from 'react';
import './CompanyBrowser.css';
import data from '../../data/data.json';
import type { Company } from '../../types/dataTypes';
import SearchBar from './SearchBar/SearchBar';
import CompanyItem from './CompanyItem/CompanyItem';

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
                    <div>No results found.</div>
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
