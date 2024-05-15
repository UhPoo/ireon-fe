import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const VARIANTS = {
  primary_filled: "bg-green_3BAE66 hover:bg-green_209957 text-white",
  primary_outlined:
    "bg-white border-[1px] border-green_3BAE66 text-green_3BAE66 hover:border-green_209957 hover:text-green_209957",
  red_filled: "bg-red_EF4444 hover:bg-red_DC2626 text-white",
  ghost: "bg-transparent text-green_3BAE66 hover:bg-opacity-50",
};

type IButtonProps = {
  variant?: "primary_filled" | "primary_outlined" | "red_filled" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary_filled",
  children,
  className,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center",
        "rounded-[6px] px-[16px] py-[8px]",
        "cursor-pointer",
        variant && VARIANTS[variant],
        className && className
      )}
      onClick={onClick}>
      {children && children}
    </button>
  );
}
