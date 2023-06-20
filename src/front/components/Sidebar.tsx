import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import { LayoutDashboard, MessageCircle, LogOut } from "lucide-react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
	const items: SidebarItem[] = [
		{
			Icon: LayoutDashboard,
			text: "Visão geral",
			link: "/",
		},
		{
			Icon: MessageCircle,
			text: "Visão por comentário",
			link: "/comment",
		},
		{
			Icon: LogOut,
			text: "Sair",
			link: "/",
            marginTop: true,
            alignCenter: true
		},
	];

	return (
		<div className="bg-[#195AB4] rounded-lg px-4 py-8 flex flex-col items-center w-[14vw]">
			<Image src={Logo} alt="Logo" className="mb-8"/>
			<div className="flex flex-col gap-4 h-full">
				{items.map((item) => (
					<SidebarItem {...item} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
