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

        <div className="container mx-auto px-32 py-16 text-[#5E5E5E] text-xl text-center">
          鸿链以210余个业务方向，750种解决方案及产品，支撑电信、能源、金融
          政府、交通、医疗、环保等20余个行业的快速发展，推动国民经济基础设施与重要民生领域的信息化水平不断提高。
        </div>

        <div className="container mx-auto flex flex-col md:grid grid-cols-5 px-32 py-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center mb-20">
                <img className="h-14 w-14" src="/case/case1.png" alt="" />
                <p className="text-[#005BAC]   mt-2">数字化展馆</p>
              </div>
            )
          })}
        </div>

        <Footer />
      </main>
      <style jsx>{``}</style>
    </>
  )
}
