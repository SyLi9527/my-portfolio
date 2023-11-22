import { MainPageCatalogs } from "@/lib/types"

export const lists = [
  {
    name: "Home",
    hashtag: "#"
  },
  {
    name: "About",
    hashtag: "#about"
  },
  {
    name: "Projects",
    hashtag: "#projects"
  },
  {
    name: "Skills",
    hashtag: "#skills"
  },
  {
    name: "Contact",
    hashtag: "#contact"
  },
] as const

export const projectsData = [
  {
    title: "scifig cover generation",
    description: 
      "Scicover Generation is a Next.js-based website designed specifically for biology researchers, offering Research Journal Cover Generation functionality. Through our platform, users have the ability to manage their subscriptions and create customized covers using our advanced AI models.",
    tags: ["Nextjs", "AWS", "Django", "PostgreSQL", "Memcached", "AI"],
    imageUrl: "/scicover.png",
    link: null
  },
  {
    title: "scifig.bio-a novel ppt addin for researchers",
    description:
      "scifig.bio is an addin for Microsoft PowerPoint that helps researchers create beautiful scientific figures. It has features like material library, smart selection and color picker, serveral editing tools and incoming AI style transfer as well as 2D/3D transformation functionality.",
    tags: ["React", "VSTO(C#)", ".NET", "Tauri", "AWS", "Django", "PostgreSQL", "RabbitMQ", "Docker", "Nginx"],
    imageUrl: "/addin.png",
    link: "https://scifig.com/"
  },
  {
    title: "scifig website",
    description:
      "Scifig website serves as a platform for managing scifig.bio. It is developed using the React.js framework and is designed to be accessible and responsive, functioning seamlessly on both desktop and mobile devices.",
    tags: ["React", "MaterialUI", ],
    imageUrl: "/scifig.png",
    link: "https://scifig.com/"
  },
  {
    title: "Material Management System",
    description:
      "A system for managing materials for researchers. It provides a platform for researchers to upload, review, label, and preview materials before uploading them to the Tencent Cloud storage service COS. It also provides a platform for administrators to manage users, materials, and labels.",
    tags: ["React", "Tencent Cloud", "Redux", "MaterialUI", "PostgreSQL"],
    imageUrl: "/material_management.png",
    link: null
  },
  {
    title: "Chatbot for Asthma Patients",
    description:
      "The Juli healthcare app features an integrated chatbot specifically designed for asthma patients. This chatbot serves as a virtual assistant, engaging in conversations with patients and assisting them in effectively managing their asthma condition. In addition to providing personalized support, the chatbot offers valuable medical insights and can address common inquiries about asthma, offering users a convenient and informative resource within the app",
    tags: ["Flask", "Pytorch", "Docker", "Nginx", "PostgreSQL", "NLP"],
    imageUrl: "/pipeline.png",
    link: "https://github.com/tanmaychimurkar/ca-asthma"
  },
  {
    title: "DonationCoin",
    description:
      "DonationCoin is a decentralized application (dApp) dedicated to charitable initiatives. It empowers users to make donations to various charitable organizations while keeping a transparent record of their contributions. Additionally, charity organizations can utilize the platform to create projects and receive donations from users. The dApp is built on the Ethereum blockchain, leveraging the Solidity programming language for smart contract development. It utilizes Ganache as the local blockchain for testing and development purposes and integrates with Metamask, a popular wallet solution, for secure and seamless transaction management.",
    tags: ["React", "Solidity", "Ethereum", "Ganache", "Metamask"],
    imageUrl: "/donationcoin.png",
    link: "https://github.com/abdulessa/DonationCoin"
  },
] as const


export const mainPageCatalogs: MainPageCatalogs = ["About", "Project", "Blog", "Contact"]

export const skillCatalogs: string[] = ["ReactJS", "NextJS", "JavaScript", "TypeScript", "Django", "Python", 
  "Golang", "AWS", "Docker", "PostgreSQL", "Nginx", "Gunicorn", "Linux" , "VSTO(C#)", "GLSL",].map((item) => item + ".")

export const skills= {
  "Web Development": {
    "title": "Web Development",
    "description": "I have much experience with complex web applications using ReactJS and NextJS. I have a strong foundation in frontend development, with expertise in responsive layouts as well as state management. In addition, I have experience in backend development using Django, which I consider my preferred framework for building robust, scalable web applications. For database management, I commonly use PostgreSQL.",
    "toolkits": [
      "Javascript",
      "Typescript",
      "ReactJS",
      "Nextjs",
      "Django",
      "Postgresql",
      "GO",
      "VSTO(C#)"
    ]
  },
  "Cloud": {
    "title": "Cloud",
    "description": "I also have extensive experience in cloud computing platforms such as AWS, where I have managed EC (elastic instance) and deployed serverless functions using Lambda. I have also deployed machine learning models using SageMaker and ECS, which have helped my clients or team to streamline their workflows and achieve better performance. ",
    "toolkits": [
      "AWS",
      "Tencent Cloud"
    ]
  },
  "Deep Learning": {
    "title": "AI",
    "description": "I also have experience in deep learning, which I believe is essential for any programmer in today's technology landscape. Although I may not propose a machine learning model on my own, I'm capable of fine-tuning, training, and deploying models using corresponding frameworks such as TensorFlow or PyTorch. ",
    "toolkits": [
      "PyTorch",
      "TensorFlow"
    ]
  },
  "Other Skills": {
    "title": "Other Skills",
    "description": "I have also cultivated other skills during my learning journey, such as Git for version control, Docker for containerization, Gunicorn for Python web server, Nginx for reverse proxy and load balancing, GLSL for shader programming, and so on.",
    "toolkits": [
      "Git",
      "Docker",
      "Linux",
      "Gunicorn",
      "Nginx",
      "GLSL",
      "..."
    ]
  },
  "WebGPU": {
    "title": "WebGPU",
    "description": "I also have a shallow experience in WebGL, which has sparked my interest in diving deeper into the world of graphics programming. Specifically, I'm excited to explore WebGPU and Vulkan backend, which offer powerful capabilities for rendering high-quality graphics and visual effects.",
    "toolkits": [
      "WebGL",
      "WebGPU",
      "Vulkan"
    ]
  },
  "Blockchain": {
    "title": "Blockchain",
    "description": "I'm also interested in blockchain technology, which I believe will be a game-changer in the future. I'm currently learning the basics of blockchain technology, and I hope I can explore the possibilities of blockchain one day.",
    "toolkits": [
      "Solidity",
      "Ethereum",
      "..."
    ]
  },
  "Game": {
    "title": "Game Development",
    "description": "I'm also a big fan of video games, especially ARPGs, and the Dark Souls series. Although I don't have too much time to play video games now, I still find inspiration in the art and storytelling of video games. I'm also interested in game development, and I'm currently learning Unity and Unreal Engine to develop my skills in game programming and design. ",
    "toolkits": [
      "Unity",
      "Unreal Engine"
    ]
  },
  "Enhance": {
    "title": "Other Web Development Frameworks",
    "description": "Specifically, I'm interested in exploring new backend frameworks such as Go, which is known for its simplicity, speed, and scalability. On the frontend side, I'm excited to try out VueJS or Svelte, which offer powerful capabilities for building reactive and performant user interfaces. I believe that by expanding my knowledge in different tools and frameworks, I can become a more versatile and effective programmer, and contribute to a wider range of projects and teams. ",
    "toolkits": [
      "VueJS",
      "Svelte"
    ]
  }

} as const