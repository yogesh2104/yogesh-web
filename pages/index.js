import Layout from '@/pages/_component/Layout'
import Image from 'next/image'
import Footer from './_component/Footer'

const Home = () => {
  return (
    <Layout
      emoji="🎐"
      description="yogesh//singh, student and web developer from India"
    >
      <div className="w-full h-full p-8 flex flex-col justify-center items-center relative">
        <section className="flex flex-col-reverse lg:flex-row md:flex-row w-full justify-between items-start mb-20 mt-16 lg:mt-0 md:mt-0 gap-4 lg:gap-14 md:gap-8 prose">
          <div className="leading-none">
            <h2 className="dark:text-zinc-200 text-zinc-900 text-[2.5rem] m-0 font-extrabold">
              Yogesh Singh
            </h2>
            <p className="dark:text-zinc-300 text-zinc-800 mb-4 m-0">
              React developer
            </p>
            <p className="dark:text-zinc-400 text-zinc-700 text-sm m-0">
              Learning about web and trying to help out other devs in the
              process. I love open source and writing about tech occasionally.
            </p>
          </div>
          <div className="min-w-fit rounded">
            <Image src="https://avatars.githubusercontent.com/u/64697181?v=4" alt='image' width={200} height={200}/>
          </div>
        </section>
        <Footer/>
      </div>
    </Layout>
  )
}

export default Home
