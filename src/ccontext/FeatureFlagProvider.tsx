import { FC, useState, type PropsWithChildren } from "react";
import { FeatureFlags } from "../interfaces";
import { FeatureFlagContext, defaultFlags } from "./FeatureFlagContext";

interface FeatureFlagContextProviderProps {
  featureFlags?: Record<FeatureFlags, boolean>;
}

export const FeatureFlagProvider: FC<
  PropsWithChildren<FeatureFlagContextProviderProps>
> = ({ children, featureFlags }) => {
  const [flags, setFlags] = useState<Record<FeatureFlags, boolean>>(
    featureFlags || defaultFlags,
  );

  return (
    <FeatureFlagContext.Provider value={{ flags, setFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
