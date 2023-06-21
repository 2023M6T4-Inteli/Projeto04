import { Layout } from "../components/Layout";
import React, { useState, useEffect, useMemo } from "react";
import WordCloudCard from "../components/WordCloudCard";
import Top from "../components/TopWordsCard";
import FeelingsCard from "../components/FeelingsCard";
import InputCard from "../components/InputCard";
import { usePostLink } from "../contexts/postLink";
import axios from "../axios";
import jsonData from "../utils/top-palavras.json"

// export const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

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
				console.log(word)
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
		console.log(postLink)
		if (postLink) {
			getTopWords();
		}
	}, [postLink]);

	const words = [
		{
			text: "Batata",
			frequency: 10,
		},
	];

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
