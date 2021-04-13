import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="fixed z-20 h-16 w-screen bg-first-200 border-b-2 border-first-300 dark:bg-first-800 dark:border-first-900 xl:h-screen xl:w-48 xl:border-b-0 xl:border-r-2">
            <div className="absolute w-auto pt-1 pr-5 right-0 top-0 grid grid-flow-col gap-2 justify-items-stretch xl:w-full xl:right-auto xl:top-auto xl:left-0 xl:p-3">
                <button aria-label="Toggle Dark Mode" type="button" className="px-1 rounded text-first-700 text-sm text-center font-semibold focus:outline-none focus:ring focus:border-first-500 border-2 border-first-400 hover:bg-first-300 dark:text-first-50 dark:border-first-900 dark:hover:bg-first-900 xl:py-1 xl:px-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? "light" : "dark"}</button>
            </div>
            <div className="h-16 w-screen grid grid-flow-col gap-1 place-content-center p-2 pr-12 xl:h-screen xl:w-48 xl:grid-flow-row xl:grid-cols-1 xl:gap-2 xl:p-3 xl:pr-4">
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