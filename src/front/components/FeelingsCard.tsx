import React, { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import Chart from "./Chart";
import { ArrowRightCircle } from "lucide-react";
import { usePostLink } from "../contexts/postLink";
import axios from "../axios";

const FeelingsCard = () => {
	const { postLink } = usePostLink();

	const [chartData, setChartData] = useState([]);

	const data = useMemo(() => {
		return {
			labels: ["Negativo", "Neutro", "Positivo"],
			datasets: [
				{
					label: "Proporção de sentimentos",
					data: [chartData[0], chartData[1], chartData[2]],
					backgroundColor: ["#FF2323", "#F5F5F5", "#00D02E"],
					borderWidth: 1,
				},
			],
		};
	}, [chartData]);

	const getChartData = async () => {
		if (postLink) {
			const { data } = await axios.post("/proporcoes", postLink);
			setChartData(data);
		}
	};

	useEffect(() => {
		getChartData();
	}, [postLink]);

	return (
		<Card gridClass="row-span-2 col-span-2 h-full" title="Sentimentos">
			<div className="flex h-60 items-end justify-between gap-4 overflow-hidden">
				<div className="ml-12 h-80 grow self-center">
					{chartData && <Chart data={data} />}
				</div>
				<div className="flex cursor-pointer items-center gap-2 text-lg font-bold text-[#195AB4] transition-all hover:scale-105">
					Ver sentimento por comentário
					<ArrowRightCircle color="#195AB4" size={30} />
				</div>
			</div>
		</Card>
	);
};

export default FeelingsCard;
