import React, { useEffect, useState } from 'react'
import Card from './Card'
import Image from 'next/image'
import axios from '../axios';
import { usePostLink } from '../contexts/postLink';

const WordCloudCard = () => {
  const { postLink} = usePostLink()
  const [imageLink, setImageLink] = useState(null)
  
	const getImageLink = async () => {
		const { data } = await axios.post("/nuvem-palavras", postLink);
		setImageLink(data.imagem_nuvem);
    console.log(data.imagem_nuvem)
	};

	useEffect(() => {
		if (postLink) {
			getImageLink();
		}
	}, [postLink]);

  return (
    <Card gridClass="row-span-3 col-span-2" title="Nuvem de palavras">
       {imageLink && <img src={imageLink}  alt="Nuvem de palavras"/>}
    </Card>

  )
}

export default WordCloudCard