"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "@/utils/get-data";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";

export const SearchSection = () => {
    const[searchValue, setSearchValue] = useState("");
    const[foundMovies, setFoundMovies] = useState<movieResponseType | null>(null);


    const [isOpen, setIsOpen] = useState(false)
    const handleChange = async (e)=>{
        const {value} = e.target;
        setSearchValue(value);
        const foundData = await getSearchedMovies(value);

        if(value.length > 0) {
          setIsOpen(true)
        } else {
          setIsOpen(false)
        }
        setFoundMovies(foundData)
    }
  return (
    <div>
    <Input 
        value={searchValue}
        onChange={handleChange}
        className="pl-10" 
        placeholder="Search.." />

        <div>
          <Popover open={isOpen}>
            <PopoverTrigger></PopoverTrigger>
            <PopoverContent className="w-[577px] h-[729px] rounded-b-lg "> {foundMovies?.results.slice(0, 5).map((movie)=> {
            return <div>{movie.title}</div>
          })} 
          <Link href={`/search?value=${searchValue}`}>See all results for {searchValue}</Link>
          </PopoverContent>
          </Popover>
        </div>
    </div>
    
  )
}

