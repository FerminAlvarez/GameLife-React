import { RiLinkedinBoxFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="footer items-center p-2 bg-neutral text-neutral-content mt-auto">
            <div className="mx-auto w-full p-4">
                <div className="flex  w-full items-center justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">Developed by Fermin Alvarez.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://github.com/FerminAlvarez" target='_blank' rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                            <BsGithub size={32} />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="https://www.linkedin.com/in/fermin-alvarez-dev/" target='_blank' rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                            <RiLinkedinBoxFill size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}