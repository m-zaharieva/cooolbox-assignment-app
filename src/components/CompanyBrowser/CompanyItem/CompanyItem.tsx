import type { Company } from '../../../types/dataTypes';
import { getLatestRevenue } from '../../../utils/utils';
import './CompanyItem.css';

export default function CompanyItem({ company }: { company: Company }) {
    return (
        <li className="companyItem" key={company.name}>
            <h2>{company.name}</h2>

            <div className="tyle">
                <label htmlFor="">Industry</label>
                <span>{company.industry}</span>
            </div>
            <div className="tyle">
                <label htmlFor="">type</label>
                <span>{company.details.company_type}</span>
            </div>
            <div className="tyle">
                <label htmlFor="">size</label>
                <span>{company.details.size}</span>
            </div>
            <span>
                Country: {company.country} | Founded: {company.founded_year}
            </span>
            <br />
            <span>
                CEO: {company.details.ceo_name} | HQ: {company.details.headquarters}
            </span>
            <br />
            <span>Latest Revenue: ${getLatestRevenue(company).toLocaleString()}</span>
        </li>
    );
}
