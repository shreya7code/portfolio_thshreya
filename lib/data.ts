import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import twinMind from "@/public/TwinMind.png";
import aiModel_Safety from "@/public/AIModel_Safety.png";
import eCommerce from "@/public/E-Commerce_DE.png";
import smartInfra from "@/public/smartInfra.png";
import cardioVigi from "@/public/CardioVigilant.png";
import asl from "@/public/ASL.jpeg";


import { FaGraduationCap } from "react-icons/fa";

import { FaPython, FaJava, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiSelenium,
  SiPostman,
  SiGrafana,
} from "react-icons/si";

import { TbApi, TbBrandCpp } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { BsDatabaseFill, BsGearFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

import { MdDevices } from "react-icons/md";
import { VscSymbolMisc, VscAzure } from "react-icons/vsc";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "Stealth Startup",
    title: "Full Stack Developer - AI",
    location: "California, USA",    
    description:
       "Built and owned a production AI assistant platform with tenant-isolated RAG, agentic workflows, multi-provider LLM routing, evaluation, observability, and safety guardrails for client-specific enterprise use cases.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 – Present",
    tags: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Pinecone",
      "BART-MNLI",
      "RAG",
      "LLM Agents",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Docker",
      "AWS",
      "AI Safety"
    ],
  },
  {
    company: "University at Buffalo",
    title: "Graduate Teaching Assistant",
    location: "New York, USA",
    description:
      `Mentored students on deep learning concepts, PyTorch implementations, and model evaluation. 
      Also, supported research initiatives involving OCR pipelines and AI-driven document intelligence systems.`,
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 – Jun 2025",
    tags: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "OCR",
      "NLP",
      "Transformers",
      "OpenCV",
      "mT5",
      "NLLB",
      "Coqui TTS",
      "Apache Spark",
      "Azure",
      "Data Structure and Algorithm", 
      "Operating Systems",
      "Networking",
    ],
  },
  {
    company: "Wipro Ltd.",
    title: "Software Engineer",
    location: "Kolkata, India",
    description:
      `Built large-scale AI and backend systems for enterprise clients. Developed an AI-powered semantic search platform that indexed over 10M enterprise documents, improving search precision and performance.
      Built machine learning pipelines for sensitive data detection and NLP preprocessing, enabling automated compliance and improving model accuracy.
      Designed data ingestion pipelines processing 10TB+ enterprise data and contributed to backend services and automation frameworks for large-scale partner platforms, improving system reliability, testing coverage, and deployment efficiency.
      Developed backend services and automated testing systems for large-scale platforms, improving reliability, test coverage, and deployment efficiency.`,
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2019 – Aug 2022",
    tags: [
      "Python",
      "Java",
      "FastAPI",
      "Azure Cognitive Search",
      "Azure Functions",
      "Azure SQL",
      "Azure Data Factory",
      "ADLS",
      "Databricks",
      "PySpark",
      "REST APIs",
      "Selenium",
      "Cucumber",
      "Jenkins",
      "Docker",
      "Azure DevOps"
    ],
  },
  
] as const;

