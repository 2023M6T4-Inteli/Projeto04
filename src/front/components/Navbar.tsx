import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center w-auto h-auto p-4 bg-[#000000af] shadow-md text-white">
            <div className="font-semibold text-xl h-auto">Next.js + TypeScript + TailwindCSS + Eslint + Prettier template</div>

            <div className="flex flex-row items-center">
                <Link href={"/"} className="font-semibold text-lg hover:underline">Home</Link>
            </div>
        </div>
    )
}