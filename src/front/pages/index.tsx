import { Layout } from "../components/Layout";
import React, { useState, useEffect, useMemo } from "react";
import WordCloudCard from "../components/WordCloudCard";
import Top from "../components/TopWordsCard";
import FeelingsCard from "../components/FeelingsCard";
import InputCard from "../components/InputCard";
import { usePost } from "../contexts/post";
import axios from "../axios";


const Home = () => {
	const { postLink, postData } = usePost();
	
	

	const topWordsMemo = useMemo(
		() =>
		postData?.top_words.map((word: any) => {
				return {
					text: word[0],
					frequency: word[1],
				};
			}),
		[postData],
	);

	const topProfilesMemo = useMemo(() => postData?.top_profiles.map((profile: any) => {
		return {
			text: profile
		}
	}), [postData])

	const profiles = [
		{
			text: "Sophia",
		},
	];

	return (
		<Layout title={"Home"}>
			<InputCard />
			<Top
				gridClasses="absolute top-[20vh] w-[20vw] h-[40vh] left-[calc(14vw+4vh)] overflow-y-auto"
				title="Top 10 palavras"
				words={topWordsMemo}
			/>
			<WordCloudCard />
			<Top
				words={topProfilesMemo}
				title="Top perfis engajados"
				gridClasses="absolute top-[62vh] left-[calc(14vw+4vh)] w-[20vw] h-[36vh] overflow-y-auto"
			/>
			<FeelingsCard />
		</Layout>
	);
};

export default Home;
