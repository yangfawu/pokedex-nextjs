import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex-1 flex items-center justify-center gap-4">
            <div className="space-y-4 max-w-sm">
                <div>
                    <h3 className="text-3xl font-bold">Oops!</h3>
                    <h4 className="text-3xl">Page not found</h4>
                </div>
                <p>
                    The resource you are looking for does not exist. Please try
                    looking for something else or try again later.
                </p>
                <div className="pt-8">
                    <Link className="p-3 bg-slate-300 rounded hover:bg-slate-600 hover:text-white transition-all" href="/">
                        Go Home
                    </Link>
                </div>
            </div>
            <div className="max-w-xs">
                <Image
                    src="/confused-duck.png"
                    alt="Confused Duck"
                    layout="responsive"
                    objectFit="cover"
                    width={901}
                    height={1179}
                    priority
                />
            </div>
        </main>
    )
}
