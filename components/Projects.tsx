import React from 'react'
import ProjectContent from './ProjectContent'
import About from './Contact'

const Projects = () => {
  return (
    <div className='flex flex-col space-y-16   justify-center'>
        <div className='mr-44'>
            <h1 className='font-bold xs:text-6xl md:mt-0 sm:mt-20 text-5xl'>THE PROJECTS</h1>
        </div>
       
        <div className=''>
            <div>
                <ProjectContent/>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Projects