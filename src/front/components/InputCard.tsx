import React from "react";
import Card from "./Card";
import Input from "./Input";
import { Link } from "lucide-react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostLink } from "../contexts/postLink";
import JsonData from "../utils/top-palavras.json";

const validationSchema = yup.object({
	linkInput: yup.string().required("Esse campo é obrigatório"),
});

const InputCard = () => {
	const { postLink, setPostLink } = usePostLink();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = (data: any) => {
		try {
			const jsonInfo = JSON.parse(data.linkInput);
			setPostLink(jsonInfo)
		} catch (err) {
			setPostLink(JsonData);
		}
	};

	return (
		<Card
			gridClass="col-span-full row-span-1"
			title="Analise os posts do Instagram"
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex w-full gap-2"
			>
				<Input
					register={register}
					name="linkInput"
					Icon={Link}
					placeholder="Insira aqui o link do post"
				/>
				<Button>Pesquisar</Button>
			</form>
		</Card>
	);
};

export default InputCard;
