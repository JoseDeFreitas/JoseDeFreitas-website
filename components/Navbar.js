export default function Navbar() {
    return (
        <nav className="fixed h-screen">
            <ul className="h-screen grid grid-cols-1 gap-8 place-content-center p-3 bg-first-300">
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