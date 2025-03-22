interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-1  focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
};

export default Button;
