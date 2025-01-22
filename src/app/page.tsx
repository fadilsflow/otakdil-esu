// page.tsx
import AnimeCard from "@/components/ui/anime-card";

type Anime = {
  title: string; // Judul anime
  images: {
    webp: {
      image_url: string; // URL gambar anime dalam format WebP
    };
  };
};

export default async function Home() {
  // Fetch data dari API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);

  // Error handling jika fetch gagal
  if (!res.ok) {
    console.log("Error: Failed to fetch data");
  }

  // Parsing data json
  const anime: { data: Anime[] } = await res.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <br /><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Anime Top
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {anime.data.map((data, index) => {
          return (
            <AnimeCard
              key={index}
              title={data.title}
              images={data.images.webp.image_url}
            />
          );
        })}
      </div>
    </div>
  );
}
