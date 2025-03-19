import { FC, useEffect, useState } from "react";
import { FundList } from "./FundList";
import { Fund } from "../interfaces";
import { useMakePortfolio } from "../hooks";
import { PortfolioModal } from "./PortfolioModal";

export const FundPicker: FC<unknown> = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const { addNewFund, portfolioFunds, removeFund, updateFund, confirmFunds } =
    useMakePortfolio();

  useEffect(() => {
    if (portfolioFunds.length === 0 && showPortfolio) {
      setShowPortfolio(false);
    }
  }, [portfolioFunds, showPortfolio]);

  const addFund = (fund: Fund) => {
    addNewFund(fund);
    setShowPortfolio(true);
  };

  return (
    <div className="border-primary flex max-h-full min-h-[500px] w-full min-w-[500px] overflow-y-scroll rounded-lg border-1">
      <FundList setSelectedFunds={addFund} />
      <PortfolioModal
        open={showPortfolio}
        close={() => setShowPortfolio(false)}
        portfolio={portfolioFunds}
        removeFund={removeFund}
        updateFund={updateFund}
        confirm={() => confirmFunds()}
      />
    </div>
  );
};
