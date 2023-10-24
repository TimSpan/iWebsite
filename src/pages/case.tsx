import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
export default function About() {
  return (
    <>
      <main className="dark:bg-slate-800">
        <Header />

        <div className="max-w-full mx-auto h-80 ">
          <div className="relative h-full">
            <Image
              src="/case/case_top.png"
              alt="aboutUs"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>

        <div className=" container mx-auto flex flex-col md:flex-row justify-evenly items-center px-32 py-16">
          <div className="flex flex-col justify-center items-center">
            <img className="h-14 w-14" src="/case/case1.png" alt="" />
            <p className="text-[#005BAC]  mb-2 mt-2">数字化展馆</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-14 w-14" src="/case/case2.png" alt="" />
            <p className="text-[#005BAC] mb-2 mt-2">建筑可视化</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-14 w-14" src="/case/case3.png" alt="" />
            <p className="text-[#005BAC] mb-2 mt-2">云间VR全景</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-14 w-14" src="/case/case4.png" alt="" />
            <p className="text-[#005BAC] mb-2 mt-2">云台CIM城市孪生</p>
          </div>
        </div>

        <div className="w-full h-auto bg-[#005BAC]">
          <div className="container mx-auto flex flex-col md:grid grid-cols-2">
            <div className="bg-red-400 w-full h-auto flex flex-col p-10 md:h-[550px]">
              <div>待填充内容</div>
            </div>
            <div className="w-full h-auto flex items-center justify-center md:h-[550px]">
              <img src="/case/case_1.png" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full h-auto">
          <div className="container mx-auto flex flex-col md:grid grid-cols-2">
            <div className="w-full h-auto flex items-center justify-center md:h-[550px]">
              <img src="/case/case_1.png" alt="" />
            </div>
            <div className="bg-red-400 w-full h-auto flex flex-col p-10 md:h-[550px]">
              <div>待填充内容</div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
      <style jsx>{``}</style>
    </>
  )
}
