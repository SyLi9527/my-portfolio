import Link from "next/link"

export default function About() {
    return (
        <div className="flex min-h-screen flex-col items-center font-rs">
           <div className="mt-40">
                <h1 className="m-6 text-center text-2xl font-medium md:mx-16 md:my-10 md:text-left md:text-4xl">
                    About Me
                </h1>
                <p>
                    I am Shaoyan Li, from China. I am currently a master student at UZH(Universtiy of Zurich), majoring in software systems
                    
                </p>
                <p>
                    I am also a big fan of video games, especially ARPGs.
                    I don`&apos;t have too much playing video games now but I am also a big fan of Dark Souls series.
                </p>
           </div>

        </div>
    )
}