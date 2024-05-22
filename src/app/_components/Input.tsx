import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IInputProps = {
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  children,
  className,
  onChange,
  placeholder,
}: IInputProps) {
  return (
    <input
      className={twMerge(
        "border px-[12px] py-[8px] border-gray_E5E5E5 rounded-md w-[450px] h-[40px] focus:outline-none focus:border-green_1D7846 focus:ring-green_1D7846 focus:ring-1  hover:border-green_2BAE66 placeholder:text-gray_999999",
        className && className
      )}
      placeholder={placeholder}
      onChange={onChange}>
      {children && children}
    </input>
  );
}
