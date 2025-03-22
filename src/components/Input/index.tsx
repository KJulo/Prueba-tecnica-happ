interface InputProps {
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Input = ({ onChange, placeholder, className }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={`bg-gray-100 border border-gray-700 text-gray-900 text-sm p-2.5 ${className}`}
    />
  )
}

export default Input
