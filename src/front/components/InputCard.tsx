import React from "react";
import Card from "./Card";
import Input from "./Input";
import { Link } from "lucide-react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from "../contexts/post";
import JsonData from "../utils/top-palavras.json";
import axios from "../axios";

const validationSchema = yup.object({
	linkInput: yup.string().required("Esse campo é obrigatório"),
});

const InputCard = () => {
	const { postLink, setPostLink, setPostData, postData } = usePost();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			linkInput: postLink
		}
	});

	const onSubmit = async (data: any) => {
		try {
			const jsonInfo = JSON.parse(data.linkInput);
			setPostLink(jsonInfo)
			const  {data: res} = await axios.post('/post-analysis', jsonInfo)
			setPostData(res)

		} catch (err) {
			setPostLink(JsonData);
			const  {data: res} = await axios.post('/post-analysis', JsonData)
			setPostData(res)
		}
	};

	return (
		<Card
			gridClass="absolute left-[calc(14vw+4vh)] top-[2vh] w-[calc(100vw-14vw-6vh)]  h-[16vh]"
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
