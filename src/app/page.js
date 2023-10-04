import PokemonList from "@/components/PokemonList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Image
        src={"/pokedex.png"}
        width={500}
        height={50}
        alt={"Pokedex logo"}
        className={"mb-20"}
      />
      <PokemonList />
    </main>
  );
}
