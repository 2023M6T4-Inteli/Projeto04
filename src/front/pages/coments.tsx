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
import chat2 from '../assets/chat2.svg';
import quadrado from '../assets/quadrado.svg';

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
                  <p className=' px-2'>Visão Geral</p>
                </div>
                <div className='flex flex-row mb-7 my-2'>
                  <Image src={chat2} alt='500' width={20}></Image>
                  <p className='px-2 text-white'>Visão Geral</p>
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
              <input type="text" className='bg-[#F6F6F6] w-full rounded-md px-3 mt-1' placeholder='Insira aqui o link do post' />
            </div>
            <div className='bg-[#FFFFFF] shadow-xl px-6 py-1 w-full pb-3 mt-9 rounded-xl'>
              <div className='flex flex-row px-10 justify-between w-full'>
                <div className='text-xl w-1/5 text-[#195AB4]'>
                  Autor
                </div>
                <div className='text-xl w-3/5 text-[#195AB4] ml-14'>
                  Comentário
                </div>
                <div className='text-xl w-2/5 text-[#195AB4] text-right'>
                  Sentimento
                </div>
            </div>
            <div className='mt-2 bg-[#F6F6F6] h-7 rounded-xl px-10 w-full flex flex-row'>
              <p className='w-1/5'>teste1</p>
              <p className='w-2/5 overflow-hidden overflow-ellipsis whitespace-nowrap'>testando comentario aifiaudifa faisudfgisadufas fiuasdfuiasfd uiasdfgiasudf iasufgaiusdf aufisudgf iausdfiuasdfgs </p>
              <div className='w-2/5 text-right'>Neutro</div>

            </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  )

}

export default Home