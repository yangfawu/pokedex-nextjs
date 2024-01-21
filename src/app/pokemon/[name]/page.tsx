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
        <main className="flex-1">
            <h1>Pokemon - {name}</h1>
            <code>{JSON.stringify(pokemon, null, 2)}</code>
        </main>
    )
}
