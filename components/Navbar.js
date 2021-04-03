export default function Navbar() {
    return (
        <nav className="fixed ml-8">
            <ul className="grid grid-cols-1 gap-10 p-5 rounded-md bg-first-200">
                <li>
                    <a href="#start" class="p-3 rounded-md bg-first-500 text-fourth text-lg">Start</a>
                </li>
                <li>
                    <a href="#programming" class="p-3 rounded-md bg-first-500 text-fourth text-lg">Programming</a>
                </li>
                <li>
                    <a href="#translation" class="p-3 rounded-md bg-first-500 text-fourth text-lg">Translation</a>
                </li>
            </ul>
        </nav>
    )
}