import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed h-screen w-48 bg-first-100 border-r-2 border-first-200">
            <div className="h-screen w-48 grid grid-cols-1 gap-2 place-content-center p-3 pr-4">
                <Link href="/">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-200">Home</a>
                </Link>
                <Link href="/programming">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-200">Programming</a>
                </Link>
                <Link href="/translation">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-200">Translation</a>
                </Link>
                <Link href="/translation">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-200">Blog</a>
                </Link>
            </div>
        </nav>
    )
}