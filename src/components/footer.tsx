export default function Footer() {
  return (
    <footer className="bg-[#3b82f6] text-white py-8">
      {/* mx-auto  容器自动居中 */}
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-5 gap-4">
        <div className="ml-8">
          <h3 className="font-bold text-xl mb-4">关于我们</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                公司简介
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                荣誉资质
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                团队招聘
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-8">
          <h3 className="font-bold text-xl mb-4">产品系列</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-8">
          <h3 className="font-bold text-xl mb-4">服务案例</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                云台系列
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-8">
          <h3 className="font-bold text-xl mb-4">智慧体验</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                智慧体验
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-8">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                电话：10080-10086
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                WEB：www.hongliankeji.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                地址：江西省萍乡市上栗县供销合作社
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
    // <footer className="bg-gray-100 border-y border-gray-200 dark:bg-slate-800 dark:border-gray-600">
    //   <div className="mx-auto w-full max-w-screen-xl my-6 px-4">
    //     <div className="flex flex-col sm:flex-row gap-4 justify-between ">
    //       <div className="">
    //         <h4 className="font-medium mb-4 text-sm dark:text-gray-50">
    //           Copyright © {new Date().getFullYear()} Anson. All rights reserved.
    //         </h4>
    //         <a
    //           className="text-gray-500 text-sm block mb-2 hover:text-gray-600 transition-colors duration-200"
    //           target="_blank"
    //           href="https://github.com/AnsonZnl/iWebsite"
    //         >
    //           Github
    //         </a>
    //         <a
    //           className="text-gray-500 text-sm block mb-2 hover:text-gray-600 transition-colors duration-200"
    //           target="_blank"
    //           href="https://www.zhangningle.top"
    //         >
    //           Blog
    //         </a>
    //       </div>

    //     </div>
    //   </div>
    // </footer>
  )
}
