import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar"
import {ThemeProvider} from "next-themes"
import { FaHome ,FaClock, FaPaperclip} from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {KBarProvider} from "kbar"
import CMD from '@/_component/Cmd';


const action=[
  {
      id:'home',
      name:'Home',
      shortcut:['h'],
      keywords:'home',
      perform:()=>(window.location.pathname='/'),
      section:"Navigation",
      icon:FaHome({size:'1rem'})
  },
  {
      id:'about',
      name:'About',
      shortcut:['a'],
      keywords:'about',
      perform:()=>(window.location.pathname='about'),
      section:"Navigation",
      icon:BiUser({size:'1rem'})
  },
  {
      id:'links',
      name:'Links',
      shortcut:['l'],
      keywords:'links(email,github,linkedin,twitter,instagram)',
      perform:()=>(window.location.pathname='links'),
      section:"Navigation",
      icon:FaPaperclip({size:'1rem'})
  },
  {
      id:'now',
      name:'Now',
      shortcut:['n'],
      keywords:'now',
      perform:()=>(window.location.pathname='now'),
      section:"Navigation",
      icon:FaClock({size:'1rem'})
  },
  {
      id:'project',
      name:'Project',
      shortcut:['p'],
      keywords:'project',
      perform:()=>(window.location.pathname='project'),
      section:"Navigation",
      icon:AiOutlineFundProjectionScreen({size:'1rem'})
  },
]

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <NextNProgress 
        color={"#a1a1aa"}
        options={{ showSpinner: false, easing: "ease" }}
        />
        <KBarProvider actions={action}>
          <CMD/>
          <Component {...pageProps}/>
        </KBarProvider>

    </ThemeProvider>
  )
}

export default MyApp
