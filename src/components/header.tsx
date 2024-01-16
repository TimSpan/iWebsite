import Image from 'next/image'
import IwsLink from './IwsLink'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { router as routerList } from './../router'
import { ModeToggle } from '@/components/mode-toggle'

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const currentRouter = routerList.find((e) => e.path === router.asPath)?.name

  return (
    <div className="container mx-auto">
      <nav className=" border-gray-200 dark:bg-slate-800 ">
        <div className="w-full mx-auto  ">
          <div className="flex justify-between h-16">
            {/* logo */}
            <div className="flex items-center">
              <div className=" md:inline-block h-16 flex flex-col justify-center items-center">
                <IwsLink href="/">
                  <Image src="/logo.svg" width="188" height="64" alt="Logo" />
                </IwsLink>
              </div>
              {/* 右侧导航 */}
              <div className=" hidden md:inline-block">
                <div className="ml-10 flex items-center space-x-4 h-16">
                  <IwsLink
                    href="/"
                    // rounded-md
                    className={`w-20 flex flex-col h-full justify-center items-center text-gray-600 dark:text-gray-100 hover:bg-[#00A0E9] hover:text-white  hover:dark:bg-gray-500 ${
                      currentRouter === 'home'
                        ? 'bg-[#00A0E9] text-white  dark:text-gray-100 dark:bg-gray-500'
                        : ''
                    } px-3 text-sm font-medium`}
                  >
                    首页
                  </IwsLink>
                  <IwsLink
                    href="/service"
                    // rounded-md
                    className={`w-20 flex flex-col h-full justify-center items-center text-gray-600 dark:text-gray-100 hover:bg-[#00A0E9] hover:text-white  hover:dark:bg-gray-500 ${
                      currentRouter === 'service'
                        ? 'bg-[#00A0E9] text-white  dark:text-gray-100 dark:bg-gray-500'
                        : ''
                    } px-3 text-sm font-medium`}
                  >
                    服务
                  </IwsLink>
                  <IwsLink
                    href="/case"
                    // rounded-md
                    className={`w-20 flex flex-col h-full justify-center items-center text-gray-600 dark:text-gray-100 hover:bg-[#00A0E9] hover:text-white  hover:dark:bg-gray-500 ${
                      currentRouter === 'case'
                        ? 'bg-[#00A0E9] text-white  dark:text-gray-100 dark:bg-gray-500'
                        : ''
                    } px-3 text-sm font-medium`}
                  >
                    案例
                  </IwsLink>
                  <IwsLink
                    href="/trade"
                    // rounded-md
                    className={`w-20 flex flex-col h-full justify-center items-center text-gray-600 dark:text-gray-100 hover:bg-[#00A0E9] hover:text-white  hover:dark:bg-gray-500 ${
                      currentRouter === 'trade'
                        ? 'bg-[#00A0E9] text-white  dark:text-gray-100 dark:bg-gray-500'
                        : ''
                    } px-3 text-sm font-medium`}
                  >
                    行业
                  </IwsLink>
                  <IwsLink
                    href="/about"
                    // rounded-md
                    className={`w-20 flex flex-col h-full justify-center items-center text-gray-600 dark:text-gray-100 hover:bg-[#00A0E9] hover:text-white  hover:dark:bg-gray-500 ${
                      currentRouter === 'about'
                        ? 'bg-[#00A0E9] text-white  dark:text-gray-100 dark:bg-gray-500'
                        : ''
                    } px-3 text-sm font-medium`}
                  >
                    关于我们
                  </IwsLink>
                </div>
              </div>
            </div>
            {/* 联系电话 */}
            <div className="flex items-center space-x-4 h-16">
              <div className="ml-2 flex md:flex-row flex-wrap">
                <div>电话：</div>
                <div>18662210398</div>
              </div>
              <ModeToggle />
              {/* 移动端折叠导航 */}
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-gray-200 dark:bg-gray-500 hover:dark:bg-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-100 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
                  aria-controls="mobile-menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 菜单 */}
        <div className={`md:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <IwsLink
              href="/"
              className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${
                currentRouter === 'home' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
            >
              首页
            </IwsLink>
            <IwsLink
              href="/service"
              className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${
                currentRouter === 'service' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
            >
              服务
            </IwsLink>
            <IwsLink
              href="/case"
              className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${
                currentRouter === 'case' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
            >
              案例
            </IwsLink>
            <IwsLink
              href="/trade"
              className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${
                currentRouter === 'trade' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
            >
              行业
            </IwsLink>
            <IwsLink
              href="/about"
              className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${
                currentRouter === 'about' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
            >
              关于我们
            </IwsLink>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}
