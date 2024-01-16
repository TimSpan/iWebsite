export default function Footer() {
  return (
    // background: #313131;
    <footer className="bg-[#3b82f6] text-white py-8 dark:bg-slate-900">
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
                电话：18662210398
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
        <p className="">江西鸿链数字科技有限公司</p>
      </div>
    </footer>
  )
}
