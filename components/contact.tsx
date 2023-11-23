"use client"

import { useActiveSectionContext } from "@/components/active-section-context"
import { useSectionInView } from "@/components/intersection-observer"
import { sendEmail } from "@/lib/email"
import { motion } from "framer-motion"
import { useRef } from "react"
import toast, { Toaster } from "react-hot-toast"
import SubmitButton from "./submit-button"

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const formRef = useRef<HTMLFormElement>(null)
  
  return (
    <motion.section
      ref={ref} id="contact" className="mt-40 flex w-full flex-col flex-wrap items-center gap-8 p-4 text-primary-dark sm:w-2/3 sm:p-0 md:w-1/2"
      initial={{ opacity: 0, y: 100, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.175 }}
    >
        
      
      <h1 className="mb-28 text-3xl font-bold">Contact</h1>
      <form
        ref={formRef}
        className="sm:text-md mt-10 flex w-full flex-col md:text-xl  lg:text-lg"

        action={async(formData: FormData) => {

          const { type, message } = await sendEmail(formData)
          if (type === "success") {
            toast.success(message)
          } else {
            toast.error(message)
          }
          formRef.current?.reset()
          await new Promise(resolve => setTimeout(resolve, 400))
          
        }}>
        <input
          className="mb-8 rounded-lg bg-slate-800 p-2 shadow-sm"
          name="sender"
          type="email"
          required
          maxLength={50}
          placeholder="Your email"
        />
        <textarea
          className="mb-4 h-60 resize-none rounded-lg bg-slate-800 p-2 shadow-sm"
          name="message"
          placeholder="Your message"
          required
          maxLength={1000}
        />
        <SubmitButton />
      </form>
      <Toaster />
    </motion.section>
  )
}