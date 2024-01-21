import { capitalize } from "lodash"
import { PokemonResponse } from "./types"

async function getPokemon(name: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!res.ok) throw new Error(`Failed to fetch pokemon ${name}`)

    const data: PokemonResponse = await res.json()
    return data
}

interface Props {
    params: { name: string }
}
export default async function Page({ params }: Props) {
    const pokemon = await getPokemon(params.name)
    const { name } = pokemon

    return (
        <main className="flex-1 space-y-3">
            <h1 className="mt-12 text-3xl">{capitalize(name)}</h1>
            <div className="bg-slate-700 text-white overflow-x-auto">
                <pre>{JSON.stringify(pokemon, null, 2)}</pre>
            </div>
        </main>
    )
}

export async function generateMetadata({ params }: Props) {
    return {
        title: `Pokedex - ${capitalize(params.name)}`,
    }
}
