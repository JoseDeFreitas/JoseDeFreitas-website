export default function Navbar() {
    return (
        <nav className="fixed h-full">
            <ul className="h-full grid grid-cols-1 p-3 rounded-r-lg bg-first-200">
                <li>
                    <a href="/" className="p-3 rounded-lg bg-first-500 text-fourth text-lg font-extrabold hover:bg-first-600">Home</a>
                </li>
                <li>
                    <a href="/programming" className="p-3 rounded-lg bg-first-500 text-fourth text-lg font-extrabold hover:bg-first-600">Programming</a>
                </li>
                <li>
                    <a href="/translation" className="p-3 rounded-lg bg-first-500 text-fourth text-lg font-extrabold hover:bg-first-600">Translation</a>
                </li>
            </ul>
        </nav>
    )
}