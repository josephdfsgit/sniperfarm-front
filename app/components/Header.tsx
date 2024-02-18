import Link from "next/link";
import { Kanit } from "next/font/google";

const kanit = Kanit({ weight: ['500'], subsets: ['latin']})

export default function Header() {
    return(
        <header className="text-center w-full">
            <h1 className={`${kanit.className} text-6xl sm:text-[10vh] leading-none`}>SNIPERFARM</h1>
            <nav className="mx-auto w-full sm:w-[60vw] grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 mt-4">
                <Link href="/launch" className={`${kanit.className} text-xl sm:text-[1.6em] hover:text-green-700`}>Launch</Link>
                <Link href="/liquidity" className={`${kanit.className} text-xl sm:text-[1.6em] hover:text-green-700`}>Liquidity</Link>
                <Link href="/sell" className={`${kanit.className} text-xl sm:text-[1.6em] hover:text-green-700`}>Sell</Link>
                <Link href="/stats" className={`${kanit.className} text-xl sm:text-[1.6em] hover:text-green-700`}>Stats</Link>
            </nav>
        </header>
    );
}