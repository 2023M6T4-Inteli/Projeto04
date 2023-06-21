import Head from "next/head"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import Sidebar from "./Sidebar"

export const Layout = ({
    title,
    children
}: {
    title?: string,
    children: React.ReactNode
}) => {
    return (
        <div>
            <Head>
                <title>{
                    title ? `${title} | Next.js + TypeScript + TailwindCSS + Eslint + Prettier` : "Next.js + TypeScript + TailwindCSS + Eslint + Prettier"
                }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="flex gap-4 min-h-[100vh] p-8">
                <Sidebar/> 
                <div className="grow">
                    {children}
                </div>
            </div>
        </div>
    )
}