import { MainPageCatalogs } from "@/types"

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

export const mainPageCatalogs: MainPageCatalogs = ["About", "Project", "Blog", "Contact"]

export const skillCatalogs: string[] = ["ReactJS", "NextJS", "JavaScript", "TypeScript", "Django", "Python", 
  "Go", "AWS", "TailwindCSS", "Docker", "PostgreSQL", "Nginx", "Gunicorn", "Celery", "VSTO(C#)", "GLSL",].map((item) => item + ".")

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
      "Postgresql"
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
      "GO",
      "VueJS",
      "Svelte"
    ]
  }

} as const