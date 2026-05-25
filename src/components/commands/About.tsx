import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I’m <HighlightSpan>Chakib Daii</HighlightSpan>.
      </p>

      <p>
        I’m a <HighlightAlt>Software Engineer</HighlightAlt> based in Brussels,
        Belgium, focused on backend systems, distributed architectures, workflow
        automation, and developer tooling.
      </p>

      <p>
        I specialize in building{" "}
        <HighlightAlt>scalable enterprise applications</HighlightAlt>
        using Java, Spring Framework, Angular, Kubernetes, and cloud-native
        architectures.
      </p>

      <p>
        My work spans{" "}
        <HighlightAlt>
          microservices systems, BPM engines, and event-driven architectures
        </HighlightAlt>{" "}
        used in banking, finance, and government-scale platforms.
      </p>

      <p>
        I design and build systems around{" "}
        <HighlightAlt>
          system design, automation, and platform engineering
        </HighlightAlt>
        , with a strong focus on clean architecture, maintainability, and
        developer productivity.
      </p>

      <p>
        I’m the creator of <HighlightSpan>Naftah (نفطه)</HighlightSpan> — a
        JVM-based programming language that enables coding in Arabic and
        Tunisian dialects, designed to make programming more accessible and
        culturally inclusive.
      </p>

      <p>
        Beyond application development, I work on{" "}
        <HighlightAlt>
          language engineering, runtime systems, and developer tooling
        </HighlightAlt>
        , including dynamic class generation and runtime Spring bean
        registration.
      </p>

      <p>
        I enjoy building tools that reduce complexity, improve developer
        experience, and bridge the gap between language, education, and software
        engineering.
      </p>
    </AboutWrapper>
  );
};

export default About;
