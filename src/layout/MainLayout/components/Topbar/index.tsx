import Button from "@components/Button";
import Input from "@components/Input";
import { useState } from "react";

const Topbar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    console.log(search);
  };
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Input onChange={handleChange} placeholder={"Search news"} />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
