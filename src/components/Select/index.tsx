interface SelectProps {
  items: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ items, onChange }: SelectProps) => {
  return (
    <select onChange={onChange} className="rounded-lg border border-gray-700 bg-gray-100 p-2.5 text-sm text-gray-900">
      {Array.isArray(items) &&
        items.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
    </select>
  )
}

export default Select
