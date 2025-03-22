interface SelectProps {
  items: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ items, onChange }: SelectProps) => {
  return (
    <select onChange={onChange} className="bg-gray-100 border rounded-lg border-gray-700 text-gray-900 text-sm p-2.5">
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
