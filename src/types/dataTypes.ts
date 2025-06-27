export type BoardMember = {
    name: string;
    position: string;
};

export type Office = {
    city: string;
    country: string;
};

export type StockInfo = {
    symbol: string;
    price: number;
};

export type FinancialData = {
    year: number;
    revenue: number;
    net_income: number;
};

export type CompanyDetails = {
    company_type: 'Public' | 'Private';
    size: 'Small' | 'Medium' | 'Large';
    ceo_name: string;
    headquarters: string;
};

export type Company = {
    name: string;
    country: string;
    industry: string;
    founded_year: number;
    details: CompanyDetails;
    financials: FinancialData[];
    board_members?: BoardMember[];
    offices?: Office[];
    stock_info?: StockInfo;
};
