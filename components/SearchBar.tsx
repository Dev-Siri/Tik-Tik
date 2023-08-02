"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { BiSearch } from "@react-icons/all-files/bi/BiSearch";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();

    if (searchTerm) router.push(`/search/${searchTerm}?type=accounts`);
  };

  return (
    <form onSubmit={handleSearch} className="absolute md:static top-10 left-20 bg-white">
      <input
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search accounts and videos"
        className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
      />
      <button type="submit" className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400">
        <BiSearch />
      </button>
    </form>
  );
}
