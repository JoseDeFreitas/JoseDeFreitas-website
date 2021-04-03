export default function Navbar() {
    return (
        <nav className="fixed h-screen w-48 bg-first-400 border-r-8 border-first-600">
            <ul className="h-screen w-48 grid grid-cols-1 gap-8 place-content-center p-3">
                <li>
                    <a href="/" className="p-3 rounded-lg bg-first-600 text-fourth text-lg font-extrabold hover:bg-first-700">Home</a>
                </li>
                <li>
                    <a href="/programming" className="p-3 rounded-lg bg-first-600 text-fourth text-lg font-extrabold hover:bg-first-700">Programming</a>
                </li>
                <li>
                    <a href="/translation" className="p-3 rounded-lg bg-first-600 text-fourth text-lg font-extrabold hover:bg-first-700">Translation</a>
                </li>
            </ul>
        </nav>
    )
}