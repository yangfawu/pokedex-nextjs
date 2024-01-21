"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useFormState } from "react-dom"
import { lookupPokemon } from "./actions"

const INITIAL_STATE = {
    errors: "",
}

export default function Search() {
    const [state, action] = useFormState(lookupPokemon, INITIAL_STATE)

    return (
        <form
            className="flex flex-col items-center max-w-xl w-full gap-8"
            action={action}
        >
            <div className="self-stretch">
                <div className="relative">
                    <input
                        className="w-full text-lg pl-10 pr-4 py-2 border rounded-full"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Enter Pokemon name"
                        required
                    />
                    <MagnifyingGlassIcon className="w-5 absolute top-1/2 left-3 -translate-y-1/2" />
                </div>
                {
                    state?.errors &&
                    <p className="text-xs text-red-500 mt-1 ml-10">{state.errors}</p>
                }
            </div>
            <div className="flex items-center justify-center gap-2">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Search
                </button>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Random
                </button>
            </div>
        </form>
    )
}
