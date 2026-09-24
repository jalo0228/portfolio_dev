export type Locale = "ko" | "en";

export const locales: Locale[] = ["ko", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const content = {
  ko: {
    nav: { about: "About", projects: "Projects", skills: "Skills", journey: "Journey", contact: "Contact" },
    hero: {
      eyebrow: "AI AGENT DEVELOPER",
      title: ["데이터를 검색하고, 판단하고,", "실제 문제를 해결하는 AI 시스템을 만듭니다."],
      description: "대규모 데이터 파이프라인부터 RAG, GraphRAG, Multi-Agent까지 실제 운영 환경에서 동작하는 AI 시스템을 설계하고 구현합니다.",
      primary: "프로젝트 보기",
      secondary: "Contact",
      tags: ["RAG", "Microsoft GraphRAG", "Multi-Agent", "FastAPI", "Airflow", "Azure AI Foundry"],
      stats: [
        ["75%", "데이터 적재 시간 단축", "8시간 → 2시간"],
        ["<3s", "API 응답 속도", "70GB+ 데이터"],
        ["95%+", "챗봇 응답 정확도", "Manufacturing Agent"],
        ["-30%", "LLM Token Usage", "Multi-Agent"]
      ]
    },
    about: {
      label: "ABOUT ME",
      title: "문제와 데이터를 먼저 이해하는 AI Agent 개발자",
      body: [
        "안녕하세요. 실제 문제 해결에 강한 AI Agent 개발자를 목표로 하고 있는 김유현입니다.",
        "LLM과 RAG를 기반으로 AI 시스템을 설계하고, 서비스의 데이터 특성과 사용자 흐름에 맞는 Agent Architecture를 고민해왔습니다.",
        "개인화 학습 AI, 육아기록 기반 발달 점검 AI, 제조 데이터 분석 Agent까지 서로 다른 문제를 AI 시스템으로 구현해왔습니다.",
        "단순히 새로운 모델을 사용하는 것보다 어떤 데이터를 검색하고, 어떤 흐름으로 추론하며, 어떻게 신뢰할 수 있는 결과를 전달할 것인지에 관심이 있습니다."
      ],
      educationLabel: "EDUCATION",
      education: ["Pennsylvania State University", "B.S. Computer Science", "Minor in Statistics", "2020.08 – 2026.05"]
    },
    projectsLabel: "FEATURED PROJECTS",
    projectsTitle: "AI Agent Engineering Case Studies",
    viewCaseStudy: "Case Study 보기",
    projectCards: {
      manufacturing: {
        index: "01",
        title: "Manufacturing AI Agent",
        subtitle: "GraphRAG & Multi-Agent Manufacturing Data Analysis",
        description: "설비·공정 조건·품질 데이터를 Graph 구조로 모델링하고 관계 기반 Retrieval을 적용해 95% 이상의 챗봇 응답 정확도를 달성한 제조 데이터 AI Agent입니다.",
        tags: ["Microsoft GraphRAG", "Multi-Agent", "Azure AI Foundry", "Microsoft Copilot"],
        metrics: [["RESPONSE ACCURACY", "95%+"], ["LLM TOKEN USAGE", "-30%"]]
      },
      nittany: {
        index: "02",
        title: "Nittany AI",
        subtitle: "Nittany Buddy · Personalized AI Learning Assistant",
        description: "데일리 퀴즈와 개인화 학습 가이드를 제공하는 양방향 수학 학습 AI 어시스턴트입니다. 팀 리드로서 풀스택 개발 환경과 LLM 콘텐츠 생성 파이프라인을 함께 설계했습니다.",
        tags: ["Gemini 2.5 Flash", "LangChain", "Pydantic", "Docker", "Spring Boot"],
        metrics: [["ROLE", "Project Lead"], ["SERVICE", "End-to-End AI"]]
      },
      development: {
        index: "03",
        title: "육아기록 기반 발달 점검 AI",
        subtitle: "RAG-based Development Screening Assistant",
        description: "정부 설문 문항과 육아일기 데이터를 Vector DB로 연결해 자폐 조기 스크리닝을 지원한 RAG 기반 AI 프로토타입입니다.",
        tags: ["LangChain", "Gemini", "KoSimCSE", "Vector DB", "Top-K=5"],
        metrics: [["AWARD", "SOVAC 3rd Place"], ["RETRIEVAL", "Top-K=5"]]
      }
    },
    whatIBuild: {
      label: "WHAT I BUILD",
      title: "AI 시스템을 구성하는 핵심 레이어",
      items: [
        ["01", "RAG Systems", "Embedding, Vector Retrieval, Context Construction, Grounded Generation"],
        ["02", "Graph Retrieval", "Microsoft GraphRAG를 활용한 Relationship-aware Retrieval"],
        ["03", "Agent Workflow", "Task Separation, Multi-Agent Architecture, LLM Orchestration"],
        ["04", "Reliable LLM Output", "Structured Output, Pydantic Validation, Prompt Design"],
        ["05", "AI Service", "Backend Integration, Cloud Deployment, User-facing AI Service"]
      ]
    },
    skills: {
      label: "SKILLS",
      title: "Tech Stack",
      groups: [
        ["AI / Agent Engineering", ["LangChain", "RAG", "Microsoft GraphRAG", "Multi-Agent Architecture", "Knowledge Graph", "Vector DB", "Pydantic"]],
        ["LLM", ["Gemini 2.5 Flash", "Google Gemini"]],
        ["Backend", ["Python", "FastAPI", "Flask", "Java", "Spring Boot", "Spring Data JPA", "Node.js", "Express.js"]],
        ["Data / Retrieval", ["Airflow", "MySQL", "SQLite Vector Store", "Embedding", "Vector Search", "Cosine Similarity"]],
        ["Cloud / Platform", ["Azure", "Azure AI Foundry", "Microsoft Copilot", "Copilot Studio", "Kubernetes"]],
        ["DevOps", ["Docker", "Docker Hub", "Git", "GitHub"]]
      ]
    },
    journey: {
      label: "JOURNEY",
      title: "RAG에서 Multi-Agent까지",
      items: [
        ["2025.06", "SKT FLY AI Challenge", "육아기록 기반 발달 점검 AI", "RAG · Vector Retrieval"],
        ["2025.09", "Nittany AI", "Personalized Learning Assistant", "LLM Pipeline · Personalized Learning"],
        ["2026.01", "Manufacturing AI Agent", "Manufacturing Data Analysis", "GraphRAG · Multi-Agent · Azure AI Foundry"]
      ]
    },
    philosophy: "좋은 AI Agent는 모델보다 문제와 데이터를 먼저 이해해야 한다고 생각합니다.",
    contact: {
      label: "CONTACT",
      title: "함께 유용한 AI를 만들고 싶습니다.",
      body: "AI Agent와 AI Service Engineering에 관심이 있습니다.",
      emailLabel: "EMAIL"
    }
  },
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", journey: "Journey", contact: "Contact" },
    hero: {
      eyebrow: "AI AGENT DEVELOPER",
      title: ["I build AI systems that retrieve, reason,", "and solve real-world problems."],
      description: "I design and build production AI systems, from large-scale data pipelines to RAG, GraphRAG, and Multi-Agent workflows.",
      primary: "Explore Projects",
      secondary: "Contact",
      tags: ["RAG", "Microsoft GraphRAG", "Multi-Agent", "FastAPI", "Airflow", "Azure AI Foundry"],
      stats: [
        ["75%", "Pipeline runtime reduction", "8h → 2h"],
        ["<3s", "API response time", "70GB+ data"],
        ["95%+", "Chatbot response accuracy", "Manufacturing Agent"],
        ["-30%", "LLM token usage", "Multi-Agent"]
      ]
    },
    about: {
      label: "ABOUT ME",
      title: "An AI Agent developer who starts with the problem and the data",
      body: [
        "Hi, I'm Youhyun Kim, an AI Agent developer focused on solving real-world problems with AI systems.",
        "I design LLM and RAG-based systems with an emphasis on adapting agent architectures to the data, workflow, and requirements of each service.",
        "My projects span personalized learning, child development screening from parenting records, and AI agents for manufacturing data analysis.",
        "Rather than simply connecting a model to an application, I focus on how data is retrieved, how reasoning flows are structured, and how reliable outputs are delivered to users."
      ],
      educationLabel: "EDUCATION",
      education: ["Pennsylvania State University", "B.S. Computer Science", "Minor in Statistics", "2020.08 – 2026.05"]
    },
    projectsLabel: "FEATURED PROJECTS",
    projectsTitle: "AI Agent Engineering Case Studies",
    viewCaseStudy: "View Case Study",
    projectCards: {
      manufacturing: {
        index: "01",
        title: "Manufacturing AI Agent",
        subtitle: "GraphRAG & Multi-Agent Manufacturing Data Analysis",
        description: "A manufacturing data AI agent that models equipment, process conditions, and quality data as a graph, reaching over 95% chatbot response accuracy with relationship-aware retrieval.",
        tags: ["Microsoft GraphRAG", "Multi-Agent", "Azure AI Foundry", "Microsoft Copilot"],
        metrics: [["RESPONSE ACCURACY", "95%+"], ["LLM TOKEN USAGE", "-30%"]]
      },
      nittany: {
        index: "02",
        title: "Nittany AI",
        subtitle: "Nittany Buddy · Personalized AI Learning Assistant",
        description: "An interactive math learning assistant providing daily quizzes and personalized study guides. As project lead, I designed both the full-stack development environment and the LLM content generation pipeline.",
        tags: ["Gemini 2.5 Flash", "LangChain", "Pydantic", "Docker", "Spring Boot"],
        metrics: [["ROLE", "Project Lead"], ["SERVICE", "End-to-End AI"]]
      },
      development: {
        index: "03",
        title: "Child Development Screening AI",
        subtitle: "RAG-based Development Screening Assistant",
        description: "A RAG-based prototype for autism early screening that connects government questionnaire items with parenting records through a Vector DB.",
        tags: ["LangChain", "Gemini", "KoSimCSE", "Vector DB", "Top-K=5"],
        metrics: [["AWARD", "SOVAC 3rd Place"], ["RETRIEVAL", "Top-K=5"]]
      }
    },
    whatIBuild: {
      label: "WHAT I BUILD",
      title: "Core layers of the AI systems I build",
      items: [
        ["01", "RAG Systems", "Embedding, Vector Retrieval, Context Construction, Grounded Generation"],
        ["02", "Graph Retrieval", "Relationship-aware retrieval with Microsoft GraphRAG"],
        ["03", "Agent Workflow", "Task Separation, Multi-Agent Architecture, LLM Orchestration"],
        ["04", "Reliable LLM Output", "Structured Output, Pydantic Validation, Prompt Design"],
        ["05", "AI Service", "Backend Integration, Cloud Deployment, User-facing AI Service"]
      ]
    },
    skills: {
      label: "SKILLS",
      title: "Tech Stack",
      groups: [
        ["AI / Agent Engineering", ["LangChain", "RAG", "Microsoft GraphRAG", "Multi-Agent Architecture", "Knowledge Graph", "Vector DB", "Pydantic"]],
        ["LLM", ["Gemini 2.5 Flash", "Google Gemini"]],
        ["Backend", ["Python", "FastAPI", "Flask", "Java", "Spring Boot", "Spring Data JPA", "Node.js", "Express.js"]],
        ["Data / Retrieval", ["Airflow", "MySQL", "SQLite Vector Store", "Embedding", "Vector Search", "Cosine Similarity"]],
        ["Cloud / Platform", ["Azure", "Azure AI Foundry", "Microsoft Copilot", "Copilot Studio", "Kubernetes"]],
        ["DevOps", ["Docker", "Docker Hub", "Git", "GitHub"]]
      ]
    },
    journey: {
      label: "JOURNEY",
      title: "From RAG to Multi-Agent systems",
      items: [
        ["2025.06", "SKT FLY AI Challenge", "Child Development Screening AI", "RAG · Vector Retrieval"],
        ["2025.09", "Nittany AI", "Personalized Learning Assistant", "LLM Pipeline · Personalized Learning"],
        ["2026.01", "Manufacturing AI Agent", "Manufacturing Data Analysis", "GraphRAG · Multi-Agent · Azure AI Foundry"]
      ]
    },
    philosophy: "I believe a good AI agent should understand the problem and the data before the model.",
    contact: {
      label: "CONTACT",
      title: "Let's build something useful.",
      body: "I'm interested in AI Agent and AI Service Engineering.",
      emailLabel: "EMAIL"
    }
  }
} as const;

