import Link from 'next/link'

const Navbar = () => (
    <nav id="navbar">
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/programming">
                    <a>Programming</a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/translation">
                    <a>Translation</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Navbar;