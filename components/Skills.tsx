import React from 'react'
import SkillContent from './SkillContent'

const Skills = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-y-10'>
            <div className='mt-8'>
                <h1 className='font-black text-3xl'>TECHNOLOGIES</h1>
            </div>
            <div className='w-4/5 h-3/4 bg border-[1px] border-neutral-600 rounded-sm'>
              <div className='p-8'>
                <h1 className='font-black text-3xl sm:text-5xl tracking-wider'>Check out what I'm good at.</h1>
              </div>
              <div className='w-full h-[1px] bg-neutral-500'/>
              <div className='pl-0 pr-0 py-8 mr-1'>
                <SkillContent/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills