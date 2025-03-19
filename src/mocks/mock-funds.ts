import { Fund } from "../interfaces";

export const mockFunds: Fund[] = [
  {
    id: "1",
    name: "Vanguard S&P 500",
    type: "etf",
    meta: {
      charge: 50,
      company: "Vanguard",
      dividendType: "DIST",
      description:
        "The Fund seeks to track the performance of the Standard and Poor's Total Market Index.",
    },
  },
  {
    id: "2",
    name: "Vanguard S&P 500 ",
    type: "etf",
    meta: {
      charge: 55,
      company: "Vanguard",
      dividendType: "ACC",
      description:
        "The Fund seeks to track the performance of the Standard and Poor's Total Market Index.",
    },
  },
  {
    id: "3",
    name: "Vanguard FTSE All-World",
    type: "etf",
    meta: {
      charge: 60,
      company: "Vanguard",
      dividendType: "ACC",
      description:
        "The Fund seeks to track track theperformance of the FTSE All-World Index",
    },
  },
  {
    id: "4",
    name: "iShares Physical Gold",
    type: "etf",
    meta: {
      charge: 90,
      company: "BlackRock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
  {
    id: "5",
    name: "iShares CORE S&P 500",
    type: "etf",
    meta: {
      charge: 60,
      company: "BlackRock",
      dividendType: "ACC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
  {
    id: "6",
    name: "iShares S&P 500 Information Technology Sector",
    type: "etf",
    meta: {
      charge: 60,
      company: "BlackRock",
      dividendType: "ACC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
  {
    id: "7",
    name: "iShares Global Clean Energy",
    type: "etf",
    meta: {
      charge: 107,
      company: "BlackRock",
      dividendType: "DIST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
  {
    id: "8",
    name: "Invesco EQQ Nasdaq-100",
    type: "etf",
    meta: {
      charge: 114,
      company: "BlackRock",
      dividendType: "ACC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
  {
    id: "9",
    name: "VanEck Semiconductor",
    type: "etf",
    meta: {
      charge: 114,
      company: "BlackRock",
      dividendType: "ACC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
];