export const projectsData = [
  {
    title: "Live Meeting Copilot",
    description:
      "Built a real-time meeting copilot that transcribes live conversations using Groq Whisper Large V3 and generates context-aware responses with Llama 3.3, maintaining rolling conversation context and delivering answers in about 30 seconds.",
    tags: [
      "Next.js",
      "TypeScript",
      "WebRTC",
      "Groq Whisper Large V3",
      "Llama 3.3",
      "Groq",
      "Speech-to-Text",
      "LLMs"
    ],
    imageUrl: twinMind,
    githubUrl: "https://github.com/shreya7code/twinmind-live"
  },
  {
    title: "AgenticAI Model Safety Evaluation Platform",
    description:
      "The platform automatically stress-tests LLM applications for hallucinations, prompt injections, jailbreaks, bias, and data leakage. The system uses automated red-team agents, LLM-as-judge scoring, and regression detection to evaluate model quality across versions, with a FastAPI backend and a Next.js dashboard for monitoring results.",
    tags: ["Python", "LangGraph", "PostgreSQL", "pgvector", "Redis", "TypeScript", "Grafana"],
    imageUrl: aiModel_Safety,
    githubUrl: "https://github.com/shreya7code/Anomaly_Detection-Smart_Infra_Monitor"
  },
  {
    title: "Olist E-Commerce Analytics",
    description:
      "Built an end-to-end data pipeline using the Brazilian Olist e-commerce dataset to ingest, process, and transform large-scale transactional data into structured analytical datasets for business insights and reporting.",
    tags: ["Azure Data Factory", "Azure Databricks", "PySpark", "Azure Data Lake Gen2", "Azure Synapse SQL"],
    imageUrl: eCommerce,
    githubUrl: "https://github.com/shreya7code/BigDataProject-AzureDL-Databricks-Tableau"
  },
  {
    title: "Smart Infra Monitor",
    description:
      "Built a real-time infrastructure monitoring system that simulates machine metrics, streams them through a data pipeline, detects anomalies using machine learning, and visualizes system health through interactive dashboards.",
    tags: ["FastAPI", "Apache Kafka", "InfluxDB", "Docker", "AWS"],
    imageUrl: smartInfra,
    githubUrl: "https://github.com/shreya7code/Anomaly_Detection-Smart_Infra_Monitor"
  },
  {
    title: "Gesture-to-Text",
    description:
      "Built a deep learning system that recognizes hand gestures and converts them into text, enabling real-time gesture-based communication through computer vision and neural network models.",
    tags: ["PyTorch", "OpenCV", "CNN", "Neural Networks", "LSTM", "Deep Learning","Streamlit"],
    imageUrl: asl,
    githubUrl: "https://github.com/shreya7code/Sign-Language-Interpretation-Deep-Learning-Model"
  },
  {
    title: "CardioVigilant",
    description:
      "Built a real-time infrastructure monitoring system that simulates machine metrics, streams them through a data pipeline, detects anomalies using machine learning, and visualizes system health through interactive dashboards.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Logistic Regression", "Random Forest", "Flask", "Pandas", "NumPy"],
    imageUrl: cardioVigi,
    githubUrl: "https://github.com/shreya7code/CardioVigilant-ML"
  },
] as const;

// export const skillsData = [
//   "Python",
//   "Java",
//   "C/C++",
//   "TypeScript",
//   "Node.js",
//   "Django",
//   "FastAPI",
//   "Flask",
//   "REST APIs",
//   "Scikit-learn", 
//   "TensorFlow",
//   "PyTorch",
//   "CNN",
//   "Transformer",
//   "LLMs",
//   "NLP",
//   "Hugging Face",
//   "Pandas",
//   "NumPy",
//   "SQL",
//   "PL/SQL",
//   "PostgreSQL",
//   "Pinecone",
//   "AWS",
//   "Azure",
//   "Docker",
//   "Kubernetes",
//   "DevOps",
//   "CI/CD",
//   "Kafka",
//   "Redis",
//   "Grafana",
//   "Selenium",
//   "Cucumber",
//   "Git",
//   "Postman",
//   "Data Structures",
//   "Software Design"
// ] as const;


export const skillsData = [
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "C/C++", icon: TbBrandCpp },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Django", icon: SiDjango },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "REST APIs", icon: TbApi },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "CNN", icon: GiBrain },
  { name: "Transformer", icon: GiBrain },
  { name: "LLMs", icon: GiBrain },
  { name: "NLP", icon: GiBrain },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "SQL", icon: BsDatabaseFill },
  { name: "PL/SQL", icon: GrOracle },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Pinecone", icon: BsDatabaseFill },
  { name: "AWS", icon: FaAws },
  { name: "Azure", icon: VscAzure },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "DevOps", icon: MdDevices },
  { name: "CI/CD", icon: BsGearFill },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Redis", icon: SiRedis },
  { name: "Grafana", icon: SiGrafana },
  { name: "Selenium", icon: SiSelenium },
  { name: "Cucumber", icon: VscSymbolMisc },
  { name: "Git", icon: FaGitAlt },
  { name: "Postman", icon: SiPostman },
  { name: "Data Structures", icon: BsDatabaseFill },
  { name: "Software Design", icon: BsGearFill },
] as const;





export const educationData = [
  {
    institution: "University at Buffalo",
    degree: "M.S. - Computer Science and Engineering",
    location: "Buffalo, New York, USA",
    icon: React.createElement(FaGraduationCap),
    date: "Jan 2024 – Jun 2025",
  },
  {
    institution: "West Bengal University of Technology",
    degree: "B.Tech - Information Technology",
    location: "Kolkata, India",
    icon: React.createElement(FaGraduationCap),
    date: "Aug 2015 – Jul2019",
  },
] as const;
