import React, { createContext, useState, useContext } from "react";

interface Post {
	classificacao: any
	proportions: any
	top_words: any
	biggest_cor: any
	words_cloud: any
	top_profiles: any
}

interface PostContextInterface {
	postLink: any;
	setPostLink(postLink: any): void;
	postData: Post | null;
	setPostData(postData: Post | null): void;
}

const PostContext = createContext<PostContextInterface | null>(null);

export default function PostProvider({ children }: any) {
	const [postLink, setPostLink] = useState<any>(null);
	const [postData, setPostData] = useState<Post | null>(null);

	return (
		<PostContext.Provider
			value={{
				postLink,
				setPostLink,
				postData,
				setPostData
			}}
		>
			{children}
		</PostContext.Provider>
	);
}

export function usePost() {
	const context = useContext(PostContext);
	if (!context)
		throw new Error("usePost must be used within a PostProvider");
	const {postLink,
		setPostLink,
		postData,
		setPostData } = context;
	return { postLink,
		setPostLink,
		postData,
		setPostData};
}
