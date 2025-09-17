"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "@/utils/get-data";

export const SearchSection = () => {
    const[searchValue, setSearchValue] = useState("");
    const[foundMovies, setFoundMovies] = useState<movieResponseType | null>(null);

    const handleChange = (e)=>{
        const {value} = e.target;
        const foundData = await getSearchedMovies(value);
        setFoundMovies(foundData)
        setSearchValue(value);
    }
  return (
    <div>
    <Input 
        value={searchValue}
        onChange={handleChange}
        className="pl-10" 
        placeholder="Search.." />
    </div>
  )
}

