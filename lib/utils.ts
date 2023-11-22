import * as Z from "zod"

export function validateString(str: string | unknown, max: number | unknown) {
  if (typeof str !== "string" || typeof max !== "number") {
    return false
  }
  const schema = Z.string().max(max)
  return schema.safeParse(str).success
}

export function getToaster(message: unknown) {
  if (message == null) return {
    message: "Email sent!",
    type: "success",
  }
  else if (typeof message === "string") return {
    message: message + "!",
    type: "error",
  }
  else if (message && typeof message === "object" && "message" in message) return {
    message: message.message as string + "!",
    type: "error",
  }
  else if (typeof message === "number") return {
    message: String(message) + "!",
    type: "error",
  }
  else return {
    message: "Unknown error!",
    type: "error",
  }
}