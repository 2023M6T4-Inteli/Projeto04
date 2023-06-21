import React from "react";
import PropTypes from "prop-types";

interface Props {
	children: any;
	title: string;
    gridClass?: string
}

const Card: React.FC<Props> = ({ children, title, gridClass }) => {



	return (
		<div className={`rounded-lg bg-white p-4 shadow ${gridClass && gridClass}`}>
			<h3 className="mb-4 text-xl font-semibold text-[#195AB4]">{title}</h3>
			{children}
		</div>
	);
};

export default Card;
