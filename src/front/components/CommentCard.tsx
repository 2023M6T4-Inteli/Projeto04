import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from '../axios';
import { usePost } from '../contexts/post';

const CommentCard = () => {
    const { postLink, postData } = usePost();

  return (
    <Card gridClass='absolute top-[20vh] w-[calc(100vw-14vw-6vh)] h-[78vh] left-[calc(14vw+4vh)] overflow-y-auto'>
        <table className='w-full m-auto border-spacing-y-2 border-separate'>
            <thead>
                <tr className='text-[#195AB4] text-lg'>
                    <th className='py-2 px-6 max-w-xl text-left'>Autor</th>
                    <th className='py-2 px-6 max-w-xl text-left'>Comentário</th>
                    <th className='py-2 px-6 max-w-xl text-left'>Sentimento</th>
                </tr>
            </thead>
            <tbody>
                {postData?.classificacao.length > 0 && postData?.classificacao.map((item: any) => (
                <tr key={item.author} className='bg-[#F6F6F6] overflow-hidden rounded-2xl'>
                    <td className='p-2 px-6 max-w-xl'>{item.author}</td>
                    <td className='p-2 px-6 max-w-xl'>{item.comment}</td>
                    <td className='p-2 px-6 max-w-xl'>{item.predicao}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </Card>
  )
}

export default CommentCard