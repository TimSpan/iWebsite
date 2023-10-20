import Header from './../components/header'
import Footer from './../components/footer'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
export default function About() {
  const imageRef = useRef(null)
  const mainBgRef = useRef(null)
  const [imageHeight, setImageHeight] = useState(0)
  useLayoutEffect(() => {
    const updateImageHeight = () => {
      setImageHeight(imageRef.current.clientHeight)
    }
    window.addEventListener('resize', updateImageHeight)
    updateImageHeight()

    return () => {
      window.removeEventListener('resize', updateImageHeight)
    }
  }, [])

  useLayoutEffect(() => {
    mainBgRef.current.style.height = imageHeight + 'px'
  }, [imageHeight])

  return (
    <>
      <main className="dark:bg-slate-800">
        <Header />
        <div className="max-w-full mx-auto h-80 ">
          <div className="relative h-full">
            <Image
              src="/about_us/about_us.png"
              alt="aboutUs"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>

        <div className="container mx-auto h-96 p-4 text-center md:flex flex-col justify-evenly h-80">
          <div className="_title dark:text-k_White-1">鸿链简介</div>
          <div className="_subtitle dark:text-k_White-1">
            江西鸿链数字科技科技有限公司倾力打造的云计算品牌，面向全世界各个国家和地区的政府机构、企业组织和个人开发者，提供全球领
            先的云计算、大数据、人工智能等技术产品与服务，以卓越的科技能力打造丰富的行业解决方案，构建开放共赢的云端生态，推动产业互联
            网建设，助力各行各业实现数字化升级。鸿链是产业创新变革的推动者和数字化转型的赋能者。始终洞察时代发展趋势，探索软件技术的创
            新与应用，赋能全球数万家大中型客户实现信息化.数字化、智能化发展。
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-between text-center">
          {/* 1 */}
          <div className="w-full  md:w-auto flex flex-col align-center justify-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="_border_container px-4">远景使命</div>
            </div>
            <div>
              <img src="/about_us/about_1.png" alt="" />
            </div>
          </div>
          {/* 2 */}
          <div className="w-full  md:w-auto flex flex-col align-center justify-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="_border_container px-4">社会责任</div>
            </div>
            <div>
              <img src="/about_us/about_2.png" alt="" />
            </div>
          </div>
          {/* 3 */}
          <div className="w-full  md:w-auto flex flex-col align-center justify-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="_border_container px-4">资历认证</div>
            </div>
            <div>
              <img src="/about_us/about_3.png" alt="" />
            </div>
          </div>
        </div>
        {/* main_1 */}
        <div className="container mx-auto  p-4 text-center ">
          <div className="_title">投资者</div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between text-center">
          <img
            ref={imageRef}
            className="md:w-full h-auto"
            src="/about_us/about_main_1x_1.png"
            alt=""
          />
          <div ref={mainBgRef} className="_main_bg_1 grid md:grid-cols-3 w-full h-full">
            <div className="more_container w-full h-auto flex flex-col items-center justify-center">
              <ul>
                <li>公司治理</li>
                <li>股份变化</li>
                <li>公司公告</li>
                <li>财务报告</li>
              </ul>
              <button className="_button_more_1 px-8 py-2 hover:bg-k_Blue-1 hover:text-k_White-1 mt-4">
                了解更多
              </button>
            </div>
            <div className="w-full h-0"> </div>
            <div className="w-full h-0"> </div>
          </div>
        </div>
        {/* main_2 */}
        <div className="container mx-auto  p-4 text-center ">
          <div className="_title">投资者</div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between text-center">
          <img
            ref={imageRef}
            className="md:w-full h-auto"
            src="/about_us/about_main_1x_2.png"
            alt=""
          />
          <div ref={mainBgRef} className="_main_bg_2 grid md:grid-cols-3 w-full h-full">
            <div className="more_container p-6 w-full h-auto flex flex-col items-start justify-evenly">
              <div className="text-k_White-1 text-xl dark:text-k_White-1">尊重人才、发展人才</div>
              <div className="text-k_White-1 text-left text-base  dark:text-k_White-1">
                鸿链数字科技真诚欢迎您的加入! 在这里我们会通过成长性的薪金和福利、
                员工持股计划、导师制完美的培训等制度的 施使这一理念成为现实
              </div>
              <button className="_button_more_2 px-8 py-2 text-k_White-1 hover:bg-k_White-1 hover:text-k_Blue-2 mt-4">
                立即投递
              </button>
            </div>
            <div className="w-full h-0"> </div>
            <div className="w-full h-0"> </div>
          </div>
        </div>
        <div className="h-8"></div>
        <Footer />
      </main>
      <style jsx>
        {`
          ul li:before {
            content: '●';
            color: #00a0e9;
            margin-right: 5px;
          }
          ._title {
            font-size: 37px;
            font-family: PingFang SC;
            font-weight: bold;
          }
          ._subtitle {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 400;
          }
          ._border_container {
            border: 1px solid #6bb0eb;
            font-size: 22px;
            font-family: PingFang SC;
            font-weight: bold;
          }
          ._main_bg_1 {
            background: #eeeeee;
          }
          ._main_bg_2 {
            color: #ffffff;
            background: #005bac;
          }
          .more_container {
            color: #000000;
          }
          ._button_more_1 {
            border: 1px solid #00a0e9;
          }
          ._button_more_2 {
            border: 1px solid #ffffff;
          }
        `}
      </style>
    </>
  )

  // const qaList = [
  //   {
  //     q: 'iWebsite是什么？',
  //     a: '他是一个基于Next.js、Vercel搭建的网站模版，你可以使用它快速、免费的搭建属于自己的网站，利用Next.js不仅对SEO友好，可以基于Vercel的CI/CD自动化部署。',
  //   },
  //   {
  //     q: '那些人适合用iWebsite？',
  //     a: '有一定的Web开发基础，了解HTML、CSS、JavaScript语言特性，对React、Next.js、GitHub、Vercel有一定使用基础。',
  //   },
  //   {
  //     q: '为什么iWebsite免费？',
  //     a: '因为所有的服务都是可以免费使用的（包括GitHub、Vercel等等），我只是教会你如何简单的使用它（前提是你有一定的Web开发基础）。',
  //   },
  //   {
  //     q: 'iWebsite适合做什么',
  //     a: '可以做很多事情，比如用作企业官网、个人博客、毕业设计、或者仅仅出于兴趣爱好。',
  //   },
  // ]
  // return (
  //   <main className="dark:bg-slate-800">
  //     <Header />
  //     <div className="max-w-7xl mx-auto p-4 h-[36rem]">
  //       {qaList.map((e) => {
  //         return (
  //           <div key={e.a} className="mb-4">
  //             <h2 className="text-xl mb-2 dark:text-gray-300">{e.q}</h2>
  //             <p className="text-sm text-gray-600">{e.a}</p>
  //           </div>
  //         )
  //       })}
  //     </div>
  //     <Footer />
  //   </main>
  // )
}
