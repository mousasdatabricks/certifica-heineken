// Trilhas de certificação Databricks — réplica do programa do app Certifica (santander-certifica.vercel.app)
// Cursos com links reais da Databricks Academy (catálogo PT-BR).
// App Certifica real (tenant Heineken) — plataforma interativa de certificação Databricks
export const CERTIFICA_APP_URL = 'https://certifica-7474647325287912.aws.databricksapps.com/t/heineken'

export type Level = 'fundamentos' | 'associate' | 'professional'
export interface TrailClass { id: string; title: string; level: Level; duration: string; url: string }
export interface Trail { name: string; description: string; certificationId: string; certificationName: string; classes: TrailClass[] }

export const trails: Trail[] = [
  {
    "name": "Engenharia de Dados",
    "description": "Pipelines, ingestão e processamento em larga escala (Lakeflow, Spark, Delta Lake), governança, performance e CI/CD.",
    "certificationId": "data_engineer_associate",
    "certificationName": "Databricks Certified Data Engineer Associate",
    "classes": [
      {
        "id": "r0-c0",
        "title": "Databricks Fundamentals",
        "level": "fundamentos",
        "duration": "3h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-fundamentals-portuguese-br-2299"
      },
      {
        "id": "r0-c1",
        "title": "Get Started with Databricks for Data Engineering",
        "level": "fundamentos",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/get-started-with-databricks-for-data-engineering-portuguese-br-3472"
      },
      {
        "id": "r0-c2",
        "title": "Databricks Fundamentals Accreditation",
        "level": "fundamentos",
        "duration": "3h",
        "url": "https://customer-academy.databricks.com/learn/courses/2308/databricks-fundamentals-accreditation"
      },
      {
        "id": "r0-c3",
        "title": "Data Ingestion with Delta Lake",
        "level": "associate",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/data-ingestion-with-delta-lake-portuguese-br-3301"
      },
      {
        "id": "r0-c4",
        "title": "Deploy Workloads with Lakeflow Jobs",
        "level": "associate",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/deploy-workloads-with-lakeflow-jobs-portuguese-br-3278"
      },
      {
        "id": "r0-c5",
        "title": "Build Data Pipelines with Lakeflow Declarative Pipelines",
        "level": "associate",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/build-data-pipelines-with-lakeflow-declarative-pipelines-portuguese-br-3289"
      },
      {
        "id": "r0-c6",
        "title": "DevOps Essentials for Data Engineering",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/devops-essentials-for-data-engineering-portuguese-br-3923"
      },
      {
        "id": "r0-c7",
        "title": "Databricks Streaming and Lakeflow Spark Declarative Pipelines",
        "level": "professional",
        "duration": "4h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-streaming-and-lakeflow-spark-declarative-pipelines-portuguese-br-3083"
      },
      {
        "id": "r0-c8",
        "title": "Databricks Data Privacy",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-data-privacy-portuguese-br-4012"
      },
      {
        "id": "r0-c9",
        "title": "Databricks Performance Optimization",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-performance-optimization-portuguese-br-3080"
      }
    ]
  },
  {
    "name": "Ciência de Dados & IA",
    "description": "Machine Learning, MLOps, IA Generativa, Agent Bricks, Mosaic AI e agentes inteligentes no Databricks.",
    "certificationId": "machine_learning_associate",
    "certificationName": "Databricks Certified Machine Learning Associate",
    "classes": [
      {
        "id": "r1-c0",
        "title": "Databricks Fundamentals",
        "level": "fundamentos",
        "duration": "3h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-fundamentals-portuguese-br-2299"
      },
      {
        "id": "r1-c1",
        "title": "Get Started with Databricks for Machine Learning",
        "level": "fundamentos",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/get-started-with-databricks-for-machine-learning-portuguese-br-3578"
      },
      {
        "id": "r1-c2",
        "title": "Databricks Fundamentals Accreditation",
        "level": "fundamentos",
        "duration": "3h",
        "url": "https://customer-academy.databricks.com/learn/courses/2308/databricks-fundamentals-accreditation"
      },
      {
        "id": "r1-c3",
        "title": "AI Agent Fundamentals",
        "level": "fundamentos",
        "duration": "1.5h",
        "url": "https://www.databricks.com/br/training/catalog/ai-agent-fundamentals-portuguese-br-4742"
      },
      {
        "id": "r1-c4",
        "title": "Generative AI Fundamentals",
        "level": "fundamentos",
        "duration": "1.5h",
        "url": "https://www.databricks.com/br/training/catalog/generative-ai-fundamentals-portuguese-br-2252"
      },
      {
        "id": "r1-c5",
        "title": "Data Modeling Strategies",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/data-modeling-strategies-portuguese-br-4266"
      },
      {
        "id": "r1-c6",
        "title": "Data Preparation for Machine Learning",
        "level": "associate",
        "duration": "2h",
        "url": "https://customer-academy.databricks.com/learn/courses/2343/data-preparation-for-machine-learning"
      },
      {
        "id": "r1-c7",
        "title": "Machine Learning Model Development",
        "level": "associate",
        "duration": "2h",
        "url": "https://customer-academy.databricks.com/learn/courses/2390/machine-learning-model-development"
      },
      {
        "id": "r1-c8",
        "title": "Advanced Machine Learning Operations",
        "level": "professional",
        "duration": "2h",
        "url": "https://customer-academy.databricks.com/learn/courses/3508/advanced-machine-learning-operations"
      }
    ]
  },
  {
    "name": "Análise de Dados",
    "description": "SQL Analytics, AI/BI Dashboards, Genie, Data Warehousing, self-service e visualização no Lakehouse.",
    "certificationId": "data_analyst_associate",
    "certificationName": "Databricks Certified Data Analyst Associate",
    "classes": [
      {
        "id": "r2-c0",
        "title": "Databricks Fundamentals",
        "level": "fundamentos",
        "duration": "3h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-fundamentals-portuguese-br-2299"
      },
      {
        "id": "r2-c1",
        "title": "Get Started with SQL Analytics and BI on Databricks",
        "level": "fundamentos",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/get-started-with-sql-analytics-and-bi-on-databricks-portuguese-br-3425"
      },
      {
        "id": "r2-c2",
        "title": "Databricks Fundamentals Accreditation",
        "level": "fundamentos",
        "duration": "3h",
        "url": "https://customer-academy.databricks.com/learn/courses/2308/databricks-fundamentals-accreditation"
      },
      {
        "id": "r2-c3",
        "title": "Get Started with Databricks for Data Warehousing",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/training/catalog/get-started-with-databricks-for-data-warehousing-3603"
      },
      {
        "id": "r2-c4",
        "title": "Databricks AI/BI for Self-Service Analytics",
        "level": "associate",
        "duration": "3h",
        "url": "https://www.databricks.com/br/training/catalog/databricks-aibi-for-self-service-analytics-portuguese-br-3694"
      },
      {
        "id": "r2-c5",
        "title": "AI/BI for Data Analysts",
        "level": "associate",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/aibi-for-data-analysts-portuguese-br-4195"
      },
      {
        "id": "r2-c6",
        "title": "Data Warehousing with Databricks",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/data-warehousing-with-databricks-portuguese-br-4230"
      },
      {
        "id": "r2-c7",
        "title": "SQL Analytics on Databricks",
        "level": "professional",
        "duration": "2h",
        "url": "https://www.databricks.com/br/training/catalog/sql-analytics-on-databricks-portuguese-br-4207"
      }
    ]
  }
];
