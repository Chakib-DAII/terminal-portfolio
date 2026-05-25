import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>
        My academic background, certifications, and international learning
        experience.
      </EduIntro>

      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Software Engineering Degree",
    desc: "Higher Institute of Applied Sciences and Technology of Sousse (ISSAT Sousse), Tunisia | 2016 – 2020 | Graduated with honors",
  },
  {
    title: "MPI Scientific Preparatory Studies",
    desc: "Higher Institute of Applied Sciences and Technology of Sousse (ISSAT Sousse), Tunisia | 2014 – 2016",
  },
  {
    title: "Computer Support Certificate",
    desc: "South Puget Sound Community College, Olympia, Washington, USA | 2018 – 2019",
  },
  {
    title: "Oracle Certified Professional: Java SE 17 Developer",
    desc: "Oracle Certification | Professional Java Certification",
  },
  {
    title: "Spring Certified Professional",
    desc: "Spring Framework Professional Certification",
  },
  {
    title: "BNB Chain Developer Specialization",
    desc: "Binance Academy | Blockchain & Smart Contract Development",
  },
  {
    title: "DeFi Deep Dive",
    desc: "Binance Academy | Decentralized Finance & Blockchain Systems",
  },
];

export default Education;
