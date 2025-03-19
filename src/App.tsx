import { FC } from "react";
import { FundPicker, ReadMe } from "./components";

export const App: FC<{}> = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center font-sans text-gray-700">
      <section className="flex h-full w-[800px] flex-col p-10">
        <h1 className="pb-10 text-center font-mono text-3xl">Fund Picker</h1>
        <FundPicker />
      </section>

      <ReadMe />
    </div>
  );
};
