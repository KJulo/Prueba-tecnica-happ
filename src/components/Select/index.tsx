interface SelectProps {
  items: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ items, onChange }: SelectProps) => {
  return (
    <select onChange={onChange}>
      {Array.isArray(items) &&
        items.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
};

export default Select;
