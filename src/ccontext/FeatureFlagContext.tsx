import { createContext } from "react";
import { FeatureFlags } from "../interfaces";

export const defaultFlags = {
  [FeatureFlags.MultiFund]: true,
};

interface FeatureFlagContextProps {
  flags: Record<FeatureFlags, boolean>;
  setFlags: (flags: Record<FeatureFlags, boolean>) => void;
}

export const FeatureFlagContext = createContext<FeatureFlagContextProps>({
  flags: defaultFlags,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFlags: (_flags) => {},
});
