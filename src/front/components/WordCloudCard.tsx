import React from 'react'
import Card from './Card'
import Image from 'next/image'
import ImageCloud from "../assets/nuvem.svg" 

const WordCloudCard = () => {
  return (
    <Card gridClass="row-span-3 col-span-2" title="Nuvem de palavras">
        <Image src={ImageCloud}  alt="Nuvem de palavras"/>
    </Card>

  )
}

export default WordCloudCard