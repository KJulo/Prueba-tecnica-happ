import { useMemo } from "react";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Button = ({ onClick, children, isLoading, className }: ButtonProps) => {
  const classButton = useMemo(() => {
    const classLoading = isLoading
      ? "disabled cursor-not-allowed disabled:bg-blue-400"
      : "";
    return `text-white border border-blue-700 bg-blue-700 hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center ${classLoading} ${className}`;
  }, [isLoading, className]);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={classButton}
    >
      {children}
    </button>
  );
};

export default Button;