export const projectDetails = {
  manufacturing: {
    ko: {
      title: "Manufacturing AI Agent",
      subtitle: "GraphRAG & Multi-Agent Manufacturing Data Analysis",
      period: "2026.01 – 2026.05",
      overview: "다국가 제조 공장의 수치 기반 제조 데이터를 분석하기 위해 Microsoft GraphRAG를 적용한 AI Agent를 설계·구축했습니다. 설비, 공정 조건, 품질 데이터 간 관계를 Graph 구조로 모델링하고 관계 기반 Retrieval 파이프라인을 구축해 챗봇 응답 정확도 95% 이상을 달성했습니다. Azure 환경에서 Python 기반 Agent 파이프라인을 구현하고 Microsoft Copilot과 연동했습니다.",
      problemTitle: "Problem",
      problems: [
        ["Complex Relationships", "설비, 공정 조건, 품질 데이터가 복잡하게 연결되어 있어 단순 유사도 검색만으로 전체 Context를 파악하기 어려웠습니다."],
        ["Distributed Manufacturing Data", "여러 국가와 공장의 데이터를 대상으로 관계 기반 분석이 필요한 상황이었습니다."],
        ["LLM Cost", "Agent가 모든 작업을 수행할 경우 불필요한 LLM 호출이 증가할 수 있어 역할 분리가 필요했습니다."]
      ],
      architectureTitle: "Architecture",
      architecture: ["User Query", "Analysis Agent", "Microsoft GraphRAG", "Relationship-based Retrieval", "Response Agent", "Microsoft Copilot"],
      decisionTitle: "Why GraphRAG?",
      decision: "제조 데이터는 개별 레코드의 의미뿐 아니라 설비 → 공정 조건 → 생산 결과 → 품질처럼 연결된 구조가 중요했습니다. Microsoft GraphRAG를 사용해 데이터 간 관계를 Retrieval 과정에 반영했습니다.",
      roleTitle: "My Role",
      roles: ["AI Agent Architecture Design", "GraphRAG Retrieval Architecture", "Multi-Agent Workflow Design", "Agent Implementation", "Microsoft Copilot Integration"],
      resultTitle: "Result",
      result: "관계 기반 Retrieval로 챗봇 응답 정확도 95% 이상을 달성했고, 데이터 분석·Retrieval·응답 생성으로 역할을 분리한 Multi-Agent 구조를 통해 LLM Token 사용량을 30% 절감했습니다. 불필요한 LLM 호출과 API 비용을 줄여 고객사의 예산 제약에 맞는 Agent 구조로 최적화했습니다.",
      stack: ["Python", "Azure", "Azure AI Foundry", "Microsoft GraphRAG", "Multi-Agent Architecture", "Microsoft Copilot"]
    },
    en: {
      title: "Manufacturing AI Agent",
      subtitle: "GraphRAG & Multi-Agent Manufacturing Data Analysis",
      period: "2026.01 – 2026.05",
      overview: "I designed and built an AI agent for numerical manufacturing data across multiple plants using Microsoft GraphRAG. Equipment, process conditions, and quality data were modeled as a graph and connected to a relationship-aware retrieval pipeline, achieving over 95% chatbot response accuracy. The Python-based agent pipeline was implemented in Azure and integrated with Microsoft Copilot.",
      problemTitle: "Problem",
      problems: [
        ["Complex Relationships", "Equipment, process conditions, and quality data were tightly connected, making it difficult to capture the full context with similarity search alone."],
        ["Distributed Manufacturing Data", "The system needed to support relationship-based analysis across data from multiple plants and countries."],
        ["LLM Cost", "A single agent handling every step could lead to unnecessary LLM calls, so responsibilities needed to be separated."]
      ],
      architectureTitle: "Architecture",
      architecture: ["User Query", "Analysis Agent", "Microsoft GraphRAG", "Relationship-based Retrieval", "Response Agent", "Microsoft Copilot"],
      decisionTitle: "Why GraphRAG?",
      decision: "Manufacturing data depends not only on the meaning of individual records but also on connected structures such as equipment → process conditions → production results → quality. Microsoft GraphRAG was used to reflect these relationships during retrieval.",
      roleTitle: "My Role",
      roles: ["AI Agent Architecture Design", "GraphRAG Retrieval Architecture", "Multi-Agent Workflow Design", "Agent Implementation", "Microsoft Copilot Integration"],
      resultTitle: "Result",
      result: "Achieved over 95% chatbot response accuracy with relationship-aware retrieval and reduced LLM token usage by 30% by separating data analysis, retrieval, and response generation into a Multi-Agent architecture. Reducing unnecessary LLM calls and API cost helped optimize the agent for the client's budget constraints.",
      stack: ["Python", "Azure", "Azure AI Foundry", "Microsoft GraphRAG", "Multi-Agent Architecture", "Microsoft Copilot"]
    }
  },
  nittany: {
    ko: {
      title: "Nittany AI",
      subtitle: "Personalized AI Learning Assistant",
      period: "2025.09 – 2026.02",
      overview: "수학 학습에 어려움을 겪는 학생을 위해 데일리 퀴즈와 개인화 학습 가이드를 제공하는 양방향 AI 어시스턴트 Nittany Buddy를 기획·개발했습니다. 팀 리더로 일정과 주 단위 마일스톤, 역할 분담을 주도했고 Docker 기반 React·Node.js·Spring Boot·MySQL 개발 환경과 LangChain·Pydantic 기반 LLM 파이프라인을 구축했습니다.",
      problemTitle: "Problem",
      problems: [["Learning Direction", "학생이 무엇을, 어느 수준까지 공부해야 하는지 판단하기 어렵고 개인화된 피드백을 얻기 어려웠습니다."]],
      architectureTitle: "AI Pipeline",
      architecture: ["Course Materials", "Content Analysis", "Concept Extraction", "Quiz / Study Guide", "Pydantic Validation", "Learning Result Analysis", "Weak Concept Detection", "Personalized Content"],
      decisionTitle: "Reliable LLM Output",
      decision: "Pydantic을 사용해 문제, 정답, 해설, 난이도, 주제 정보를 구조화된 JSON Schema로 강제했습니다. 이를 통해 LLM 출력 형식의 일관성을 확보하고 Quiz Pipeline에서 안정적으로 사용할 수 있도록 설계했습니다.",
      roleTitle: "My Role",
      roles: ["Project Lead", "Backend Development", "AI / LLM Pipeline Design & Development"],
      resultTitle: "What I Learned",
      result: "학생별 개인화 데이터베이스를 개별 구축·관리해 맞춤형 학습 데이터를 안정적으로 처리하고, 구조화된 스터디 가이드와 문제를 자동 생성하는 End-to-End AI 서비스를 구현했습니다. 팀 리드로서 일정·마일스톤·역할 분담과 공통 개발 환경을 주도했습니다.",
      stack: ["Gemini 2.5 Flash", "Python", "Flask", "LangChain", "Pydantic", "Node.js", "Express.js", "Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"]
    },
    en: {
      title: "Nittany AI",
      subtitle: "Personalized AI Learning Assistant",
      period: "2025.09 – 2026.02",
      overview: "I planned and developed Nittany Buddy, an interactive AI math learning assistant that provides daily quizzes and personalized study guides. As team lead, I managed weekly milestones and role allocation, built a Docker-based React, Node.js, Spring Boot, and MySQL development environment, and implemented a LangChain and Pydantic-based LLM pipeline.",
      problemTitle: "Problem",
      problems: [["Learning Direction", "Students often struggle to decide what to study and at what level, while personalized feedback is difficult to provide continuously."]],
      architectureTitle: "AI Pipeline",
      architecture: ["Course Materials", "Content Analysis", "Concept Extraction", "Quiz / Study Guide", "Pydantic Validation", "Learning Result Analysis", "Weak Concept Detection", "Personalized Content"],
      decisionTitle: "Reliable LLM Output",
      decision: "I used Pydantic to enforce structured JSON schemas for questions, answers, explanations, difficulty levels, and topics. This made LLM output more consistent and easier to consume reliably in the quiz pipeline.",
      roleTitle: "My Role",
      roles: ["Project Lead", "Backend Development", "AI / LLM Pipeline Design & Development"],
      resultTitle: "What I Learned",
      result: "Built and managed per-student personalized databases for stable learning data processing, and delivered an end-to-end AI service that automatically generates structured study guides and quiz content. As project lead, I drove milestones, role allocation, and the shared development environment.",
      stack: ["Gemini 2.5 Flash", "Python", "Flask", "LangChain", "Pydantic", "Node.js", "Express.js", "Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"]
    }
  },
  development: {
    ko: {
      title: "육아기록 기반 발달 점검 AI",
      subtitle: "RAG-based Development Screening Assistant",
      period: "2025.06 – 2025.08",
      overview: "정부 제공 설문 기반 보호자 응답 데이터와 육아일기를 활용해 자폐 조기 스크리닝을 지원하는 LLM 서비스 프로토타입을 기획·개발했습니다. 설문 문항을 Vector DB화하고 육아일기와 연결하는 RAG 파이프라인을 설계했으며 임베딩·청킹 전략과 Top-K=5 Retrieval을 최적화했습니다.",
      problemTitle: "Problem",
      problems: [["Limited Context", "시기별 설문만으로는 아이의 실제 행동을 충분히 반영하기 어렵고, 보호자가 직접 설문을 작성해야 하는 부담이 있었습니다."]],
      architectureTitle: "RAG Architecture",
      architecture: ["Parenting Record", "MySQL", "Embedding Sync", "Vector Store", "Top-K Retrieval", "Context Construction", "Gemini", "Grounded Response", "K-DST Report"],
      decisionTitle: "Time-aware Embedding",
      decision: "설문 문항을 Vector DB화하고 육아일기 데이터와 연계하는 RAG 구조를 설계했습니다. 임베딩·청킹 전략을 최적화하고 Top-K=5 Retrieval 결과와 Prompt Orchestration을 조정해 검색 품질과 프로토타입 완성도를 높였습니다. 육아일기의 상대적 시간 표현을 보완하기 위해 작성일과 아동 개월 수 등 시간 메타데이터도 함께 활용했습니다.",
      roleTitle: "My Role",
      roles: ["AI Agent Design", "RAG Pipeline Design", "Embedding / Chunking Optimization", "Top-K Retrieval & Prompt Orchestration", "PM ↔ Development Requirement Translation"],
      resultTitle: "Result",
      result: "자폐 발달 장애 아동의 조기 발견과 의료 사각지대 완화라는 ESG 가치를 AI 솔루션으로 구현해 SOVAC Challenge 2025 ‘사회적기업 가치 페스타’ 3위에 선정되었습니다.",
      stack: ["LangChain", "Google Gemini", "KoSimCSE Embedding", "MySQL", "SQLite Vector Store", "Cosine Similarity Retrieval", "Node.js", "React"]
    },
    en: {
      title: "Child Development Screening AI",
      subtitle: "RAG-based Development Screening Assistant",
      period: "2025.06 – 2025.08",
      overview: "I planned and developed an LLM prototype for autism early screening using government questionnaire-based guardian response data and parenting records. Questionnaire items were vectorized and connected to parenting records through a RAG pipeline, with embedding, chunking, and Top-K=5 retrieval strategies optimized for search quality.",
      problemTitle: "Problem",
      problems: [["Limited Context", "Periodic questionnaires alone could not fully reflect a child's real behavior and required guardians to manually answer every question."]],
      architectureTitle: "RAG Architecture",
      architecture: ["Parenting Record", "MySQL", "Embedding Sync", "Vector Store", "Top-K Retrieval", "Context Construction", "Gemini", "Grounded Response", "K-DST Report"],
      decisionTitle: "Time-aware Embedding",
      decision: "I designed a RAG structure that vectorized questionnaire items and linked them with parenting records. Embedding and chunking strategies, Top-K=5 retrieval, and prompt orchestration were tuned to improve retrieval quality and prototype completeness. Temporal metadata such as record date and child age in months was also used to better represent relative time expressions.",
      roleTitle: "My Role",
      roles: ["AI Agent Design", "RAG Pipeline Design", "Embedding / Chunking Optimization", "Top-K Retrieval & Prompt Orchestration", "PM ↔ Development Requirement Translation"],
      resultTitle: "Result",
      result: "The project translated the ESG goal of earlier autism detection and reducing healthcare blind spots into a sustainable AI solution, placing 3rd at the SOVAC Challenge 2025 Social Enterprise Value Festa.",
      stack: ["LangChain", "Google Gemini", "KoSimCSE Embedding", "MySQL", "SQLite Vector Store", "Cosine Similarity Retrieval", "Node.js", "React"]
    }
  }
} as const;

export type ProjectSlug = keyof typeof projectDetails;

export function isProjectSlug(value: string): value is ProjectSlug {
  return value in projectDetails;
}
