import { expect, test, describe } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMakePortfolio } from "../useMakePortfolio";
import { FeatureFlagProvider } from "../../ccontext";
import { mockFunds } from "../../mocks";
import { ReactNode } from "react";
import { FeatureFlags, PortfolioFund } from "../../interfaces";

describe("useMakePortfolio", () => {
  const getHookResult = (allowMultipleFunds = true) => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <FeatureFlagProvider
        featureFlags={{ [FeatureFlags.MultiFund]: allowMultipleFunds }}
      >
        {children}
      </FeatureFlagProvider>
    );

    return renderHook(() => useMakePortfolio(), { wrapper });
  };

  test("should add fund to portfolio", () => {
    const { result } = getHookResult();
    const { portfolioFunds, addNewFund } = result.current;

    expect(portfolioFunds).toEqual([]);

    act(() => addNewFund(mockFunds[0]));

    expect(result.current.portfolioFunds).toEqual([mockFunds[0]]);
  });

  test("should only allow one fund if multiflag is off", () => {
    const { result } = getHookResult(false);
    const { addNewFund } = result.current;

    act(() => addNewFund(mockFunds[0]));
    act(() => addNewFund(mockFunds[2]));
    act(() => addNewFund(mockFunds[4]));

    expect(result.current.portfolioFunds.length).toEqual(1);
    expect(result.current.portfolioFunds).toEqual([mockFunds[4]]);
  });

  test("should add multiple funds to portfolio and then remove 1", () => {
    const { result } = getHookResult();
    const { addNewFund } = result.current;

    act(() => addNewFund(mockFunds[0]));
    act(() => addNewFund(mockFunds[2]));
    act(() => addNewFund(mockFunds[4]));

    expect(result.current.portfolioFunds.length).toEqual(3);

    const { removeFund } = result.current;

    act(() => removeFund(mockFunds[2].id));

    expect(result.current.portfolioFunds.length).toEqual(2);
  });

  test("should update fund", () => {
    const { result } = getHookResult();
    const { addNewFund } = result.current;

    act(() => addNewFund(mockFunds[1]));

    expect(result.current.portfolioFunds[0]).toEqual(mockFunds[1]);

    const { updateFund } = result.current;
    const updatedFund: PortfolioFund = {
      ...mockFunds[1],
      amount: 80,
    };

    act(() => updateFund(updatedFund));

    expect(result.current.portfolioFunds[0]).toEqual(updatedFund);
  });

  test("should update fund", () => {
    const { result } = getHookResult();
    const { addNewFund } = result.current;

    act(() => addNewFund(mockFunds[1]));

    expect(result.current.portfolioFunds[0]).toEqual(mockFunds[1]);

    const { updateFund } = result.current;
    const updatedFund: PortfolioFund = {
      ...mockFunds[1],
      amount: 80,
    };

    act(() => updateFund(updatedFund));

    expect(result.current.portfolioFunds[0]).toEqual(updatedFund);
  });

  test("should notify of error if ISA limit exceeded", () => {
    const { result } = getHookResult();
    const { addNewFund } = result.current;

    act(() =>
      addNewFund({
        ...mockFunds[3],
        amount: 30000,
      }),
    );

    expect(result.current.errors.length).toEqual(1);
    expect(result.current.errors[0]).toEqual(
      "You have exceeded the ISA limit for the current tax year",
    );
  });
});
