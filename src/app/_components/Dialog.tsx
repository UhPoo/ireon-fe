"use client";
import {
  Dialog as HeadlessDialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import ReactDOM from "react-dom";

type IDialog = {
  show: boolean;
  title: string;
  description: string;
  footer: React.ReactNode;
};

export default function Dialog({ show, title, description, footer }: IDialog) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <Transition appear show={show}>
      <HeadlessDialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center bg-black bg-opacity-50">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]">
              <DialogPanel className="w-full max-w-md rounded-md bg-white p-[24px] border">
                <DialogTitle as="h3" className="font-medium text-lg">
                  {title}
                </DialogTitle>
                <div className="mt-[8px] text-sm text-gray_64748B whitespace-pre-line">
                  {description}
                </div>
                <div className="mt-[16px] flex gap-x-[8px] justify-end">
                  {footer}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>,
    (document.getElementById("dialog") as HTMLElement) ||
      document.createElement("div")
  );
}
