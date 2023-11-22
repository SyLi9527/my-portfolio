
"use client"
//@ts-expect-error
import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button 
      className="mx-auto mb-8 mt-4 w-1/2 rounded-lg bg-slate-800 p-2 font-bold text-white shadow-sm hover:scale-105 hover:bg-green-700 disabled:cursor-not-allowed"
      disabled={pending}
      type="submit">Send</button>
  )
}