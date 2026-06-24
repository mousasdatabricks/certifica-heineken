// Trilhas de certificação Databricks — espelham as 8 trilhas (learning paths) do
// Advanced Learning Festival (15 jun – 6 jul 2026):
// https://community.databricks.com/t5/learning-events/advanced-learning-festival-15-june-06-july-2026/ev-p/156932
// Cada trilha lista os módulos oficiais da Databricks Academy. Onde existe o curso
// no catálogo PT-BR usamos o link direto; nos demais, link de busca no catálogo.
// App Certifica real (tenant Heineken) — plataforma interativa de certificação Databricks
export const CERTIFICA_APP_URL = 'https://certifica-7474647325287912.aws.databricksapps.com/t/heineken'

export type Level = 'fundamentos' | 'associate' | 'professional'
export interface TrailClass { id: string; title: string; level: Level; duration: string; url: string }
export interface Trail { name: string; description: string; certificationId: string; certificationName: string; classes: TrailClass[] }

export const trails: Trail[] = [
  {
    "name": "Associate Data Engineering",
    "description": "Trilha de nível associate: ingestão, orquestração e construção de pipelines com Lakeflow, mais fundamentos de DevOps para engenharia de dados.",
    "certificationId": "data_engineer_associate",
    "certificationName": "Databricks Certified Data Engineer Associate",
    "classes": [
      {
        "id": "r0-c0",
        "title": "Data Ingestion with Lakeflow Connect",
        "level": "associate",
        "duration": "4h",
        "url": "https://www.databricks.com/training/catalog?q=Data%20Ingestion%20with%20Lakeflow%20Connect"
      },
      {
        "id": "r0-c1",
        "title": "Deploy Workloads with Lakeflow Jobs",
        "level": "associate",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/deploy-workloads-with-lakeflow-jobs-portuguese-br-3278"
      },
      {
        "id": "r0-c2",
        "title": "Build Data Pipelines with Lakeflow Spark Declarative Pipelines",
        "level": "associate",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/build-data-pipelines-with-lakeflow-declarative-pipelines-portuguese-br-3289"
      },
      {
        "id": "r0-c3",
        "title": "DevOps Essentials for Data Engineering",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/devops-essentials-for-data-engineering-portuguese-br-3923"
      }
    ]
  },
  {
    "name": "Professional Data Engineering",
    "description": "Trilha avançada: streaming, privacidade de dados, otimização de performance e deploy automatizado com Databricks Asset Bundles.",
    "certificationId": "data_engineer_professional",
    "certificationName": "Databricks Certified Data Engineer Professional",
    "classes": [
      {
        "id": "r1-c0",
        "title": "Databricks Streaming and Lakeflow Spark Declarative Pipelines",
        "level": "professional",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-streaming-and-lakeflow-spark-declarative-pipelines-portuguese-br-3083"
      },
      {
        "id": "r1-c1",
        "title": "Databricks Data Privacy",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-data-privacy-portuguese-br-4012"
      },
      {
        "id": "r1-c2",
        "title": "Databricks Performance Optimization",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-performance-optimization-portuguese-br-3080"
      },
      {
        "id": "r1-c3",
        "title": "Automated Deployment with Databricks Asset Bundles",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=Automated%20Deployment%20with%20Databricks%20Asset%20Bundles"
      }
    ]
  },
  {
    "name": "Data Analysts",
    "description": "Trilha de analistas: análise self-service com AI/BI e SQL Analytics no Databricks para construir dashboards e insights.",
    "certificationId": "data_analyst_associate",
    "certificationName": "Databricks Certified Data Analyst Associate",
    "classes": [
      {
        "id": "r2-c0",
        "title": "AI/BI for Data Analysts",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/aibi-for-data-analysts-portuguese-br-4195"
      },
      {
        "id": "r2-c1",
        "title": "SQL Analytics on Databricks",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/sql-analytics-on-databricks-portuguese-br-4207"
      }
    ]
  },
  {
    "name": "Associate ML Practitioners",
    "description": "Fundamentos de machine learning: preparação de dados, desenvolvimento, deploy e operações de modelos.",
    "certificationId": "machine_learning_associate",
    "certificationName": "Databricks Certified Machine Learning Associate",
    "classes": [
      {
        "id": "r3-c0",
        "title": "Data Preparation for Machine Learning",
        "level": "associate",
        "duration": "2h",
        "url": "https://customer-academy.databricks.com/learn/courses/2343/data-preparation-for-machine-learning"
      },
      {
        "id": "r3-c1",
        "title": "Machine Learning Model Development",
        "level": "associate",
        "duration": "2h",
        "url": "https://customer-academy.databricks.com/learn/courses/2390/machine-learning-model-development"
      },
      {
        "id": "r3-c2",
        "title": "Machine Learning Model Deployment",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=Machine%20Learning%20Model%20Deployment"
      },
      {
        "id": "r3-c3",
        "title": "Machine Learning Operations",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=Machine%20Learning%20Operations"
      }
    ]
  },
  {
    "name": "Professional ML Practitioners",
    "description": "Trilha avançada de ML: machine learning em escala e operações avançadas de machine learning (MLOps).",
    "certificationId": "machine_learning_professional",
    "certificationName": "Databricks Certified Machine Learning Professional",
    "classes": [
      {
        "id": "r4-c0",
        "title": "Machine Learning at Scale",
        "level": "professional",
        "duration": "3h",
        "url": "https://www.databricks.com/training/catalog?q=Machine%20Learning%20at%20Scale"
      },
      {
        "id": "r4-c1",
        "title": "Advanced Machine Learning Operations",
        "level": "professional",
        "duration": "2h",
        "url": "https://customer-academy.databricks.com/learn/courses/3508/advanced-machine-learning-operations"
      }
    ]
  },
  {
    "name": "Generative AI Engineering",
    "description": "Engenharia de IA Generativa: agentes de recuperação (RAG), aplicações single-agent, avaliação e governança, deploy e monitoramento.",
    "certificationId": "genai_engineer_associate",
    "certificationName": "Databricks Certified Generative AI Engineer Associate",
    "classes": [
      {
        "id": "r5-c0",
        "title": "Building Retrieval Agents on Databricks",
        "level": "associate",
        "duration": "3h",
        "url": "https://www.databricks.com/training/catalog?q=Building%20Retrieval%20Agents"
      },
      {
        "id": "r5-c1",
        "title": "Building Single-Agent Applications on Databricks",
        "level": "associate",
        "duration": "3h",
        "url": "https://www.databricks.com/training/catalog?q=Building%20Single-Agent%20Applications"
      },
      {
        "id": "r5-c2",
        "title": "Generative AI Application Evaluation and Governance",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=Generative%20AI%20Application%20Evaluation%20and%20Governance"
      },
      {
        "id": "r5-c3",
        "title": "Generative AI Application Deployment and Monitoring",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=Generative%20AI%20Application%20Deployment%20and%20Monitoring"
      }
    ]
  },
  {
    "name": "Apache Spark Developer",
    "description": "Desenvolvimento com Apache Spark™: da introdução à construção de aplicações, processamento de streaming e otimização de cargas no Databricks.",
    "certificationId": "spark_developer_associate",
    "certificationName": "Databricks Certified Associate Developer for Apache Spark",
    "classes": [
      {
        "id": "r6-c0",
        "title": "Introduction to Apache Spark™",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=Introduction%20to%20Apache%20Spark"
      },
      {
        "id": "r6-c1",
        "title": "Developing Applications with Apache Spark™",
        "level": "associate",
        "duration": "3h",
        "url": "https://www.databricks.com/training/catalog?q=Developing%20Applications%20with%20Apache%20Spark"
      },
      {
        "id": "r6-c2",
        "title": "Stream Processing and Analysis with Apache Spark™",
        "level": "associate",
        "duration": "3h",
        "url": "https://www.databricks.com/training/catalog?q=Stream%20Processing%20and%20Analysis%20with%20Apache%20Spark"
      },
      {
        "id": "r6-c3",
        "title": "Monitoring and Optimizing Apache Spark™ Workloads on Databricks",
        "level": "associate",
        "duration": "3h",
        "url": "https://www.databricks.com/training/catalog?q=Monitoring%20and%20Optimizing%20Apache%20Spark%20Workloads"
      }
    ]
  },
  {
    "name": "Data Warehousing Practitioner",
    "description": "Práticas de data warehousing no Lakehouse: programação SQL com lógica procedural e estratégias de modelagem de dados.",
    "certificationId": "data_warehousing_practitioner",
    "certificationName": "Databricks Certified Data Analyst Associate",
    "classes": [
      {
        "id": "r7-c0",
        "title": "SQL Programming and Procedural Logic in Databricks",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog?q=SQL%20Programming%20and%20Procedural%20Logic"
      },
      {
        "id": "r7-c1",
        "title": "Data Modelling Strategies",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/data-modeling-strategies-portuguese-br-4266"
      }
    ]
  }
];
