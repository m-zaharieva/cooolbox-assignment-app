import type { Company } from '../../../types/dataTypes';
import { getLatestRevenue } from '../../../utils/utils';
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
                        <svg
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{ verticalAlign: 'middle', marginRight: 4 }}
                        >
                            <circle cx="8" cy="8" r="7" stroke="#bbb" strokeWidth="2" fill="none" />
                            <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#888">
                                {company.stock_info.symbol}
                            </text>
                        </svg>
                        {company.stock_info.symbol} &bull; ${company.stock_info.price}
                    </span>
                )}
                <span className="companyCard__members">
                    {company.board_members && (
                        <>
                            <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                style={{ verticalAlign: 'middle', marginRight: 2 }}
                            >
                                <circle
                                    cx="8"
                                    cy="8"
                                    r="7"
                                    stroke="#bbb"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                            {company.board_members[0].name} ({company.board_members[0].position})
                        </>
                    )}
                </span>
            </div>
        </li>
    );
}
