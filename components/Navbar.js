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
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Navbar;