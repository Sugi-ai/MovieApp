import { NavigationBarMenu } from "@/components/home/NavigationBarMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavigationBarMenu></NavigationBarMenu>
      <div>
        <img
          className="flex justify-center mt-6 w-360 h-150 "
          src="wicked.jpg"
          alt="movie"
        ></img>
      </div>
    </div>
  );
}
