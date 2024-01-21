interface Props {
    params: { name: string }
}

export default function Page({ params }: Props) {
    const { name } = params
    return (
        <main className="flex-1">
            <h1>Pokemon - {name}</h1>
        </main>
    )
}

export async function generateMetadata({ params }: Props) {
    const { name } = params
    return {
        title: `Pokedex - ${name}`,
    }
}
