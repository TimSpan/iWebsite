// import '../styles/global.css'
import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
import IwsLink from '../components/IwsLink'

export default function Index() {
  return (
    <>
      <main className="dark:bg-slate-800">
        <Header />
        <div className="max-w-full mx-auto h-96 ">
          <div className="relative h-full">
            <Image src="/1_.png" alt="Banner" layout="fill" objectFit="cover" quality={100} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
              <div className="text-left container mx-auto h-96 p-4 md:h-[150px]">
                <p className="text-3xl  text-white ">
                  我们不仅提供全球领先的云计算、大数据、人工智能技术
                </p>
                <p className="text-3xl text-white">我们更会提供高品质的产品与服务</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1000px] relative md:h-[500px] ">
          <div className="container mx-auto relative   grid grid-cols-1    md:grid-cols-3  justify-stretch h-[450px] ">
            <div className="p-4  md:grid grid-rows-3 col-span-2 ">
              <div className="flex items-center ">
                <h1 className="mb-2 text-4xl">关于鸿链数字科技</h1>
              </div>
              <div className="flex flex-col mb-2">
                <p>
                  江西鸿链数字科技有限公司成立于2012年，位于江西省萍乡市上栗县金山镇赣湘合作产业园(上票工业园)专注打造的云计算品牌，面向全世界各个国家和地区的政府机构、企业组织和个人开发者，提供全球领先的云计算、大数据、人工智能等技术产品与服务，以卓越的科技能力打造丰富的于业解决方案，构建开放共赢的云端生态，推动产业互联网建设，助力各行各业实现数字化升级
                </p>
                <p className="mt-2 mb-2">
                  江西鸿链数字科技有限公司是产业创新变革的推动者和数字化转型的赋能者，始终洞察时代发展趋势，探索软件技术的创新与应用，赋能全球数万家大中型客户实现信息化.数字化、智能化发展。
                </p>
              </div>
              <IwsLink href="/">
                <div className="flex h-[100px]">
                  <div className="btn-container">
                    <button className="moreClick">更多了解</button>
                  </div>
                </div>
              </IwsLink>
            </div>
            <div className="h-[450px] w-auto _img_flex">
              <img className="h-[450px] w-auto " src="/2_.png" alt="" />
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0  h-[50px] bg-[#00A0E9] md:w-full "></div>
        </div>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl mt-20 mb-5">行业应用</h1>
          <h3 className="text-2xl mb-20">INDUSTRIES</h3>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-6">
            <img className="md:w-auto h-full" src="/product/product_1.png" alt="" />
            <p className="absolute top-5 left-5 text-k_White-1 text-2xl">数字化政府</p>
          </div>
          <div className="relative mb-6">
            <img className="md:w-auto h-full" src="/product/product_2.png" alt="" />
            <p className="absolute top-5 left-5 text-k_White-1 text-2xl">区块链</p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/product/product_3.png" alt="" />
            <p className="absolute top-5 left-5 text-k_White-1 text-2xl">软件服务</p>
          </div>
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/product/product_4.png" alt="" />
            <p className="absolute top-5 left-5 text-k_White-1 text-2xl">大数据服务</p>
          </div>
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/product/product_5.png" alt="" />
            <p className="absolute top-5 left-5 text-k_White-1 text-2xl">云计算</p>
          </div>
        </div>

        <div className="container mx-auto text-center">
          <h1 className="text-5xl mt-20 mb-5">行业应用</h1>
          <h3 className="text-2xl mb-20">INDUSTRIES</h3>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/home/hangye_1.png" alt="" />
            <p className="absolute bottom-5 left-5 text-k_White-1 text-2xl">政府</p>
          </div>
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/home/hangye_2.png" alt="" />
            <p className="absolute bottom-5 left-5 text-k_White-1 text-2xl">电信</p>
          </div>
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/home/hangye_3.png" alt="" />
            <p className="absolute bottom-5 left-5 text-k_White-1 text-2xl">能源</p>
          </div>
          <div className="relative mb-2">
            <img className="md:w-auto h-full" src="/home/hangye_4.png" alt="" />
            <p className="absolute bottom-5 left-5 text-k_White-1 text-2xl">金融</p>
          </div>
        </div>

        <div className="bg-[#F5F7FA] w-full dark:bg-slate-900">
          <div className="container mx-auto text-center pt-20">
            <h1 className="text-5xl  mb-5">循科学的设计和开发流程</h1>
            <h3 className=" mb-10">设计规范化，编码标准化，报表数据化</h3>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="relative mb-2">
              <img className="md:w-auto h-full hover:shadow-xl" src="/design/design_1.png" alt="" />
              <p className="text-xl mt-8 text-center">高端设计创意/动效流畅度高</p>
            </div>
            <div className="relative mb-2">
              <img className="md:w-auto h-full hover:shadow-xl" src="/design/design_2.png" alt="" />
              <p className="text-xl mt-8 text-center">规范代码格式/提升加载速度</p>
            </div>
            <div className="relative mb-2">
              <img className="md:w-auto h-full hover:shadow-xl" src="/design/design_3.png" alt="" />
              <p className="text-xl mt-8 text-center">全网营销推广/提升曝光率</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="overflow-hidden  p-20">
            <div className="container mx-auto text-center ">
              <h1 className="text-4xl  mb-5">成功客户案例</h1>
              <h3 className=" mb-10">
                借助我们的代码产品，满足不同企业规模对于数字化升级需求，推动业务发展
              </h3>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0">
                <img className="w-full h-auto " src="/success/success.png" alt="" />
              </div>

              <div className="md:p-20">
                <div className="uppercase tracking-wide text-2xl  font-semibold">
                  数字政府搭建大数据信息化代码应用实践
                </div>
                <div className="text-sm mt-6">
                  鸿链助力数字政府搭建统一的代码应用开发平台，建立了统一的开发规范，并应用至30+中大型应用，
                  涵盖101个场景，极大地节约研发时间和研发成本，提高研发对业务响应的效率。
                </div>

                <div className="flex flex-col  md:flex-row mr-4 mt-10">
                  <button className="__click text-base mb-4 md:mr-2">统一技术规范</button>
                  <button className="__click text-base mb-4 md:mr-2">统一技术规范</button>
                  <button className="__click text-base mb-4 md:mr-2">统一技术规范</button>
                </div>
                <div className="flex flex-col md:flex-row mr-4 mt-10">
                  <button className="mb-6 md:mr-6 successClick bg-[#00a0e9]  text-[#ffffff]  hover:bg-[#ffffff] hover:text-[#000000] dark:bottom-0">
                    阅读全文
                  </button>

                  <button className="successClick bg-[#ffffff] text-[#000000]   hover:bg-[#00a0e9] hover:text-[#ffffff]">
                    阅读全文
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl  mb-5">合作伙伴</h1>
            <h3 className="text-2xl mb-4">PARTNER</h3>
          </div>
          <div className="container mx-auto w-full grid md:grid-cols-5 grid-rows-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <div key={index} className="text-center text-3xl mb-2 md:mb-10">
                  Tencent腾讯
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-w-full mx-auto h-[663px] md:h-[663px] relative">
          <div className="relative h-full">
            <Image
              src="/last_photo.png"
              alt="Banner"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>
          <div className="absolute h-[663px] md:h-[663px] w-full top-[0px]">
            <div className="relative h-[663px] md:container mx-auto">
              {/* top-[260px] */}
              <div className="md:absolute top-[260px]  bg-[#00A0E9] flex flex-col justify-evenly p-20 text-[#ffffff]">
                <div className="text-3xl mb-10">如何实现政府业务全面信息化，标准化，智能化</div>
                <div className="text-base mb-10">
                  江西鸿链数字科技助力政府构建信息化建设核心平台
                  支撑数据高效运行与精细化管理，提升服务水平，改善工作效率，提高工作质量.
                </div>
                <div className="detailClick ">查看详情</div>
              </div>
            </div>
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
          .moreClick {
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

          .moreClick:hover {
            background-position: left bottom;
          }
          ._img_flex {
            display: flex;
            justify-content: flex-end;
          }
          .__click {
            width: 127px;
            height: 34px;
            border: 2px solid #525252;
            border-radius: 10px;
          }
          .successClick {
            width: 158px;
            height: 42px;
            border: 2px solid #00a0e9;
            border-radius: 10px;
          }
          .detailClick {
            cursor: pointer;
            width: 105px;
            height: 40px;
            line-height: 36px;
            text-align: center;
            border: 2px solid #ffffff;
          }
        `}
      </style>
    </>
  )
}
