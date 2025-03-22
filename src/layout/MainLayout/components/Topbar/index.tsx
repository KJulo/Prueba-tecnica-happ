import Button from "@components/Button";
import Input from "@components/Input";
import { useState } from "react";

const Topbar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    //! search with redux
    console.log(search);
  };
  return (
    <div className="h-12 bg-gray-200 w-full text-center place-content-center">
      <Input onChange={handleChange} placeholder={""} />
      <Button onClick={handleSearch}>Buscar</Button>
    </div>
  );
};

export default Topbar;
