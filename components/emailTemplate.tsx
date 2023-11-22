


export default function EmailTemplate({sender, message}: {sender: string, message: string}) {
  return (
    <section>
      <h1>Message from {sender}</h1>
      <p>{message}</p>
    </section>

  )
}