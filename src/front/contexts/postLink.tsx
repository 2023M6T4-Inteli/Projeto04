import React, { createContext, useState, useContext } from "react";

interface PostLinkContextInterface {
	postLink: any;
	setPostLink(postLink: any): void;
}

const PostLinkContext = createContext<PostLinkContextInterface | null>(null);

export default function PostLinkProvider({ children }: any) {
	const [postLink, setPostLink] = useState<any>(null);

	return (
		<PostLinkContext.Provider
			value={{
				postLink,
				setPostLink,
			}}
		>
			{children}
		</PostLinkContext.Provider>
	);
}

export function usePostLink() {
	const context = useContext(PostLinkContext);
	if (!context)
		throw new Error("usePostLink must be used within a PostLinkProvider");
	const { postLink, setPostLink } = context;
	return { postLink, setPostLink };
}
