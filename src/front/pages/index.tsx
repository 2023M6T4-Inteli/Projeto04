import { Layout } from '../components/Layout'
import Image from 'next/image'
import React from 'react';
import DonutChart from '../components/miaLua';
import img from '../assets/nuvem.svg'
import btg from '../assets/btg2.svg'
import vector from '../assets/Vector.png'
import chat from '../assets/chat.svg'
import sair from '../assets/sair.svg'
import BarChart from '../components/miaLua';

const Home = () => {


  const chartData = [30, 20, 50]; // Valores dos dados
  const chartLabels = ['Label 1', 'Label 2', 'Label 3']; // Rótulos

  return (
    <Layout title={'Home'}>
      <div className='bg-[#C1E4EC] m-2'>
        <div className='flex flex-row'>
          <div className='w-1/5 bg-[#195AB4] py-3 rounded-lg mx-6 h-[780px] flex flex-col'>
            <div className='flex flex-row px-5'>
              <Image src={btg} alt='500' width={200}></Image>
            </div>
            <div className='flex flex-col mt-8 h-full justify-between mx-6'>
              <div className='flex flex-col mb-7'>
                <div className='flex flex-row my-2'>
                  <Image src={vector} alt='500' width={20}></Image>
                  <p className='text-white px-2'>Visão Geral</p>
                </div>
                <div className='flex flex-row mb-7 my-2'>
                  <Image src={chat} alt='500' width={20}></Image>
                  <p className=' px-2'>Visão Geral</p>
                </div>


              </div>


              <div className='flex flex-row mb-7 my-2 items-center ml-20'>
                <Image src={sair} alt='500' width={20}></Image>
                <p className='text-white px-2'>Sair</p>
              </div>
            </div>

          </div>



          <div className='w-4/5 rounded-md flex flex-col'>
            <div className='bg-[#FFFFFF] rounded-md shadow-xl px-6 py-1 w-full pb-3'>
              <p className='text-xl text-[#195AB4]'> Analise os posts do Instagram
              </p>
              <input type="text" className='bg-[#F6F6F6] w-full rounded-md px-3 mt-1' placeholder='Insira aqui o link do post
' />
            </div>
            <div className='flex flex-row mt-5 mb-2'>
              <div className='w-[23%] bg-[#ffff] rounded-lg text-center pb-3'>
                <p className='text-[#195AB4] text-xl font-bold '>Top 10 palavras</p>
                <div className='mt-5 flex flex-col rounded-lg px-2'>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>

                </div>
              </div>
              <div className='w-[77%] bg-white mx-9 h-full rounded-xl flex flex-col justify-end'>
                <p className='text-xl text-[#195AB4] font-bold px-10' >Nuvem de palavras</p>
                <div className='px-10'>
                  <Image src={img} alt='500' width={700}></Image>
                </div >


              </div>
            </div>

            <div className='flex flex-row'>
              <div className='w-[23%] bg-[#ffff] rounded-xl text-center pb-3 shadow-lg mt-3'>
                <p className='text-[#195AB4] text-xl font-bold '>Top perfis engajados</p>
                <div className='mt-5 flex flex-col rounded-lg px-2'>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                  <p className='bg-[#F6F6F6] mt-2'>testtt</p>
                </div>
              </div>

              <div className='w-[77%] bg-white mx-9 rounded-xl flex flex-col shadow-lg pt-4 '>
                <p className='text-xl text-[#195AB4] font-bold px-10' >Nuvem de palavras</p>
                <div className='h-[240px] w-full flex flex-row px-10 mt-2'>
                  <div className='w-1/2 flex flex-col'>
                    <p className='text-[#195AB4] absolute'>Ver sentimento por comentário
                    </p>
                    <DonutChart data={chartData} labels={chartLabels} />
                  </div>
                  <div className='w-1/2 flex flex-col'>
                    <p className='text-[#195AB4]'>Principal sentimento</p>
                    <p className='text-xl text-black font-bold my-2'>POSITIVO</p>
                    <p className='text-[#195AB4]'>Quantidade de comentários</p>
                    <p className='text-2xl my-2'> 17</p>
                  </div>


                </div>


                <div className='px-10 items-center'>

                </div>


              </div>


            </div>



          </div>

        </div>
      </div>
    </Layout>
  )

}

export default Home