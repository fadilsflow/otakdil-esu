import Image from "next/image";
import { Card } from "@/components/ui/card";

type AnimeCardProps = {
  images: string;
  title: string;
};

export default function AnimeCard({ images, title }: AnimeCardProps) {
  return (
    <div>
      <Card>
        <Image src={images} alt="Anime Image" width={300} height={100} />
        <h3>{title}</h3>
      </Card>
    </div>
  );
}
