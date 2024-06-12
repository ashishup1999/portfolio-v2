import jsIcon from "@/assets/skills/js.svg";
import tsIcon from "@/assets/skills/ts.svg";
import cssIcon from "@/assets/skills/css.svg";
import htmlIcon from "@/assets/skills/html.svg";
import reactIcon from "@/assets/skills/react.svg";
import nextIcon from "@/assets/skills/next.svg";
import sassIcon from "@/assets/skills/sass.svg";
import jestIcon from "@/assets/skills/jest.svg";
import mongoIcon from "@/assets/skills/mongo.svg";
import pgIcon from "@/assets/skills/postgress.svg";
import nodeIcon from "@/assets/skills/node.svg";
import yarnIcon from "@/assets/skills/yarn.svg";
import viteIcon from "@/assets/skills/vite.svg";
import pyIcon from "@/assets/skills/py.svg";
import dockerIcon from "@/assets/skills/docker.svg";
import ksIcon from "@/assets/skills/ks.svg";
import reduxIcon from "@/assets/skills/redux.svg";
import goIcon from "@/assets/skills/go.svg";
import cpp from "@/assets/skills/cpp.svg";
import aws from "@/assets/skills/aws.svg";
import dj from "@/assets/skills/django.svg";
import codekarImg from "@/assets/work-images/codeKar.png";
import samvadImg from "@/assets/work-images/samvad.png";
import fdImg from "@/assets/work-images/fm.png";
import nlpImg from "@/assets/work-images/nlp.png";
import nstImg from "@/assets/work-images/nst.png";
import { StaticImageData } from "next/image";

export const ABOUT = {
  name: "ASHISH UPADHYAY",
  alias: "<Software Developer>",
  summary:
    "I am a full stack software developer with over 2 years of experience in the industrial settings. Currently, I am employed at IDFC FIRST BANK Ltd. where I have led several successful projects that have significantly improved operational efficiency and user experience. My primary expertise lies in full stack web development, encompassing front-end, back-end, and Dev Ops.",
};

export const SKILLS_ICONS = {
  js: jsIcon,
  css: cssIcon,
  html: htmlIcon,
  ts: tsIcon,
  react: reactIcon,
  next: nextIcon,
  sass: sassIcon,
  jest: jestIcon,
  pg: pgIcon,
  node: nodeIcon,
  mongo: mongoIcon,
  yarn: yarnIcon,
  vite: viteIcon,
  py: pyIcon,
  go: goIcon,
  docker: dockerIcon,
  kube: ksIcon,
  redux: reduxIcon,
  cpp: cpp,
  aws: aws,
  dj: dj,
};

export const SKILLS_NAMES: { [key: string]: string } = {
  js: "JavaScript",
  css: "CSS",
  html: "HTML",
  ts: "TypeScript",
  react: "ReactJS",
  next: "NextJS",
  sass: "Sass",
  jest: "Jest",
  pg: "Postgress",
  node: "NodeJS",
  mongo: "Mongo",
  yarn: "Yarn",
  vite: "Vite",
  py: "Python",
  go: "Golang",
  docker: "Docker",
  kube: "Kubernetes",
  redux: "Redux",
  cpp: "C++",
  aws: "AWS",
  dj: "Django",
};

export const WORKS: {
  [key: string]: {
    id: string;
    img: StaticImageData;
    name: string;
    open: string;
    ui?: string;
    server?: string;
    desc: string;
  };
} = {
  codekar: {
    id: "codekar",
    img: codekarImg,
    name: "<CodeKar>",
    open: "https://codekar-one.vercel.app/",
    ui: "https://github.com/ashishup1999/codekar",
    server: "https://github.com/ashishup1999/codekar-server",
    desc: "An authentication-based platform enabling users to create mini projects using HTML, CSS, and JavaScript. Provides code-editor playgrounds supporting 5 languages that are Java, Python, Go, C++, and Js. Introducing a unique whiteboard-like code-editor mode devoid of common editor features such as auto-suggestion, auto-completion, and auto-indentation to help users grasp a deeper understanding of language’s features. Facilitates exploration of other user’s playgrounds with the option to connect and collaborate. Used a Go based server as Go can handle as many as 1000 concurrent requests per second, making the app faster",
  },
  samvad: {
    id: "samvad",
    img: samvadImg,
    name: "<Samvad>",
    open: "https://samvad-client-img-latest.onrender.com/",
    ui: "https://github.com/ashishup1999/samvad-client",
    server: "https://github.com/ashishup1999/samvad-server",
    desc: "Samvad is a web-based, responsive application designed for real-time chatting with friends. This project highlights the effective use of web sockets for seamless real-time communication. The user interface offers a smooth experience, allowing users to easily log in and initiate conversations with their loved ones.",
  },
  fmd: {
    id: "fmd",
    img: fdImg,
    name: "<Face Mask Detector>",
    open: "https://github.com/ashishup1999/Face-Mask-Detector-for-COVID-pandemic",
    desc: "I have created a system capable of identifying whether a person is wearing a mask using live camera input. To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.",
  },
  nlp: {
    id: "nlp",
    img: nlpImg,
    name: "<Twitter Sentiment Analysis>",
    open: "https://github.com/ashishup1999/NLP-on-twitter-sentiments",
    desc: "I developed an algorithm capable of determining whether a sentence expresses support for or opposition to the concept of global warming. The dataset used for this task was collected from tweets posted by various Twitter users discussing the topic of global warming.",
  },
  nst: {
    id: "nst",
    img: nstImg,
    name: "<Neural Style Transfer>",
    open: "https://github.com/ashishup1999/Neural-Style-Transfer-pytorch-",
    desc: "I have created a system capable of identifying whether a person is wearing a mask using live camera input. To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.",
  },
};
