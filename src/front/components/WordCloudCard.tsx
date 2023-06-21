import React, { useEffect, useState } from 'react'
import Card from './Card'
import Image from 'next/image'
import axios from '../axios';
import { usePost } from '../contexts/post';

const WordCloudCard = () => {
  const { postLink, postData} = usePost()
 
	
  return (
    <Card gridClass="row-span-3 col-span-2" title="Nuvem de palavras">
       {postData && postData?.words_cloud && <img src={postData?.words_cloud}  alt="Nuvem de palavras"/>}
    </Card>

  )
}

export default WordCloudCard