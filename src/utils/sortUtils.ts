import type { Company } from '../types/dataTypes';
import { getLatestRevenue } from './utils';
export type SortField = 'name' | 'founded_year' | 'revenue' | 'company_type';

export function customSort(companies: Company[], field: SortField, asc: boolean): Company[] {
    const sorted = [...companies].sort((a, b) => {
        let aVal: string | number, bVal: string | number;
        switch (field) {
            case 'name':
                aVal = a.name;
                bVal = b.name;
                return asc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            case 'founded_year':
                aVal = a.founded_year;
                bVal = b.founded_year;
                return asc ? aVal - bVal : bVal - aVal;
            case 'revenue':
                aVal = getLatestRevenue(a);
                bVal = getLatestRevenue(b);
                return asc ? aVal - bVal : bVal - aVal;
            case 'company_type':
                aVal = a.details.company_type;
                bVal = b.details.company_type;
                return asc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            default:
                return 0;
        }
    });
    return sorted;
}
