"use server"

import { redirect } from "next/navigation"
import { z } from "zod"

const schema = z.object({
    search: z.string().trim().min(1, "Search cannot be empty").toLowerCase(),
})

export async function lookupPokemon(prevState: any, data: FormData) {
    const validated = schema.safeParse({
        search: data.get("search"),
    })

    if (!validated.success) {
        const errors =
            validated.error.flatten().fieldErrors.search?.[0] ||
            "Unknown search error"
        return { errors }
    }

    const { search } = validated.data
    redirect(`/pokemon/${search}`)
}
