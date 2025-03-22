interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white border border-blue-700 bg-blue-700 hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center"
    >
      {children}
    </button>
  );
};

export default Button;
