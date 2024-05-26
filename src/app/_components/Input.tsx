import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const INPUT_IDs = {
  email: "email",
  emailValidation: "emailValidation",
  password: "password",
  passwordConfirm: "passwordConfirm",
} as const;

export type INPUT_IDs = (typeof INPUT_IDs)[keyof typeof INPUT_IDs];

export function InputLabel(props: { id: INPUT_IDs; label: string }) {
  return (
    <label htmlFor={props.id} className={"font-medium text-[14px] text-black"}>
      {props.label}
    </label>
  );
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: INPUT_IDs;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  function Input(props, forwardedRef) {
    return (
      <input
        ref={forwardedRef}
        id={props.id}
        className={twMerge(
          "px-[12px] py-[8px]",
          "w-[450px] h-[40px]",
          "rounded-md border-[1px] border-gray_E5E5E5",
          "text-[16px]",
          "focus:outline-none focus:border-green_1D7846 focus:ring-green_1D7846 focus:ring-1",
          "hover:border-green_2BAE66 placeholder:text-gray_999999"
        )}
        {...props}
      />
    );
  }
);
