import Image from "next/image"

export default function Footer() {
  return <footer className="flex h-24 w-full items-center justify-center border-t border-gray-300 dark:border-gray-700">
    <a
      className="flex items-center justify-center"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
        Powered by{" "}
      <span className="ml-2 h-4">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
}
