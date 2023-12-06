import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full absolute bottom-0 py-4 lg:px-0 md:px-8 px-8'>
        <p className='dark:text-zink-400 text-zinc-700 m-0 text-sm dark:text-white'>
            2023-present &#169;
            <a className="dark:text-white dark:hover:text-zinc-200 text-zinc-800 hover:text-zinc-900 duration-300 underline decoration-dotted underline-offset-4"
            href="https://github.com/yogesh2104"
            target={"_blank"}
            rel="noreferrer">&nbsp;
                Yogesh Singh
            </a>
        </p>
    </footer>
  )
}

export default Footer