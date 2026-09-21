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
      description: "RAG, GraphRAG, Multi-Agent Architecture를 중심으로 실제 서비스에 적용 가능한 AI Agent를 설계하고 구현해왔습니다.",
      primary: "프로젝트 보기",
      secondary: "Contact",
      tags: ["RAG", "Microsoft GraphRAG", "Multi-Agent", "Azure AI Foundry"]
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
        description: "다국가 제조 공장의 설비·공정 조건·품질 데이터 간 관계를 분석하고 Microsoft Copilot에서 질의할 수 있도록 설계한 AI Agent입니다.",
        tags: ["Microsoft GraphRAG", "Multi-Agent", "Azure AI Foundry", "Microsoft Copilot"],
        metricLabel: "LLM Token Usage",
        metric: "30% 절감"
      },
      nittany: {
        index: "02",
        title: "Nittany AI",
        subtitle: "Personalized AI Learning Assistant",
        description: "강의 자료에서 핵심 개념을 추출하고 학생 수준에 맞는 퀴즈와 Study Guide를 생성하는 개인화 AI 학습 보조 서비스입니다.",
        tags: ["Gemini 2.5 Flash", "LangChain", "Pydantic", "Spring Boot"],
        metricLabel: "ROLE",
        metric: "Project Lead"
      },
      development: {
        index: "03",
        title: "육아기록 기반 발달 점검 AI",
        subtitle: "RAG-based Development Screening Assistant",
        description: "육아 기록을 검색하고 AI Q&A와 K-DST를 연결해 발달 점검 리포트를 생성하는 RAG 기반 AI 서비스입니다.",
        tags: ["LangChain", "Gemini", "KoSimCSE", "Vector Retrieval"],
        metricLabel: "AWARD",
        metric: "SOVAC 3rd Place"
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
        ["AI / Agent Engineering", ["LangChain", "RAG", "Microsoft GraphRAG", "Multi-Agent Architecture", "Pydantic"]],
        ["LLM", ["Gemini 2.5 Flash", "Google Gemini"]],
        ["Backend", ["Python", "Flask", "Java", "Spring Boot", "Spring Data JPA", "Node.js", "Express.js"]],
        ["Data / Retrieval", ["MySQL", "SQLite Vector Store", "Embedding", "Vector Search", "Cosine Similarity"]],
        ["Cloud / Platform", ["Azure", "Azure AI Foundry", "Microsoft Copilot", "Copilot Studio"]],
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
      description: "My work focuses on RAG, GraphRAG, and Multi-Agent Architecture, with an emphasis on building AI agents for real-world applications.",
      primary: "Explore Projects",
      secondary: "Contact",
      tags: ["RAG", "Microsoft GraphRAG", "Multi-Agent", "Azure AI Foundry"]
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
        description: "An AI agent designed to analyze manufacturing data across multiple plants and answer queries based on relationships between equipment, process conditions, and quality data.",
        tags: ["Microsoft GraphRAG", "Multi-Agent", "Azure AI Foundry", "Microsoft Copilot"],
        metricLabel: "LLM TOKEN USAGE",
        metric: "30% reduction"
      },
      nittany: {
        index: "02",
        title: "Nittany AI",
        subtitle: "Personalized AI Learning Assistant",
        description: "An AI learning assistant that extracts key concepts from course materials and generates quizzes and study guides tailored to each student's learning level.",
        tags: ["Gemini 2.5 Flash", "LangChain", "Pydantic", "Spring Boot"],
        metricLabel: "ROLE",
        metric: "Project Lead"
      },
      development: {
        index: "03",
        title: "Child Development Screening AI",
        subtitle: "RAG-based Development Screening Assistant",
        description: "A RAG-based AI service that retrieves behavioral information from parenting records and combines AI Q&A with K-DST to support child development screening.",
        tags: ["LangChain", "Gemini", "KoSimCSE", "Vector Retrieval"],
        metricLabel: "AWARD",
        metric: "SOVAC 3rd Place"
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
        ["AI / Agent Engineering", ["LangChain", "RAG", "Microsoft GraphRAG", "Multi-Agent Architecture", "Pydantic"]],
        ["LLM", ["Gemini 2.5 Flash", "Google Gemini"]],
        ["Backend", ["Python", "Flask", "Java", "Spring Boot", "Spring Data JPA", "Node.js", "Express.js"]],
        ["Data / Retrieval", ["MySQL", "SQLite Vector Store", "Embedding", "Vector Search", "Cosine Similarity"]],
        ["Cloud / Platform", ["Azure", "Azure AI Foundry", "Microsoft Copilot", "Copilot Studio"]],
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
      overview: "다국가 제조 공장의 데이터를 분석하고, 설비·공정 조건·품질 데이터 사이의 관계를 기반으로 사용자의 질문에 답변하는 AI Agent입니다. Microsoft GraphRAG와 Multi-Agent Architecture를 적용하고 Azure AI Foundry 환경에서 구현해 Microsoft Copilot과 연동했습니다.",
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
      result: "Multi-Agent 구조 최적화를 통해 LLM Token 사용량을 30% 절감했습니다.",
      stack: ["Python", "Azure", "Azure AI Foundry", "Microsoft GraphRAG", "Multi-Agent Architecture", "Microsoft Copilot"]
    },
    en: {
      title: "Manufacturing AI Agent",
      subtitle: "GraphRAG & Multi-Agent Manufacturing Data Analysis",
      period: "2026.01 – 2026.05",
      overview: "An AI agent designed to analyze manufacturing data across multiple plants and answer user queries based on relationships between equipment, process conditions, and quality data. The system uses Microsoft GraphRAG and a Multi-Agent Architecture, implemented with Azure AI Foundry and integrated with Microsoft Copilot.",
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
      result: "Reduced LLM token usage by 30% through Multi-Agent architecture optimization.",
      stack: ["Python", "Azure", "Azure AI Foundry", "Microsoft GraphRAG", "Multi-Agent Architecture", "Microsoft Copilot"]
    }
  },
  nittany: {
    ko: {
      title: "Nittany AI",
      subtitle: "Personalized AI Learning Assistant",
      period: "2025.09 – 2026.02",
      overview: "사용자가 업로드한 강의 자료에서 핵심 개념을 추출하고 학생 수준에 맞는 퀴즈와 Study Guide를 생성하는 AI 학습 보조 서비스입니다. 학습 결과와 취약 개념을 이후 콘텐츠 생성에 반영해 개인화된 학습 흐름을 제공합니다.",
      problemTitle: "Problem",
      problems: [["Learning Direction", "학생이 무엇을, 어느 수준까지 공부해야 하는지 판단하기 어렵고 개인화된 피드백을 얻기 어려웠습니다."]],
      architectureTitle: "AI Pipeline",
      architecture: ["Course Materials", "Content Analysis", "Concept Extraction", "Quiz / Study Guide", "Pydantic Validation", "Learning Result Analysis", "Weak Concept Detection", "Personalized Content"],
      decisionTitle: "Reliable LLM Output",
      decision: "Pydantic을 사용해 문제, 정답, 해설, 난이도, 주제 정보를 구조화된 JSON Schema로 강제했습니다. 이를 통해 LLM 출력 형식의 일관성을 확보하고 Quiz Pipeline에서 안정적으로 사용할 수 있도록 설계했습니다.",
      roleTitle: "My Role",
      roles: ["Project Lead", "Backend Development", "AI / LLM Pipeline Design & Development"],
      resultTitle: "What I Learned",
      result: "팀 리드로 일정과 개발 흐름을 설계하고 Docker와 Git을 활용해 공통 개발 환경을 구축했습니다. 빠른 프로토타이핑과 반복적인 피드백의 중요성을 경험했습니다.",
      stack: ["Gemini 2.5 Flash", "Python", "Flask", "LangChain", "Pydantic", "Node.js", "Express.js", "Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"]
    },
    en: {
      title: "Nittany AI",
      subtitle: "Personalized AI Learning Assistant",
      period: "2025.09 – 2026.02",
      overview: "An AI learning assistant that extracts key concepts from uploaded course materials and generates quizzes and study guides tailored to each student's level. Quiz results and weak concepts are fed back into future content generation to create a personalized learning flow.",
      problemTitle: "Problem",
      problems: [["Learning Direction", "Students often struggle to decide what to study and at what level, while personalized feedback is difficult to provide continuously."]],
      architectureTitle: "AI Pipeline",
      architecture: ["Course Materials", "Content Analysis", "Concept Extraction", "Quiz / Study Guide", "Pydantic Validation", "Learning Result Analysis", "Weak Concept Detection", "Personalized Content"],
      decisionTitle: "Reliable LLM Output",
      decision: "I used Pydantic to enforce structured JSON schemas for questions, answers, explanations, difficulty levels, and topics. This made LLM output more consistent and easier to consume reliably in the quiz pipeline.",
      roleTitle: "My Role",
      roles: ["Project Lead", "Backend Development", "AI / LLM Pipeline Design & Development"],
      resultTitle: "What I Learned",
      result: "As project lead, I planned the development flow and built a shared development environment using Docker and Git. The project reinforced the value of rapid prototyping and iterative feedback.",
      stack: ["Gemini 2.5 Flash", "Python", "Flask", "LangChain", "Pydantic", "Node.js", "Express.js", "Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"]
    }
  },
  development: {
    ko: {
      title: "육아기록 기반 발달 점검 AI",
      subtitle: "RAG-based Development Screening Assistant",
      period: "2025.06 – 2025.08",
      overview: "보호자가 작성한 육아 기록을 활용해 아동의 행동 정보를 검색하고, AI Q&A와 K-DST를 연결해 발달 점검을 지원하는 리포트를 생성하는 AI 서비스입니다.",
      problemTitle: "Problem",
      problems: [["Limited Context", "시기별 설문만으로는 아이의 실제 행동을 충분히 반영하기 어렵고, 보호자가 직접 설문을 작성해야 하는 부담이 있었습니다."]],
      architectureTitle: "RAG Architecture",
      architecture: ["Parenting Record", "MySQL", "Embedding Sync", "Vector Store", "Top-K Retrieval", "Context Construction", "Gemini", "Grounded Response", "K-DST Report"],
      decisionTitle: "Time-aware Embedding",
      decision: "육아일기에는 ‘오늘’, ‘어제’ 같은 상대적 시간 표현이 많았습니다. 텍스트만 Embedding하면 특정 시점 행동에 대한 검색이 어려울 수 있어 작성일과 아동 개월 수 등 시간 메타데이터를 텍스트와 함께 Embedding했습니다.",
      roleTitle: "My Role",
      roles: ["AI Agent Design", "RAG Pipeline Design", "Embedding Pipeline", "AI Q&A", "Report Generation"],
      resultTitle: "Result",
      result: "MySQL과 Embedding 자동 동기화, Top-K Retrieval, RAG Q&A, K-DST 연계 리포트를 구현했고 SOVAC Challenge 2025 사회적기업 가치 페스타에서 3위를 수상했습니다.",
      stack: ["LangChain", "Google Gemini", "KoSimCSE Embedding", "MySQL", "SQLite Vector Store", "Cosine Similarity Retrieval", "Node.js", "React"]
    },
    en: {
      title: "Child Development Screening AI",
      subtitle: "RAG-based Development Screening Assistant",
      period: "2025.06 – 2025.08",
      overview: "A RAG-based AI service that retrieves behavioral information from parenting records and combines AI Q&A with K-DST to support child development screening.",
      problemTitle: "Problem",
      problems: [["Limited Context", "Periodic questionnaires alone could not fully reflect a child's real behavior and required guardians to manually answer every question."]],
      architectureTitle: "RAG Architecture",
      architecture: ["Parenting Record", "MySQL", "Embedding Sync", "Vector Store", "Top-K Retrieval", "Context Construction", "Gemini", "Grounded Response", "K-DST Report"],
      decisionTitle: "Time-aware Embedding",
      decision: "Parenting records frequently use relative time expressions such as ‘today’ or ‘yesterday.’ To better retrieve behaviors associated with a specific point in time, I embedded temporal metadata such as the record date and the child's age in months together with the text.",
      roleTitle: "My Role",
      roles: ["AI Agent Design", "RAG Pipeline Design", "Embedding Pipeline", "AI Q&A", "Report Generation"],
      resultTitle: "Result",
      result: "Implemented automatic MySQL-to-embedding synchronization, Top-K retrieval, RAG Q&A, and K-DST-linked reporting. The project placed 3rd at the SOVAC Challenge 2025 Social Enterprise Value Festa.",
      stack: ["LangChain", "Google Gemini", "KoSimCSE Embedding", "MySQL", "SQLite Vector Store", "Cosine Similarity Retrieval", "Node.js", "React"]
    }
  }
} as const;

export type ProjectSlug = keyof typeof projectDetails;

export function isProjectSlug(value: string): value is ProjectSlug {
  return value in projectDetails;
}
