import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { FaStar } from "react-icons/fa";

type MoiveCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: MoiveCardProps) => {
  return (
    <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2">
      <CardContent className="p-0">
        <img
          src="https://en.wikipedia.org/wiki/Dear_Santa_(2024_film)#/media/File:Dear_Santa_(2024_film)_poster.jpg"
          alt=""
          width={230}
          height={340}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-2">
          <FaStar color="#FDE047" />
          <span>{score}/10</span>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
