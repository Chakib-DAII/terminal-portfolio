import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    // window.open("https://chakib-daii.daiitech.org/", "_blank");
    window.open("https://www.linkedin.com/in/chakib-daii-baab0410b/", "_blank");
  }

  return <span></span>;
};

export default Gui;
