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
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
    />
  );
};

export default Input;
