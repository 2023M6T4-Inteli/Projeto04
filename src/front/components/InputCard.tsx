import React from "react";
import Card from "./Card";
import Input from "./Input";
import { Link } from "lucide-react";
import Button from "./Button";

const InputCard = () => {
	return (
		<Card
			gridClass="col-span-full row-span-1"
			title="Analise os posts do Instagram"
		>
			<div className="flex w-full gap-2">
				<Input Icon={Link} placeholder="Insira aqui o link do post" />
				<Button>Pesquisar</Button>
			</div>
		</Card>
	);
};

export default InputCard;
