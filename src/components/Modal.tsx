import { FC, PropsWithChildren } from "react";
import CloseSVG from "../assets/close.svg?react";

interface ModalProps {
  open: boolean;
  title: string;
  close: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open,
  title,
  close,
  children,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0">
      <div className="relative max-h-full w-full max-w-2xl border-1 border-gray-800 shadow-lg">
        <div className="relative rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              onClick={() => close()}
            >
              <CloseSVG style={{ height: "15px", width: "15px" }} />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
