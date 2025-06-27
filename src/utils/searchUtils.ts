import type { Company } from '../types/dataTypes';
import { getLatestRevenue } from './utils';

export function customSearch(companies: Company[], query: string): Company[] {
    if (query.length < 3) return companies;
    // Numeric comparison: e.g. founded_year > 2000
    const numComp = query.match(/(\w+)\s*([><=]+)\s*(\d+)/);
    if (numComp) {
        const [, field, op, value] = numComp;
        return companies.filter(c => {
            let fieldValue: number | undefined;
            if (field === 'founded_year') fieldValue = c.founded_year;
            if (field === 'revenue') fieldValue = getLatestRevenue(c);
            if (typeof fieldValue !== 'number') return false;
            if (op === '>') return fieldValue > +value;
            if (op === '>=') return fieldValue >= +value;
            if (op === '<') return fieldValue < +value;
            if (op === '<=') return fieldValue <= +value;
            if (op === '=') return fieldValue === +value;
            return false;
        });
    }
    // Partial/exact match across all fields
    const q = query.toLowerCase();
    return companies.filter(c =>
        [
            c.name,
            c.country,
            c.industry,
            c.founded_year.toString(),
            c.details.company_type,
            c.details.size,
            c.details.ceo_name,
            c.details.headquarters,
            ...c.financials.map(f => f.year.toString()),
            ...c.financials.map(f => f.revenue.toString()),
            ...c.financials.map(f => f.net_income.toString()),
        ]
            .join(' ')
            .toLowerCase()
            .includes(q)
    );
}
