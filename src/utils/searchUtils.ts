import type { Company } from '../types/dataTypes';
import { getLatestRevenue } from './utils';

export function advancedSearch(companies: Company[], query: string): Company[] {
    if (query.length < 3) return companies;
    const andParts = query.split(/\s+AND\s+/i);
    return companies.filter(company =>
        andParts.every(part => {
            // Handle key:value
            const kv = part.match(/^(\w+):(.+)$/);
            if (kv) {
                const [, key, value] = kv;
                if (key === 'industry')
                    return company.industry.toLowerCase() === value.toLowerCase();
                if (key === 'ceo_name')
                    return company.details.ceo_name.toLowerCase().includes(value.toLowerCase());
            }
            // Handle numeric comparison
            const numComp = part.match(/(\w+)\s*([><=]+)\s*(\d+)/);
            if (numComp) {
                const [, field, operation, val] = numComp;
                let fieldValue: number | undefined;
                if (field === 'revenue') fieldValue = getLatestRevenue(company);
                if (field === 'founded_year') fieldValue = company.founded_year;
                if (typeof fieldValue !== 'number') return false;
                if (operation === '>') return fieldValue > +val;
                if (operation === '>=') return fieldValue >= +val;
                if (operation === '<') return fieldValue < +val;
                if (operation === '<=') return fieldValue <= +val;
                if (operation === '=') return fieldValue === +val;
            }
            // Fallback: partial match
            return JSON.stringify(company).toLowerCase().includes(part.toLowerCase());
        })
    );
}
