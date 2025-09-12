import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const GENRES = [
  {
    name: "Action",
  },
  {
    name: "Adventure",
  },
  {
    name: "Comedy",
  },
  {
    name: "Documentary"
  },
  {
    name: "Drama"
  },
  {
    name:"Family"
  },
  {
    name: "Fantasy"
  },
  {
    name:"Film-Noir"
  },
  {
    name:"Gmame-Show"
  },
  {
    name:"History"
  },
  {
    name: "Horror",
  },
  {
    name: "Music",
  },
  {
    name: "Musical",
  },
  {
    name: "Mystery",
  },
  {
    name: "News",
  },
  {
    name: "Reality-TV",
  },
  {
    name: "Romance",
  },
  {
    name: "Sci-Fi",
  },
  {
    name: "Short",
  },
  {
    name: "Sport",
  },
  {
    name: "Talk-Show",
  },
  {
    name: "Thriller",
  },
  {
    name: "War",
  },
  {
    name: "Western",
  },
];

export function GenreDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="start">
        <DropdownMenuLabel className="text-2xl font-bold">
          Genres
        </DropdownMenuLabel>
        <p className="px-2 text-[#09090B] ">See list of movies by genre</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:!bg-transparent">
          {GENRES.map((genre) => (
            <Link href="/genre">
              <Badge variant="outline">
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}