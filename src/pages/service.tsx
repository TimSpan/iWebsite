import React from 'react'
import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'

function Service() {
  return (
    <>
      <main className="dark:bg-slate-800">
        <Header />
        <div className="max-w-full mx-auto h-80 ">
          <div className="relative h-full">
            <Image
              src="/service/service_top2.png"
              alt="aboutUs"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
        <div className="h-10"></div>
        <div className="container mx-auto mt-6 grid-cols-1 md:grid grid-cols-3 gap-4">
          <img className="w-full  h-[389px] " src="/service/service_1.png" alt="" />
          <div className="bg-[#EEEEEE] h-[389px] md:col-span-2 flex flex-col justify-center p-20">
            <div className="text-3xl text-[#565656] mb-8">产品工程服务</div>
            <ul>
              <li className="text-[#565656]">公司治理</li>
              <li className="text-[#565656]">股份变化</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-6 grid-cols-1 md:grid grid-cols-3 gap-4">
          <div className="bg-[#005BAC] text-[#ffffff] h-[389px] md:col-span-2 flex flex-col justify-center p-20">
            <div className="text-3xl  mb-8">产品工程服务</div>
            <div>
              鸿链数字科技通过建立完善的“在岸(Onsite)
              +近岸(Nearshore)+离岸(Offshore)”的交付服务模式，
              在全球范围内向客户提供全生命周期的从设备端到服务器端的软件开发/维护服务。
            </div>
          </div>
          <img className="w-full h-[389px]" src="/service/service_2.png" alt="" />
        </div>
        <div className="container mx-auto mt-6 grid-cols-1 md:grid grid-cols-3 gap-4">
          <img className="w-full  h-[389px] " src="/service/service_3.png" alt="" />
          <div className="bg-[#EEEEEE] h-[389px] md:col-span-2 flex flex-col justify-center p-20">
            <div className="text-3xl text-[#565656] mb-8">产品工程服务</div>
            <ul>
              <li className="text-[#565656]">公司治理</li>
              <li className="text-[#565656]">股份变化</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-6 grid-cols-1 md:grid grid-cols-3 gap-4">
          <div className="bg-[#005BAC] text-[#ffffff] h-[389px] md:col-span-2 flex flex-col justify-center p-20">
            <div className="text-3xl  mb-8">产品工程服务</div>
            <div>
              鸿链数字科技通过建立完善的“在岸(Onsite)
              +近岸(Nearshore)+离岸(Offshore)”的交付服务模式，
              在全球范围内向客户提供全生命周期的从设备端到服务器端的软件开发/维护服务。
            </div>
          </div>
          <img className="w-full h-[389px]" src="/service/service_4.png" alt="" />
        </div>
        <div className="container mx-auto mt-6 mb-6 grid-cols-1 md:grid grid-cols-3 gap-4">
          <img className="w-full  h-[389px] " src="/service/service_5.png" alt="" />
          <div className="bg-[#EEEEEE] h-[389px] md:col-span-2 flex flex-col justify-center p-20">
            <div className="text-3xl text-[#565656] mb-8">产品工程服务</div>
            <ul>
              <li className="text-[#565656]">公司治理</li>
              <li className="text-[#565656]">股份变化</li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
      <style jsx>
        {`
          .__img {
            height: 389px;
            width: 389px;
          }

          ul li:before {
            content: '●';
            color: #7e7e7e;
            margin-right: 5px;
          }
        `}
      </style>
    </>
  )
}

export default Service
