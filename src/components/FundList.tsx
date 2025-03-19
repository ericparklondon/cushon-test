import { FC } from "react";
import { useFunds } from "../hooks";
import { LoadingSpinner } from "./LoadingSpinner";
import { Fund } from "../interfaces";

interface FundListProps {
  setSelectedFunds: (fund: Fund) => void;
}

export const FundList: FC<FundListProps> = ({ setSelectedFunds }) => {
  const { funds, isLoading } = useFunds();

  if (isLoading) {
    return (
      <div className="flex min-h-full min-w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-5 p-10">
      {funds.map((fund) => (
        <div
          className="border-primary w-full rounded-lg border-1 p-2"
          key={`fund-list-${fund.id}`}
        >
          <div className="pb-4">
            <h1 className="pb-4 text-xl font-bold text-gray-800">
              {fund.name}
            </h1>
            <p className="pb-1 text-black">
              Fund Type - {fund.type.toUpperCase()}
            </p>
            <p className="pb-3 text-black">Company - {fund.meta?.company}</p>
            <p>{fund.meta?.description}</p>
          </div>
          <button
            type="button"
            className="bg-primary me-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 focus:outline-none"
            onClick={() => setSelectedFunds(fund)}
          >
            Select fund
          </button>
        </div>
      ))}
    </div>
  );
};
