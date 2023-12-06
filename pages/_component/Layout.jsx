"use client"
import Head from "next/head"
import { usePathname } from 'next/navigation';
import { useKBar} from "kbar"
import { FaHome , FaPaperclip,} from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FiCommand, FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { VscTerminalCmd } from "react-icons/vsc";




const Layout = ({children,description,emoji,image}) => {
  const currentRoute=usePathname()
  const iconRef='icon'
  const router = useRouter();
  const {theme,setTheme}=useTheme()
  const {query}=useKBar()
  const [toggleTheme,setToggleTheme]=useState(false)
  const [tooltipVisibility,setTooltipVisibility]=useState([false,false,false,false,false,false,])

  const NavigationBarItem=[
    {name:'Home',slug:'/',icon:FaHome},
    {name:'About',slug:'/about',icon:BiUser},
    {name:'Links',slug:'/links',icon:FaPaperclip},
    {name:'Project',slug:'/project',icon:AiOutlineFundProjectionScreen
    },{name:'Terminal',slug:'/terminal',icon:VscTerminalCmd}]


  useEffect(()=>{
      setToggleTheme(true)
  },[])
  
  return (
    <div>
        <Head>
            <link ref={iconRef} href={`http://localhost:3000/${emoji}`}></link>
            <title>{currentRoute==='/'?'Yogesh Singh':`Yogesh | ${currentRoute.slice(1)}`}</title>
            <meta name="description" content={description}/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <meta name="theme-color" content="#27272a"/>
            <meta property="og:site_name" content="Yogesh Singh"/>
            <meta property="og:title" content={`Yogesh ${currentRoute.slice(1).length>1?`| ${currentRoute.slice(1)}`:``}`}/>
            <meta property="og:title" content="https://avatars.githubusercontent.com/u/64697181?s=96&v=4"/>
        </Head>
          <main className="flex selection:bg-zinc-200/30 flex-col overflow-x-hidden min-h-screen items-center bg-zinc-100 dark:bg-zinc-900 font-serif max-h-auto relative">
              <div className="flex w-full h-full lg:w-[60%] md:w-2/3">
                  <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
                    {/* Navbar */}
                  <div className='w-full min-h-full h-full flex flex-col justify-start items-center pt-6'>
                      <div className='flex flex-col gap-4'>
                      {NavigationBarItem.map((item, index) => {
                        return (
                          <div key={item.slug}>
                            {currentRoute === item.slug ? (
                              <button
                                key={index}
                                className="w-full flex justify-center items-center dark:bg-zinc-700 bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-800 focus:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out dark:focus:bg-zinc-700 relative"
                                onMouseLeave={() => {
                                  const temp = [...tooltipVisibility];
                                  temp[index] = false;
                                  setTooltipVisibility(temp);
                                }}
                                onMouseEnter={() => {
                                  const temp = [...tooltipVisibility];
                                  temp[index] = true;
                                  setTooltipVisibility(temp);
                                }}
                                onClick={() => router.push(item.slug)}
                              >
                                <div className="p-2">
                                  <item.icon size="1rem" className="text-zinc-100" />
                                </div>
                                {tooltipVisibility[index] && (
                                  <span className="absolute min-w-full text-[0.75rem] leading-none left-10 p-[0.62rem] rounded shadow-xl text-zinc-200 dark:bg-zinc-700 bg-zinc-800">
                                    {item.name}
                                  </span>
                                )}
                              </button>
                            ) : (
                              <button
                                key={index}
                                className="w-full flex justify-center items-center dark:bg-zinc-800 dark:hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out dark:focus:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800 focus:bg-zinc-800 relative"
                                onMouseLeave={() => {
                                  const temp = [...tooltipVisibility];
                                  temp[index] = false;
                                  setTooltipVisibility(temp);
                                }}
                                onMouseEnter={() => {
                                  const temp = [...tooltipVisibility];
                                  temp[index] = true;
                                  setTooltipVisibility(temp);
                                }}
                                onClick={() => router.push(item.slug)}
                              >
                                <div className="p-2">
                                  <item.icon size="1rem" className="text-zinc-100" />
                                </div>
                                {tooltipVisibility[index] && (
                                  <span className="absolute text-[0.75rem] leading-none left-10 p-[0.62rem] rounded shadow-xl text-zinc-200 dark:bg-zinc-700 bg-zinc-800">
                                    {item.name}
                                  </span>
                                )}
                              </button>
                            )}
                          </div>
                        );
                      })}
                      <div className="flex flex-col gap-4">
                      <button
                          className="w-full flex justify-center items-center dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                          onClick={query.toggle}
                        >
                          <div className="p-2">
                            <FiCommand size="1rem" className="text-zinc-100" />
                          </div>
                        </button>

                        {toggleTheme === true && (
                          <button
                            className="w-full flex justify-center items-center dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                          >
                            <div className="p-2 text-zinc-100">
                              {theme === "dark" ? <FiSun /> : <FiMoon />}
                            </div>
                          </button>
                        )}
                        
                      </div>
                      </div>
                      <div className="border-r-2 dark:border-zinc-800 border-zinc-500 h-full mt-4"></div>
                  </div>
                  </div>
                  <div className="fixed top-0 w-full z-50 block lg:hidden md:hidden">
                    {/* Mobile nav */}
                  <div className="min-w-full min-h-full h-full flex overflow-x-scroll dark:bg-zinc-800 bg-zinc-500 justify-center items-center py-1 shadow-xl gap-4">
                    <div className="flex justify-evenly gap-[14px] pl-4">
                    {NavigationBarItem.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className="w-full h-12 flex justify-center items-center"
                        >
                          {currentRoute === item.slug ? (
                            <item.icon
                              size="2rem"
                              className="text-zinc-100 rounded dark:bg-zinc-700 bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-800 py-2 cursor-pointer hover:scale-110 duration-300 ease-in-out shadow hover:shadow-xl"
                              onClick={() => router.push(item.slug)}
                            />
                          ) : (
                            <item.icon
                              size="2rem"
                              className="text-zinc-100 rounded dark:bg-zinc-800 bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-800 py-2 cursor-pointer hover:scale-110 duration-300 ease-in-out shadow hover:shadow-xl"
                              onClick={() => router.push(item.slug)}
                            />
                          )}
                        </button>
                      );
                    })}
                    </div>
                    <div className="flex gap-4 pr-4">
                      {toggleTheme && (
                        <button
                          className="w-full flex justify-center items-center dark:bg-zinc-800 bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                          <div className="p-2 text-zinc-100">
                            {theme === "dark" ? <FiSun /> : <FiMoon />}
                          </div>
                        </button>
                      )}
                      <button
                        className="w-full flex justify-center items-center dark:bg-zinc-800 bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                        //   onClick={() => router.push(item.slug)}
                        onClick={query.toggle}
                      >
                        <div className="p-2">
                          <FiCommand size="1rem" className="text-zinc-100" />
                        </div>
                      </button>
                    </div>  
                  </div>
                  </div>
                  {children}
              </div>
          </main>
    </div>
  )
}

export default Layout