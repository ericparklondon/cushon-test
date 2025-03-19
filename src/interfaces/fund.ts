export interface FundMetaDefails {
  company?: string;
  charge?: number;
  dividendType?: "ACC" | "DIST";
  description?: string;
}

export interface Fund {
  id: string;
  name: string;
  type: "etf" | "mutual fund";
  meta?: FundMetaDefails;
}

export interface PortfolioFund extends Fund {
  amount?: number;
}
