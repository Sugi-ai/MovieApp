import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { GenreDropdown } from "./GenreDropDown";
import { ThemeToggler } from "../home/ThemeToggler";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1280px] flex justify-between m-auto items-center py-3">
        <div>
          <img src="MovieZLogo.png" className="h-5" />
        </div>
        <div className="flex gap-5">
          <GenreDropdown />
          <div className="flex items-center">
            <Search className="-mr-8" />
            <Input className="pl-10" placeholder="Search.." />
          </div>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};