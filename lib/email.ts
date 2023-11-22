"use server"

import EmailTemplate from "@/components/emailTemplate"
import { getToaster, validateString } from "@/lib/utils"
import React from "react"
import { Resend } from "resend"
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function sendEmail(formData: FormData) {

  const sender = formData.get("sender") as string
  const message = formData.get("message") as string

  if (!validateString(sender, 50)) {
    return {
      message: "Invalid sender email",
      type: "error",
    }
  }
  if (!validateString(message, 1000)) {
    return {
      message: "Invalid message",
      type: "error",
    }
  }

  try {
    const {data, error }  = await resend.emails.send({
      from: "Email Received <onboarding@resend.dev>",
      to: "sky14566541@gmail.com",
      subject: "Contact Form Submission",
      reply_to: sender,
      react: React.createElement(EmailTemplate, {sender, message})
    })
    return getToaster(error)
  } catch (error) {
    return getToaster(error)
  } 

}