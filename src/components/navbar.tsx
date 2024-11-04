import Link from "next/link"
import Image from "next/image";
import logo from "../components/next.js-15.jpeg"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between sm:flex-row">
                 <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <span className="ml-3 text-xl font-bold">Next.js 15</span>
        </Link>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                <Link href="https://nextjs.org/blog/next-15">
          <button className="relative inline-flex items-center py-2 px-4 text-base font-medium text-white bg-gray-900 border border-transparent rounded-full hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent">
            Documentation
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
                </div>
            </div>
        </nav>
    )
}