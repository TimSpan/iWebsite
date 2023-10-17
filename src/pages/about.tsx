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
              src="/about_us/about_us.png"
              alt="aboutUs"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>

        <div className="container mx-auto h-96 p-4 text-center md:flex flex-col justify-evenly h-80">
          <div className="_title">鸿链简介</div>
          <div className="_subtitle">
            江西鸿链数字科技科技有限公司倾力打造的云计算品牌，面向全世界各个国家和地区的政府机构、企业组织和个人开发者，提供全球领
            先的云计算、大数据、人工智能等技术产品与服务，以卓越的科技能力打造丰富的行业解决方案，构建开放共赢的云端生态，推动产业互联
            网建设，助力各行各业实现数字化升级。鸿链是产业创新变革的推动者和数字化转型的赋能者。始终洞察时代发展趋势，探索软件技术的创
            新与应用，赋能全球数万家大中型客户实现信息化.数字化、智能化发展。
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 justify-between text-center">
          {/* 1 */}
          <div className="w-full  md:w-auto flex flex-col align-center justify-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="_border_container">远景使命</div>
            </div>
            <div>
              <img src="/about_us/about_1.png" alt="" />
            </div>
          </div>
          {/* 2 */}
          <div className="w-full  md:w-auto flex flex-col align-center justify-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="_border_container">社会责任</div>
            </div>
            <div>
              <img src="/about_us/about_2.png" alt="" />
            </div>
          </div>
          {/* 3 */}
          <div className="w-full  md:w-auto flex flex-col align-center justify-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="_border_container">资历认证</div>
            </div>
            <div>
              <img src="/about_us/about_3.png" alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
      <style jsx>
        {`
          ._title {
            font-size: 37px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #000000;
          }
          ._subtitle {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #000000;
          }
          ._border_container {
            border: 1px solid #6bb0eb;
            font-size: 29px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #005bac;
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
