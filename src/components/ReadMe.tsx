import { FC, useContext } from "react";
import { FeatureFlagContext } from "../ccontext";
import { FeatureFlags } from "../interfaces";

export const ReadMe: FC<{}> = () => {
  const { flags, setFlags } = useContext(FeatureFlagContext);

  const toggleMultiFunds = () => {
    setFlags({
      ...flags,
      [FeatureFlags.MultiFund]: !flags.multifund,
    });
  };

  return (
    <section className="flex grow-1 justify-center font-sans text-lg text-gray-900">
      <div className="max-w-xl overflow-y-auto">
        <h1 className="pb-15 text-center text-5xl">Weclome!</h1>
        <p className="pb-8">
          Hello and thank you for taking the time to review my submission!
        </p>
        <p className="pb-8">
          This component was created as part of the technical test for Cushon.
          My goal was to showcase clean, modular code and demonstrate my
          approach to problem-solving and best practices. I hope you find my
          work clear and concise, and I look forward to hearing any feedback you
          may have! Thank you again for setting aside your time—it’s truly
          appreciated.
        </p>
        <p className="pb-4">
          Given the open-ended nature of the task, I designed the component with
          adaptability in mind. Recognizing the potential for its use in
          multiple scenarios, I opted to:
        </p>
        <ul className="list-disc pb-8 pl-8">
          <li>
            <span className="font-bold">Utilize Feature Flags: </span> This
            allows for controlled, conditional behavior, making it easy to
            enable or disable features as requirements evolve.
          </li>
          <li>
            <span className="font-bold">Employ useContext:</span> By
            centralizing logic in a React context, I aimed to provide a clean
            and maintainable way to manage state and share data between
            components.
          </li>
        </ul>
        <p className="pb-4">
          Give it a try and toggle the Multiple Funds feature flag on and off
          below and the try and add multiple funds:
        </p>
        <div className="flex items-center justify-center gap-5">
          <span>Allow Multiple Funds: </span>
          <button
            type="button"
            className={`bg-${flags.multifund ? "primary" : "secondary"} me-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-${flags.multifund ? "pink-800" : "gray-700"} focus:ring-4 focus:ring-${flags.multifund ? "pink-300" : "gray-300"} focus:outline-none`}
            onClick={toggleMultiFunds}
          >
            TURN {flags.multifund ? "OFF" : "ON"}
          </button>
        </div>
        <p className="pb-4">
          While completing this component, there were a few things I would have
          liked to achieve but didn’t have enough time for:
        </p>
        <ul className="list-disc pb-8 pl-8">
          <li>
            <span className="font-bold">E2E Testing with Storybook:</span> I
            believe integrating Storybook for end-to-end testing would have
            significantly improved the component&apos;s robustness and
            maintainability.
          </li>
          <li>
            <span className="font-bold">Expanded Test Coverage:</span> While
            there are tests in place, I would have liked to increase coverage
            for edge cases and complex scenarios.
          </li>
          <li>
            <span className="font-bold">Tailwind CSS Best Practices:</span> This
            was my first experience working with Tailwind CSS, and while I made
            an effort to adhere to its conventions, I recognize there is more to
            learn about its best practices.
          </li>
        </ul>
      </div>
    </section>
  );
};
