import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="fixed h-screen w-48 bg-first-200 border-r-2 border-first-300 dark:bg-first-800 dark:border-first-900">
            <div className="absolute w-full p-3 left-0 grid grid-flow-col gap-2 justify-items-stretch">
                <button aria-label="Toggle Dark Mode" type="button" className="py-1 px-2 rounded text-first-700 text-sm text-center font-semibold focus:outline-none focus:ring focus:border-first-500 border-2 border-first-400 hover:bg-first-300 dark:text-first-50 dark:border-first-900 dark:hover:bg-first-900" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? "light" : "dark"}</button>
            </div>
            <div className="h-screen w-48 grid grid-cols-1 gap-2 place-content-center p-3 pr-4">
                <Link href="/">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-300 dark:text-first-100 dark:hover:bg-first-900">Home</a>
                </Link>
                <Link href="/programming">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-300 dark:text-first-100 dark:hover:bg-first-900">Programming</a>
                </Link>
                <Link href="/translation">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-300 dark:text-first-100 dark:hover:bg-first-900">Translation</a>
                </Link>
                <Link href="/blog">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-300 dark:text-first-100 dark:hover:bg-first-900">Blog</a>
                </Link>
            </div>
            <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="josedefreitas" data-description="Support me on Buy me a coffee!" data-message="" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </nav>
    )
}