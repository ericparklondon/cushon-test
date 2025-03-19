import { useEffect, useState } from "react";
import { Fund } from "../interfaces";
import { mockFunds } from "../mocks";

export const useFunds = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [funds, setFunds] = useState<Fund[]>([]);

  useEffect(() => {
    setIsLoading(true);

    // Simulate some fetch request
    const timeout = setTimeout(() => {
      setFunds(mockFunds);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return { funds, isLoading };
};
