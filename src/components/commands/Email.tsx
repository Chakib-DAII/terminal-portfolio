import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  const email = "chakiibdaii@gmail.com";

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open(`mailto:${email}`, "_self");
  }

  return (
    <Wrapper>
      <p>
        📧 Email: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <p>
        Feel free to reach out for collaborations, open-source projects,
        enterprise software engineering opportunities, or discussions around
        distributed systems, BPM, and developer tooling.
      </p>
    </Wrapper>
  );
};

export default Email;
