import Image from "next/image"
import Search from "./search"

export default function Home() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="flex gap-3 items-center self-center">
                <Image
                    src="/pokeball.svg"
                    alt="Pokeball Logo"
                    width={75}
                    height={75}
                    priority
                />
                <h1 className="text-5xl">Pokedex</h1>
            </div>
            <Search />
        </main>
    )
}
