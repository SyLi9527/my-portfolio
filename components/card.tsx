import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import React, { HTMLAttributes, RefAttributes } from "react"
import { cn } from "./utils"
import { Badge } from "./ui/badge"
import { skills } from "@/config/mainConfig"

type CardProps = React.ComponentProps<typeof Card>



export function Card_WEB({className, ...props}: CardProps) {

    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Web Development"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Web Development"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Web Development"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}

export function Card_CLOUD({className, ...props}: CardProps) {

    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Cloud"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Cloud"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Cloud"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}

export function Card_DL({className, ...props}: CardProps) {

    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Deep Learning"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Deep Learning"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Deep Learning"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}


export function Card_OTHER({className, ...props}: CardProps) {

    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Other Skills"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Other Skills"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Other Skills"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}

export function Card_Enhance({className, ...props}: CardProps) {
    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Enhance"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Enhance"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Enhance"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}

export function Card_WEBGPU({className, ...props}: CardProps) {

    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["WebGPU"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["WebGPU"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["WebGPU"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}

export function Card_Game({className, ...props}: CardProps) {
    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Game"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Game"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Game"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}

export function Card_Blockchain({className, ...props}: CardProps) {
    return (
        <Card className={cn("max-w-[500px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="md:text-2xl lg:text-3xl">{skills["Blockchain"].title}</CardTitle>
                <CardDescription className="md:text-md md:text-justify lg:text-left lg:text-xl">{skills["Blockchain"].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">

                {skills["Blockchain"].toolkits.map(item =>
                    <Badge key={item} className="w-fit bg-primary-dark md:text-lg lg:text-xl">{item}</Badge>
                    )}

            </CardContent>
        </Card>
    )
}