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
            <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="josedefreitas" data-description="Support me on Buy me a coffee!" data-message="" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </nav>
    )
}