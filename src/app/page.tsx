import Link from "next/link";
import Image from "next/image"
import img from "@/app/nextjs.png"

export default function Home() {
  return (
    <div className="items-center justify-between justify-items-center max-md:w-full sm:p-20 max-md:p-20 font-[family-name:var(--font-geist-sans)]">
                      <div className="relative mb-10 w-full max-w-3xl"> {/* Set a max width for the image */}
                    <Image
                        className="rounded-[50px] border-4 border-slate-500 object-cover object-center max-sm:rounded"
                        alt="hero"
                        src={img}
                        layout="responsive"
                        width={500} 
                    />
                </div>
            <Link href="/blog" className="text-blue-600 hover:text-blue-400 underline text-3xl">
            <button className="text-3xl relative inline-flex items-center py-3 px-4 font-medium text-white bg-gray-900 border border-transparent rounded-full hover:text-purple-600 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent">
            Next.Js 15
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
  );
}
