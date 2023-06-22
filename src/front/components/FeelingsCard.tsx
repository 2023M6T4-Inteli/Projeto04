import React, { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import Chart from "./Chart";
import { ArrowRightCircle } from "lucide-react";
import { usePost } from "../contexts/post";
import axios from "../axios";
import Link from "next/link";

const FeelingsCard = () => {
	const { postLink, postData } = usePost();


	const data = useMemo(() => {
		return {
			labels: ["Negativo", "Neutro", "Positivo"],
			datasets: [
				{
					label: "Proporção de sentimentos",
					data: [postData?.proportions[0], postData?.proportions[1], postData?.proportions[2]],
					backgroundColor: ["#FF2323", "#F5F5F5", "#00D02E"],
					borderWidth: 1,
				},
			],
		};
	}, [postData?.proportions]);

	return (
		<Card gridClass="absolute top-[62vh] right-[2vh] w-[calc(100vw-34vw-8vh)] h-[36vh]" title="Sentimentos">
				<div className="absolute top-0 left-20 h-full ">
					{postData?.proportions && <Chart data={data} />}

				</div>
				<Link href={"/comments"} className="absolute bottom-0 right-4 translate-y-[-50%] flex float-right cursor-pointer items-center gap-2 text-lg font-bold text-[#195AB4] transition-all hover:scale-105">
					Ver sentimento por comentário
					<ArrowRightCircle color="#195AB4" size={30} />
				</Link>
		</Card>
	);
};

export default FeelingsCard;
