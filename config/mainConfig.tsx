import { MainPageCatalogs } from "@/types"

export const mainPageCatalogs: MainPageCatalogs = ['About', 'Project', 'Blog', 'Contact']

export const skillCatalogs: string[] = ['ReactJS', 'NextJS', 'JavaScript', 'TypeScript', 'Django', 'Python', 
'Go', 'AWS', 'TailwindCSS', 'Docker', 'PostgreSQL', 'Nginx', 'Gunicorn', 'Celery', 'VSTO(C#)', 'Google Analytics',].map((item) => item + '.')

export const skills = {
    "Web Development": {
        "title": "Web Development",
        "description": "I have much experience with complex web applications using ReactJS and NextJS",
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
        "description": "I also know how to use AWS as well as other cloud computing platform. I have experience regarding manage the EC(elastic instance), deploy serverless function using lambda and deploy machine learning model using sagemaker and ecs",
        "toolkits": [
            "AWS",
            "Tencent Cloud"
        ]
    },
    "Deep Learning": {
        "title": "Deep Learning",
        "description": "Deep Learning is essential for any programmer from my persepctive. Even if I am not likely to propose a ml model on my own, I am capable to fine-tune/train/deploy the models using corresponding framework",
        "toolkits": [
            "PyTorch",
            "TensorFlow"
        ]
    },
    "Other Skills": {
        "title": "Other Skills",
        "description": "I have cultavated other skills during the learning.",
        "toolkits": [
            "GIt",
            "Docker",
            "Linux",
            "Gunicorn",
            "Ningx",
            "..."
        ]
    }

} as const