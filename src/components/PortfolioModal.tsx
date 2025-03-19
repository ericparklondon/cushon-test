import { FC, useContext } from "react";
import { Modal } from "./Modal";
import { Fund, PortfolioFund } from "../interfaces";
import BinSVG from "../assets/bin.svg?react";
import { FeatureFlagContext } from "../ccontext";

interface PortfolioModalProps {
  open: boolean;
  close: () => void;
  portfolio: PortfolioFund[];
  removeFund: (fundId: string) => void;
  updateFund: (fund: PortfolioFund) => void;
  confirm: () => void;
}

export const PortfolioModal: FC<PortfolioModalProps> = ({
  open,
  close,
  portfolio,
  removeFund,
  updateFund,
  confirm,
}) => {
  const { flags } = useContext(FeatureFlagContext);

  const updateFundAmount = (fund: Fund, strAmount: string) => {
    const amount = isNaN(parseInt(strAmount)) ? undefined : parseInt(strAmount);

    updateFund({
      ...fund,
      amount,
    });
  };
  return (
    <Modal open={open} title="Portfolio" close={close}>
      <div className="space-y-4 p-4 md:p-5">
        {portfolio.map((fund) => {
          return (
            <div className="flex pb-4" key={`portfolio-list-${fund.id}`}>
              <span className="text-s grow-1 pb-4 font-bold text-gray-800">
                {fund.name}
                {fund.meta?.dividendType
                  ? ` - (${fund.meta?.dividendType})`
                  : ""}
              </span>
              <input
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="block w-[100[x]] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="£"
                onChange={(e) => updateFundAmount(fund, e.target.value)}
                value={fund.amount}
                required
              />
              <button className="pl-3" onClick={() => removeFund(fund.id)}>
                <BinSVG style={{ height: "15px", width: "15px" }} />
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-5 rounded-b border-t border-gray-200 p-4 md:p-5">
        <button
          type="button"
          onClick={() => confirm()}
          className="bg-primary rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 focus:outline-none"
        >
          Confirm
        </button>

        {flags.multifund && (
          <button
            type="button"
            onClick={() => close()}
            className="bg-secondary rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 focus:outline-none"
          >
            Add More Funds
          </button>
        )}
      </div>
    </Modal>
  );
};
