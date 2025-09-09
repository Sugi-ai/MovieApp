import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const NavigationBarMenu = () => {
  return (
    <div className=" flex justify-center h-9 my-[11.5px] ">
      <img src="MovieZLogo.txt" alt="logo" className="h-5 2-23 m-2" />
      <NavigationMenu className=" ml-[322px] w-[97px]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
            <NavigationMenuContent className="flex">
              <NavigationMenuLink>Action</NavigationMenuLink>
              <NavigationMenuLink>Comedy</NavigationMenuLink>
              <NavigationMenuLink>Horror</NavigationMenuLink>
              <NavigationMenuLink>Adventure</NavigationMenuLink>
              <NavigationMenuLink>Animation</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
