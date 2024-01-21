type SpriteKeys =
    | "back_default"
    | "back_female"
    | "back_shiny"
    | "back_shiny_female"
    | "front_default"
    | "front_female"
    | "front_shiny"
    | "front_shiny_female"

export interface PokemonResponse {
    abilities: {
        ability: {
            name: string
        }
        is_hidden: boolean
        slot: number
    }[]
    base_experience: number
    forms: {
        name: string
    }[]
    height: number
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: {
        move: {
            name: string
        }
    }[]
    name: string
    order: number
    species: {
        name: string
    }
    sprites: Record<SpriteKeys, string | null>
    stats: {
        base_stat: number
        effort: number
        stat: {
            name: string
        }
    }[]
    types: {
        slot: number
        type: {
            name: string
        }
    }[]
    weight: number
}
