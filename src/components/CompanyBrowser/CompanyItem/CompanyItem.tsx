import type { Company } from '../../../types/dataTypes';
import { getLatestRevenue } from '../../../utils/utils';
import Circle from '../../Icons/Circle';
import './CompanyItem.css';

export default function CompanyItem({ company }: { company: Company }) {
    return (
        <li className="companyCard">
            <div className="cardHeader">
                <div className="companyCard__logo">
                    <span>{company.name[0]}</span>
                </div>
                <div className="companyCard__meta">
                    <span className="companyCard__industry">{company.industry}</span>
                    <span className="companyCard__country">{company.country}</span>
                </div>
            </div>
            <div className="companyCard__body">
                <h2 className="companyCard__name">{company.name}</h2>
                <div className="companyCard__subtitle">
                    {company.details.company_type} &middot; {company.details.size}
                </div>
                <div className="companyCard__infoRow">
                    <span>Founded: {company.founded_year}</span>
                    <span>HQ: {company.details.headquarters}</span>
                </div>
                <div className="companyCard__infoRow">
                    <span>CEO: {company.details.ceo_name}</span>
                    <span>Revenue: ${getLatestRevenue(company).toLocaleString()}</span>
                </div>
            </div>
            <div className="companyCard__footer">
                {company.stock_info && (
                    <span className="companyCard__stock">
                        <Circle />
                        {company.stock_info.symbol} &bull; ${company.stock_info.price}
                    </span>
                )}
                <span className="companyCard__members">
                    {company.board_members && (
                        <>
                            <Circle />
                            {company.board_members[0].name} ({company.board_members[0].position})
                        </>
                    )}
                </span>
            </div>
        </li>
    );
}
