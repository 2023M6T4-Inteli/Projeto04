import React from 'react'
import { Layout } from '../components/Layout'
import InputCard from '../components/InputCard'
import CommentCard from '../components/CommentCard'

const comments = () => {
  return (
    <Layout>
      <div className='h-full flex flex-col gap-4'>
        <InputCard />
        <CommentCard />
      </div>
       
    </Layout>
  )
}

export default comments