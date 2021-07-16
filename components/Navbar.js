import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="fixed z-20 h-16 w-screen bg-first-200 border-b-2 border-first-300 dark:bg-first-800 dark:border-first-700 xl:h-screen xl:w-48 xl:border-b-0 xl:border-r-2">
            <div className="absolute w-auto pt-1 pr-5 right-0 top-0 grid grid-flow-col gap-2 justify-items-stretch xl:w-full xl:right-auto xl:top-auto xl:left-0 xl:p-3">
                <button aria-label="Toggle Dark Mode" type="button" className="px-1 rounded text-first-700 text-sm text-center font-semibold focus:outline-none focus:ring focus:border-first-500 border-2 border-first-400 hover:bg-first-400 dark:text-first-50 dark:border-first-600 dark:hover:bg-first-900 xl:py-1 xl:px-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? "light" : "dark"}</button>
            </div>
            <div className="h-16 w-screen grid grid-flow-col gap-1 place-content-center p-2 pr-12 xl:h-screen xl:w-48 xl:grid-flow-row xl:grid-cols-1 xl:gap-2 xl:p-3 xl:pr-4">
                <Link href="/">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-400 dark:text-first-100 dark:hover:bg-first-900">Home</a>
                </Link>
                <Link href="/programming">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-400 dark:text-first-100 dark:hover:bg-first-900">Programming</a>
                </Link>
                <Link href="/translation">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-400 dark:text-first-100 dark:hover:bg-first-900">Translation</a>
                </Link>
                <Link href="/blog">
                    <a className="p-2 rounded text-base font-semibold text-first-800 hover:bg-first-400 dark:text-first-100 dark:hover:bg-first-900">Blog</a>
                </Link>
            </div>
            <a href='https://ko-fi.com/D1D62AAG8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com'/></a>
        </nav>
    )
}