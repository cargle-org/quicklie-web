import { colors } from "@/constants/colors";
import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  bgColor?: string;
  padding?: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  borderRadius?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  bgColor,
  padding,
  margin,
  color,
  type,
  className,
  isLoading,
  disabled,
  children,
  borderRadius,
}) => {
  const handleClick = () => {
    if (onClick && !isLoading && !disabled) {
      onClick();
    }
  };
  return (
    <button
      style={{
        padding: padding || "10px 16px",
        margin: margin || 0,
        color: color || colors.white,
        backgroundColor: bgColor || colors.redDark,
        borderRadius: borderRadius || "10px",
      }}
      type={type || "button"}
      className={className}
      onClick={handleClick}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;
