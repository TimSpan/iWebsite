/* eslint-disable @next/next/no-img-element */
import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
// import './index.css'

/**
 * @_ 表示自己写的css 比如index_bottom
 */
export default function Index() {
  const list = [
    {
      title: '免费',
      descript: '使用 iWebsite 构建网站是完全免费的，前提是您了解 Web 开发流程。',
    },
    {
      title: 'SEO',
      descript:
        '得利于 Next.js 的 SSR 渲染，使得对 SEO 非常友好，您的网站可以很快的被搜索引擎收集。',
    },
    {
      title: '简单',
      descript: '您只需要使用 iWebsite 的模版，然后按照我们的步骤即可拥有一个属于自己的网站。',
    },
    {
      title: '可扩展',
      descript: 'iWebsite 仅提供基础的功能，如果您有其他的需求可以自己进行开发，或者联系我。',
    },
  ]
  return (
    <>
      <main className="dark:bg-slate-800">
        <Header />
        {/* px-4 py-2*/}
        <div className="max-w-full mx-auto  h-96 ">
          <div className="relative h-full">
            <Image src="/banner.jpeg" alt="Banner" layout="fill" objectFit="cover" quality={100} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">鸿链科技</h1>
                <p className="text-lg lg:text-xl text-white">
                  我们是行业领先的 全球化信息化、产品和解决方案公司
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[1000px] relative md:h-[500px] ">
          <div className="container mx-auto relative   grid grid-cols-1    md:grid-cols-3 gap-4 h-[450px] ">
            {/* 1 */}
            <div className=" p-4  md:grid grid-rows-3 col-span-2 ">
              <div className="flex items-center ">
                <h1 className="text-4xl">关于鸿链数字科技</h1>
              </div>
              <div className="flex flex-col ">
                <p>
                  江西鸿链数字科技有限公司成立于2022年，位于江西省萍乡市上栗县金山镇赣湘合作产业园(上栗工业园)专注地产数字营销为开发商提供集展示、传播、大数据的数字化营销道具。
                </p>
                <p className="mt-2">
                  20+行业经验
                  、70+市场覆盖省份人才团队200+、合作伙伴300+、优秀案例2000+、地产动面案例1000+、VR系统案例800+、数字体验中心300+、三维互动200+。四大核心板块:三维影视动画、云间系列产品、云台系列产品、数宇内容展厅
                </p>
              </div>

              <div className="flex h-[100px]">
                <div className="btn-container">
                  <button>了解更多</button>
                </div>
              </div>
              {/* <div>了解更多</div> */}
            </div>
            {/* 2 absolute bottom-0 right-0*/}
            <div className=" h-[450px] w-auto ">
              <img
                // index_bottom
                className="h-[450px] w-auto "
                src="/city.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full absolute bottom-0 left-0  h-[50px] bg-[#3b82f6] md:w-full "></div>
        </div>

        

        <div className="max-w-7xl mx-auto px-4 py-16 from-gray-300 to-gray-700">
          <div className="py-2 text-center mb-4">
            <h2 className="text-center text-xl mb-2 dark:text-gray-300">产品和服务</h2>
            <p className="text-xs text-gray-400">当然不止这些</p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 w-full">
            
            {/* {list.map((item) => {
              return (
                <div
                  className="h-1/2 md:h-1/4 mx-2 p-2 mb-8 md:mb-1 rounded-md shadow cursor-pointer hover:shadow-md"
                  key={item.title}
                >
                  <h3 className="text-center text-lg dark:text-gray-300">{item.title}</h3>
                  <p className="block p-4 text-sm text-gray-500 tracking-wider leading-6">
                    {item.descript}
                  </p>
                </div>
              )
            })} */}
          </div>
        </div>

        <Footer />
      </main>
      <style jsx>
        {`
          .index_bottom {
            bottom: -50px;
            margin-top: -50px;
            z-index: 1000;
          }

          .btn-container {
            position: relative;
          }

           {
            /*  padding: 15px 20px 16px 60px; */
          }
          button {
            border: 0;
            border-radius: 50px;
            color: white;
            background: #5f55af;
            padding: 15px 60px 16px 60px;
            text-transform: uppercase;
            background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 2s ease;
          }

          button:hover {
            background-position: left bottom;
          }
        `}
      </style>
    </>
  )
}
