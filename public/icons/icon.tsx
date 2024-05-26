import * as RadixIcon from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface IIconProps extends IconProps {
  icon: keyof typeof RadixIcon;
  size?: number;
  className?: string;
}

export default function Icon({ icon, size = 20, className }: IIconProps) {
  const CustomIcon = RadixIcon[icon];

  return <CustomIcon width={size} height={size} className={className} />;
}
