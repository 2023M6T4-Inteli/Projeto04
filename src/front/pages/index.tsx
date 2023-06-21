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
					words={topWordsMemo}
				/>
				 <WordCloudCard />
				<Top
					words={profiles}
					title="Top perfis engajados"
					gridClasses="row-span-2 col-span-1"
				/>
				<FeelingsCard />
			</div>
		</Layout>
	);
};

export default Home;
