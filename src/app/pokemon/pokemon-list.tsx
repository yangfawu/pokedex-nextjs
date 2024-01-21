"use client"

import { useCallback, useState } from "react"
import { AllResponse } from "./types"
import Link from "next/link"

interface Props {
    initialState: AllResponse
}
export default function PokemonList({ initialState }: Props) {
    const [data, setData] = useState(initialState.results)
    const [next, setNext] = useState(initialState.next)
    const [loading, setLoading] = useState(false)

    const loadMore = useCallback(async () => {
        if (!next) return

        try {
            setLoading(true)

            const res = await fetch(next)
            if (!res.ok)
                throw new Error(`Failed to fetch netx page of pokemon: ${next}`)

            const { next: newNext, results }: AllResponse = await res.json()
            setData(prevData => prevData.concat(results))
            setNext(newNext)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [next])

    return (
        <div className="flex flex-wrap gap-2">
            {data.map(({ name }) => (
                <Link
                    key={name}
                    className="px-3 py-1 bg-slate-300 rounded-full hover:text-blue-500"
                    href={`/pokemon/${name}`}
                >
                    {name}
                </Link>
            ))}
            {next && (
                <button
                    className="px-3 py-1 bg-slate-700 text-white rounded-full hover:text-blue-500"
                    onClick={loadMore}
                    disabled={loading}
                >
                    {loading ? "loading..." : "load more"}
                </button>
            )}
        </div>
    )
}
