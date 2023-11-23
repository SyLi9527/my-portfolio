import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/config/mainConfig"
import React from "react"
import { Badge } from "./ui/badge"
import { cn } from "./utils"

type CardProps = React.ComponentProps<typeof Card>



export function Card_WEB({className, ...props}: CardProps) {

  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Web Development"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Web Development"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["Web Development"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}

export function Card_CLOUD({className, ...props}: CardProps) {

  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Cloud"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Cloud"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["Cloud"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}

export function Card_DL({className, ...props}: CardProps) {

  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Deep Learning"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Deep Learning"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["Deep Learning"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}


export function Card_OTHER({className, ...props}: CardProps) {

  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Other Skills"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Other Skills"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex  flex-wrap gap-4">

        {skills["Other Skills"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800  text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}

export function Card_Enhance({className, ...props}: CardProps) {
  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Enhance"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Enhance"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["Enhance"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}

export function Card_WEBGPU({className, ...props}: CardProps) {

  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["WebGPU"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["WebGPU"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["WebGPU"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}

export function Card_Game({className, ...props}: CardProps) {
  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Game"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Game"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["Game"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}

export function Card_Blockchain({className, ...props}: CardProps) {
  return (
    <Card className={cn("max-w-[500px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl">{skills["Blockchain"].title}</CardTitle>
        <CardDescription className="md:text-md text-xs sm:text-sm md:text-justify lg:text-left lg:text-xl">{skills["Blockchain"].description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">

        {skills["Blockchain"].toolkits.map(item =>
          <Badge key={item} className="w-fit bg-slate-800 text-xs text-slate-200/80 hover:bg-green-600/90 lg:text-sm">{item}</Badge>
        )}

      </CardContent>
    </Card>
  )
}