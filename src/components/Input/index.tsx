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
      className={`border border-gray-700 bg-gray-100 p-2.5 text-sm text-gray-900 ${className}`}
    />
  )
}

export default Input
