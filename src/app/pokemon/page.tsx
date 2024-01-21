import PokemonList from "./pokemon-list"
import { AllResponse } from "./types"

async function getFirstSetOfPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    if (!res.ok) throw new Error("Failed to fetch data")

    const data: AllResponse = await res.json()
    return data
}

export default async function Page() {
    const data = await getFirstSetOfPokemon()
    return (
        <main className="flex-1 space-y-3">
            <h1 className="mt-12 text-3xl">All Pokemon</h1>
            <PokemonList initialState={data} />
        </main>
    )
}
