import './CompanyBrowser.css';
import data from '../../data/data.json';
import CompanyItem from './CompanyItem/CompanyItem';

export default function CompanyBrowser() {
    return (
        <div className="companyBrowser">
            <div>
                {data.length === 0 ? (
                    <div>No results found.</div>
                ) : (
                    <ul className="companyBrowser__list">
                        {data.map(company => (
                            <CompanyItem key={company.name} company={company} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
