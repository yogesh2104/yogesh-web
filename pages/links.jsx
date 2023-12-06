"use client"
import React from 'react'
import Layout from './_component/Layout'

const links = () => {
  return (
    <Layout emoji='links' description='All social links'>
        <div className='w-full min-h-screen h-full p-8 flex flex-col items-center relative'>
        <section className="flex flex-col w-full justify-between gap-6 mt-16 lg:mt-0 md:mt-0 prose mb-12">
                <div className="prose w-full prose-zinc dark:prose-invert leading-none prose-h1:mb-0 prose-h2:mt-0 prose-h3:mt-0 dark:prose-h1:text-zinc-200 prose-h1:text-zinc-900 prose-h4:font-normal prose-p:text-base dark:prose-h2:text-zinc-300 prose-h2:text-zinc-800 dark:prose-h3:text-zinc-400 prose-h3:text-zinc-800 prose-h4:mt-0 dark:prose-h4:text-zinc-400 prose-h4:text-zinc-700 prose-h4:mb-4 prose-p:text-zinc-700 dark:prose-p:text-zinc-200 prose-a:decoration-wavy prose-a:underline-offset-2 prose-code:px-1 prose-code:rounded-sm prose-code:bg-zinc-400/60 dark:prose-code:bg-zinc-400/20 prose-code:font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti, repudiandae non dolores fuga delectus impedit quia libero nobis quos et velit blanditiis aliquid at sit doloribus architecto praesentium amet.
                </div>
            </section>
        </div>
    </Layout>
  )
}

export default links