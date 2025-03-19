import { useContext, useEffect, useState } from "react";
import { PortfolioFund } from "../interfaces";
import { FeatureFlagContext } from "../ccontext";
import { ISA_LIMIT } from "../utilities";

export const useMakePortfolio = () => {
  const { flags } = useContext(FeatureFlagContext);
  const [portfolioFunds, setPortfolioFunds] = useState<PortfolioFund[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const errors = [];
    const portfolioTotal = portfolioFunds.reduce((total, fund) => {
      if (!fund.amount) {
        errors.push(`Fund (${fund.name}) has not been assigned any value`);
      }

      return total + (fund.amount || 0);
    }, 0);

    if (portfolioTotal > ISA_LIMIT) {
      errors.push("You have exceeded the ISA limit for the current tax year");
    }

    setErrors(errors);
  }, [portfolioFunds]);

  const addNewFund = (newFund: PortfolioFund) => {
    if (!flags.multifund) {
      setPortfolioFunds([newFund]);
      return;
    }

    const existingFund = portfolioFunds.find((fund) => fund.id === newFund.id);

    if (existingFund) {
      return;
    }

    setPortfolioFunds((funds) => [
      ...funds,
      {
        ...newFund,
      },
    ]);
  };

  const updateFund = (updatedFund: PortfolioFund) => {
    const existingFundIdx = portfolioFunds.findIndex(
      (fund) => fund.id === updatedFund.id,
    );

    if (existingFundIdx < 0) {
      return;
    }

    setPortfolioFunds([
      ...portfolioFunds.slice(0, existingFundIdx),
      updatedFund,
      ...portfolioFunds.slice(existingFundIdx + 1),
    ]);
  };

  const removeFund = (fundId: string) => {
    setPortfolioFunds((funds) => funds.filter((fund) => fund.id !== fundId));
  };

  const confirmFunds = () => {
    if (errors.length > 0) {
      alert(`Error:\n${errors.join("\n")}`);
    } else {
      alert("Success!");
    }
  };

  return {
    addNewFund,
    removeFund,
    portfolioFunds,
    updateFund,
    confirmFunds,
    errors,
  };
};
