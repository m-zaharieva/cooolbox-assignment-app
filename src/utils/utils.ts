import type { Company } from '../types/dataTypes';

export const getLatestRevenue = (company: Company) =>
    company.financials.length ? company.financials[company.financials.length - 1].revenue : 0;
