import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed h-screen w-48 bg-first-700">
            <div className="h-screen w-48 grid grid-cols-1 gap-3 place-content-center p-3 pr-4">
                <Link href="/">
                    <a className="p-2 rounded-lg text-fourth text-lg font-extrabold hover:bg-first-600">Home</a>
                </Link>
                <Link href="/programming">
                    <a className="p-2 rounded-lg text-fourth text-lg font-extrabold hover:bg-first-600">Programming</a>
                </Link>
                <Link href="/translation">
                    <a className="p-2 rounded-lg text-fourth text-lg font-extrabold hover:bg-first-600">Translation</a>
                </Link>
            </div>
        </nav>
    )
}