import React from 'react'
import Layout from './_component/Layout';
import Footer from './_component/Footer';
import showdown from "showdown";
import WritingEffect from '@/_component/WritingEffect';


const about = () => {
  const aboutMe=`
  I'm Yogesh Singh on the web. I'am a 23 y/o belonging to the Homo sapiens 🤣, a brother, a son, a friend, a self taugh web developer and programmer.
  
  I have completed MCA(Master of Computer Application) I had already started programming back when I was in Second year of BSc because first year pass in sports😁. I started web development mostly in frontend development at that time, I used only HTML and CSS and simple javascript. If you want to know more about which programming I know they are - Python(❤), Javascript and framework - ReactJs,NextJs,Tailwind CSS, "MERN Stack(Learning)".
  
  Things I do other than dev and programming. Apart from that, I enjoy playing cricket (🏏). Touching grass is important. Sometimes listening soft music and seeing clouds passing 😳. I also play mobile games and like BattleRoyal game. Apart from this, I don't have much to do other than overthinking and staring at my phone screen.
  
  I like making friends (be it online or irl though I'm somewhat introverted!). So, in case you want to talk about anything leave messages I'll get back to you once I'm active. All my social links are listed [here](/links)
  
  That's pretty much everything about me.`

  const convertMarkDown=new showdown.Converter({metadata:true})
  const htmlText=convertMarkDown.makeHtml(aboutMe)



  return (
    <Layout emoji="🍥" description="things you (maybe) want to know about me">
        <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
        <section className="flex flex-col w-full justify-between gap-6 mt-16 lg:mt-0 md:mt-0 prose mb-12">
        <div className='text-2xl font-semibold dark:text-white'>About Me</div>
        <div className='text-xl font-medium dark:text-white'>Most of things you (maybe) want to know about me.</div>
        <WritingEffect text={htmlText}/>
        </section>
        <Footer />
      </div>
    </Layout>
  )
}

export default about;