import React from "react";
import Card from "./Card";

interface Props {
	words: {
		text: string;
		frequency?: number;
	}[];
    gridClasses: string
    title: string
}

const TopCard = ({words, gridClasses, title}: Props) => {
	return (
		<Card gridClass={gridClasses} title={title}>
			<div className="flex flex-col gap-2">
				{words.map((item) => (
					<div className="flex justify-between rounded-lg bg-[#F6F6F6] px-4 py-2">
						{item.text} {item.frequency && <span>{item.frequency}</span>}
					</div>
				))}
				{<div className=""></div>}
			</div>
		</Card>
	);
};

export default TopCard;
