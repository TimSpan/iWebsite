/* eslint-disable @next/next/no-img-element */
import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
// import './index.css'
import IwsLink from '../components/IwsLink'
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
        <div className="container mx-auto">
          <Header />
        </div>

        <div className="max-w-full mx-auto h-96 ">
          <div className="relative h-full">
            <Image src="/1_.png" alt="Banner" layout="fill" objectFit="cover" quality={100} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
              {/* ml-14 mb-14 */}
              <div className="text-left container mx-auto h-96 p-4 md:h-[150px]">
                <p className="text-3xl  text-white ">
                  我们不仅提供全球领先的云计算、大数据、人工智能技术
                </p>
                <p className="text-3xl text-white">我们更会提供高品质的产品与服务</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[1000px] relative md:h-[500px] ">
          {/* gap-4 */}
          <div className="container mx-auto relative   grid grid-cols-1    md:grid-cols-3  justify-stretch h-[450px] ">
            <div className=" p-4  md:grid grid-rows-3 col-span-2 ">
              <div className="flex items-center ">
                <h1 className="text-4xl">关于鸿链数字科技</h1>
              </div>
              <div className="flex flex-col ">
                <p>
                  江西鸿链数字科技有限公司成立于2012年，位于江西省萍乡市上栗县金山镇赣湘合作产业园(上票工业园)专注打造的云计算品牌，面向全世界各个国家和地区的政府机构、企业组织和个人开发者，提供全球领先的云计算、大数据、人工智能等技术产品与服务，以卓越的科技能力打造丰富的于业解决方案，构建开放共赢的云端生态，推动产业互联网建设，助力各行各业实现数字化升级
                </p>
                <p className="mt-2">
                  江西鸿链数字科技有限公司是产业创新变革的推动者和数字化转型的赋能者，始终洞察时代发展趋势，探索软件技术的创新与应用，赋能全球数万家大中型客户实现信息化.数字化、智能化发展。
                </p>
              </div>
              <IwsLink href="/">
                <div className="flex h-[100px]">
                  <div className="btn-container">
                    <button>更多了解</button>
                  </div>
                </div>
              </IwsLink>
            </div>
            {/* <div className=" h-[450px] w-auto">
              <img className="h-[450px] w-auto " src="/2_.png" alt="" />
            </div> */}
            <div className=" h-[450px] w-auto _img_flex">
              <img className="h-[450px] w-auto " src="/2_.png" alt="" />
            </div>
          </div>
          <div className=" w-full absolute bottom-0 left-0  h-[50px] bg-[#00A0E9] md:w-full "></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 from-gray-300 to-gray-700">
          <div className="py-2 text-center mb-4">
            <h2 className="text-center text-xl mb-2 dark:text-gray-300">产品和服务</h2>
          </div>
          <div className="w-full md:flex justify-between">
            <div className="relative">
              <img
                className="h-72 w-full md: w-2/3 mr-2 relative"
                src="/center_1.png"
                alt="center"
              />
              <span className="absolute">数字化政府</span>
            </div>
            <div>
              <img
                className="h-72 w-full md: w-2/3 mr-2 relative"
                src="/center_2.png"
                alt="center"
              />
            </div>

            {/* <div className="h-72 w-full md: w-2/3 mr-2 relative">
              <img className=" h-72" src="/center_1.png" alt="center" />
            </div>
            <div className="h-72 w-full md: w-1/3 mr-2 relative">
              <img className=" h-72" src="/center_2.png" alt="center" />
            </div> */}
          </div>

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
          ._img_flex {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  )
}
