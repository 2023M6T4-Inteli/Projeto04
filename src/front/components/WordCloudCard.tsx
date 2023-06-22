import React, { useEffect, useState } from 'react'
import Card from './Card'
import Image from 'next/image'
import axios from '../axios';
import { usePost } from '../contexts/post';

const WordCloudCard = () => {
  const { postLink, postData} = usePost()
 
	
  return (
    <Card gridClass="absolute left-[calc(34vw+6vh)] top-[20vh] w-[calc(100vw-34vw-8vh)] h-[40vh]" title="Nuvem de palavras">
		<div className='w-full h-[80%]'>
			{postData && postData?.words_cloud && <img src={postData?.words_cloud} className='h-full w-full object-contain'  alt="Nuvem de palavras"/>}
		</div>
    </Card>

  )
}

export default WordCloudCard