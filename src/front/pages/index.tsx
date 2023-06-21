import { Layout } from "../components/Layout";
import React, { useState, useEffect, useMemo } from "react";
import WordCloudCard from "../components/WordCloudCard";
import Top from "../components/TopWordsCard";
import FeelingsCard from "../components/FeelingsCard";
import InputCard from "../components/InputCard";
import { usePostLink } from "../contexts/postLink";
import axios from "../axios";


const Home = () => {
	const { postLink } = usePostLink();
	const [topWords, setTopWords] = useState([]);
	
	const getTopWords = async () => {
		const { data } = await axios.post("/top-palavras", postLink);
		setTopWords(data.top_palavras);
	};

	const topWordsMemo = useMemo(
		() =>
			topWords.map((word) => {
				return {
					text: word[0],
					frequency: word[1],
				};
			}),
		[topWords],
	);

	const getTopProfiles = async () => {
		const { data } = await axios.post("/top-palavras", postLink);
		setTopWords(data);
	};

	useEffect(() => {
		if (postLink) {
			getTopWords();
		}
	}, [postLink]);

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
