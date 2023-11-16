import Image from "next/image"
import Link from "next/link"



export default function Contact() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-slate-800">
                    How to reach me?
        </h1>
        <div className="flex flex-row items-center justify-center">
          <Link target="_blank" href="https://github.com/SyLi9527" className="text-center text-3xl font-bold text-slate-800">
            <Image alt="github icon" src={"./github.svg"} width={40} height={40}/>
            <span>Github</span>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/li-shaoyan-0b83281a8/" className="text-center text-3xl font-bold text-slate-800">
            <Image alt="linkedin icon" src={"./linkedin.svg"} width={40} height={40} />
            <span>Linkedin</span>
          </Link>
          <a target="_blank" href="mailto:sky14566541@gmail.com" className="text-center text-3xl font-bold text-slate-800">
            <Image alt="email icon" src={"./envelope.svg"} width={40} height={40}/>
            <span>Email</span>
          </a>
        </div>
                    
      </div>
    </div>
  )
}