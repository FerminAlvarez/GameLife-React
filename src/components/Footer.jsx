import {RiLinkedinBoxFill} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div class="mx-auto w-full p-4 py-6 lg:py-8">
                    <div class="flex  w-full items-center justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by Fermin Alvarez.
                        </span>
                        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="https://github.com/FerminAlvarez" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsGithub size={32}/>
                                <span class="sr-only">GitHub account</span>
                            </a>
                            <a href="https://www.linkedin.com/in/fermin-alvarez-dev/" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <RiLinkedinBoxFill size={32}/>
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </footer>

    )
}