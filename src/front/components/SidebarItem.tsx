import Link from "next/link";
import React from "react";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/router";

interface SidebarItem {
	Icon: LucideIcon;
	text: string;
    link: string
    marginTop?: boolean
    alignCenter?: boolean
}

const SidebarItem: React.FC<SidebarItem> = ({ Icon, link, text, marginTop,alignCenter }) => {
	const router = useRouter()
	return (
		<Link href={link} className={`flex items-center gap-4 ${router.pathname == link ? 'text-white' : 'text-[#ccc]'}  ${marginTop && 'mt-auto'} ${alignCenter && 'justify-center'} hover:-translate-y-1 transition-all`}>
			<Icon color={`${router.pathname == link ? 'white' : '#ccc'}`} /> {text}
		</Link>
	);
};

export default SidebarItem;
