import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        if (url && id === parseInt(arg[1])) {
          window.open(url, "_blank");
        }
      });
    }
  }, [arg, rerender, currentCommand]);

  const checkArg = () =>
    isArgInvalid(
      arg,
      "go",
      projects.map(p => String(p.id))
    ) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code.” <br />
        Here’s a selection of systems, languages, and platforms I’ve built.
      </ProjectsIntro>

      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}

      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Naftah (نفطه) – Programming Language (JVM)",
    desc: "Open-source programming language enabling Arabic & Tunisian dialect coding. Built on JVM with ANTLR, REPL, Java interoperability, and educational focus.",
    url: "https://github.com/Chakib-DAII/Naftah",
  },
  {
    id: 2,
    title: "Naftah Built-in Provider Archetype",
    desc: "Maven archetype to quickly generate Naftah function providers and integrate Java methods into the language runtime.",
    url: "https://github.com/Chakib-DAII/naftah-builtin-provider-archetype",
  },
  {
    id: 3,
    title: "Naftah Documentation Website",
    desc: "Arabic-first documentation site for Naftah covering syntax, data types, control flow, concurrency, and Java integration.",
    url: "https://github.com/Chakib-DAII/Naftah/tree/main/docs-site",
  },
  {
    id: 4,
    title: "D&A Control – MyCustoms",
    desc: "Enterprise-grade microservices system for customs inspection workflows using Spring Framework, Angular, Kubernetes, and GitLab CI/CD.",
    url: "https://finances.belgium.be/fr/douanes_accises/entreprises/applications-da/mycustoms",
  },
  {
    id: 5,
    title: "Cash In Time – Factoring System",
    desc: "Financial microservices platform for factoring operations with Spring Framework, Kubernetes, Docker, and Jenkins.",
    url: "https://www.cash-in-time.com/",
  },
  {
    id: 6,
    title: "Bankerise – Omnichannel Digital Banking",
    desc: "Workflow automation platform for banking systems using Flowable BPM (BPMN, DMN, CMMN) with Angular + Spring Framework.",
    url: "https://www.bankerise.com/",
  },
  {
    id: 7,
    title: "Flowable / Camunda Integration Projects",
    desc: "Extensions and experiments around BPM engines including workflow orchestration, API enhancements, and process automation.",
  },
  {
    id: 8,
    title: "Omigo – WebRTC Chat System",
    desc: "Distributed real-time chat system using WebSockets, WebRTC, RabbitMQ, Prometheus, and microservices architecture.",
  },
  {
    id: 9,
    title: "Selenium Binance Automation Bot",
    desc: "Automation bot using Selenium for Binance workflows with containerized execution and scripting logic.",
  },
  {
    id: 10,
    title: "Java Reflection & Code Generation Toolkit",
    desc: "Runtime class generation engine using reflection, annotations, and dynamic proxy-based execution system.",
  },
  {
    id: 11,
    title: "Engineering & Algorithm Playground",
    desc: "Collection of experiments in Java, Groovy, Clojure, Solidity, Assembly, and system design prototypes.",
  },
];

export default Projects;
