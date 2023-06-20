import Link from "next/link";
import React from "react";
import { LucideIcon } from "lucide-react";

interface SidebarItem {
	Icon: LucideIcon;
	text: string;
    link: string
    marginTop?: boolean
    alignCenter?: boolean
}

const SidebarItem: React.FC<SidebarItem> = ({ Icon, link, text, marginTop,alignCenter }) => {
	return (
		<Link href={link} className={`flex items-center gap-4 text-white ${marginTop && 'mt-auto'} ${alignCenter && 'justify-center'}`}>
			<Icon color="white" /> {text}
		</Link>
	);
};

export default SidebarItem;
