import { FC } from "react";
import LoadingSVG from "../assets/loading.svg?react";

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 60 }) => {
  return <LoadingSVG style={{ height: `${size}px`, width: `${size}px` }} />;
};
