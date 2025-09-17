

import { Input } from "../ui/input";
import { GenreDropdown } from "./GenreDropDown";
import { ThemeToggler } from "../home/ThemeToggler";
import Link from "next/link";
import { SearchSection } from "./SearchSection";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1280px] flex justify-between m-auto items-center py-3">

        <Link href="/">
          <img src="MovieZLogo.png" className="h-5"  />
        </Link>
        <div className="flex gap-5">
          <GenreDropdown />
          <div className="flex items-center">
          {/* <Search classname=" -mr-8" /> */}
          <SearchSection/>
          </div>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};