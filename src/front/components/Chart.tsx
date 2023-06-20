import {
	ChartData,
	ChartDataCustomTypesPerDataset,
	TooltipLabelStyle,
} from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
	data: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			backgroundColor: string[];
			borderWidth: number;
		}[];
	};
}

const Chart = ({ data }: Props) => {
	return (
		<Doughnut
			data={data}
			options={{
				maintainAspectRatio: true,
				plugins: {
					legend: {
						position: "right",
					},
				},
			}}
		/>
	);
};

export default Chart;
