interface InputProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, placeholder }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="bg-gray-100 border border-gray-700 text-gray-900 text-sm p-2.5 "
    />
  );
};

export default Input;
