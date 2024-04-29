import { useState } from "react";
import styles from "../styles/ExpandableText.module.css";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 200 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <h5>{children}</h5>;

  const summary = isExpanded ? children : children.substring(0, maxChars);
  return (
    <div className={`my-3 ${styles.textSummary}`}>
      <h5>
        {isExpanded ? summary : `${summary}...`}{" "}
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "<<< Less" : "More >>>"}
        </button>
      </h5>
    </div>
  );
};

export default ExpandableText;
