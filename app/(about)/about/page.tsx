import Link from "next/link"
// import { Button } from "@/components/ui/button"
import { 
    Card_WEB, 
    Card_CLOUD, 
    Card_DL, 
    Card_OTHER, 
    Card_Blockchain,
    Card_Enhance,
    Card_Game,
    Card_WEBGPU
} from "@/components/card"

export default function About() {
    return (
        <div className="flex min-h-screen flex-col items-center font-rs">
           <div className="mt-40 ">
                <h1 className="m-6 text-center text-2xl font-medium md:mx-16 md:my-10  md:text-4xl lg:mx-32">
                    About Me
                </h1>
                <p className="m-6 text-center text-2xl font-medium md:mx-32 md:my-10 md:text-left md:text-4xl">
                    I am Shaoyan Li, from China. I am currently a master student at UZH(Universtiy of Zurich), majoring in software systems
                    
                </p>
                {/* <p>

                </p> */}
                <p className="m-6 text-center text-2xl font-medium md:mx-32 md:my-10 md:text-left md:text-4xl">
                    I am also a big fan of video games, especially ARPGs.
                    I don`&apos;t have too much playing video games now but I am also a big fan of Dark Souls series.
                </p>
           </div>
           <div>
            <p className="m-6 text-center text-2xl font-medium md:mx-16 md:my-10  md:text-4xl lg:mx-32">
                WHAT I CAN DO
            </p> 
            <div className="mx-8 grid grid-cols-1 gap-10 md:grid-cols-4">
                <Card_WEB/>
                <Card_CLOUD/>
                <Card_DL/>
                <Card_OTHER/>
            </div>
            <p className="m-6 text-center text-2xl font-medium md:mx-16 md:my-10 md:mt-24  md:text-4xl lg:mx-32">
                WHAT I WILL LEARN
            </p> 
            <div className="mx-8 grid grid-cols-1 gap-10 md:grid-cols-4">
                
                <Card_Enhance />
                <Card_WEBGPU />
                <Card_Game/>
                <Card_Blockchain />
            </div>
           </div>
        </div>
    )
}