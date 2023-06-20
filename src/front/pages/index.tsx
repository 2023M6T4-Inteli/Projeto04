import { Layout } from "../components/Layout";
import Image from "next/image";
import React from "react";
import DonutChart from "../components/miaLua";
import img from "../assets/nuvem.svg";
import btg from "../assets/btg2.svg";
import vector from "../assets/Vector.png";
import chat from "../assets/chat.svg";
import sair from "../assets/sair.svg";
import BarChart from "../components/miaLua";
import Card from "../components/Card";
import InputCard from "../components/InputCard";
import WordCloudCard from "../components/WordCloudCard";
import TopWords from "../components/TopWords";
import Top from "../components/TopWords";

const Home = () => {
	const chartData = [30, 20, 50]; // Valores dos dados
	const chartLabels = ["Label 1", "Label 2", "Label 3"]; // Rótulos

	const words = [
		{
			text: "Batata",
			frequency: 10,
		},
	];

	const profiles = [
		{
			text: "Sophia",
		},
	];

	return (
		<Layout title={"Home"}>
			<div className="grid h-full grid-cols-3 grid-rows-6 gap-4">
				<InputCard />
				<Top
					gridClasses="row-span-3"
					title="Top 10 palavras"
					words={words}
				/>
				<WordCloudCard />
				<Top
					words={profiles}
					title="Top perfis engajados"
					gridClasses="row-span-2 col-span-1"
				/>
				<Card
					gridClass="row-span-2 col-span-2"
					title="Nuvem de palavras"
				>
					a
				</Card>
			</div>
		</Layout>
	);
};

export default Home;
