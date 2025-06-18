// textNode.js

import { useState, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode/baseNode";
import { useAutoResize } from "./hooks.js/useAutoResize";
import styles from "./nodes.module.css";
import extractVariableName from "../utils/extractVariableName.js";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const [variableHandles, setVariableHandles] = useState([]);
  const textareaRef = useAutoResize(currText);

  useEffect(() => {
    const variableNames = extractVariableName(currText);
    console.log(variableNames);
    

    // Map variables to handles and limit to 2 handles or two variables
    const newHandles = variableNames.slice(0,2).map((variable,index) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-${variable}`,
      style:{
        top:index === 0 ? `${100 / 3}%` : `${200 / 3}%`,
      }
    }));

    setVariableHandles(newHandles);
  }, [currText, id]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

  };

    const handles = [
      {
        type: "source",
        position: Position.Right,
        id: `${id}-output`,
      },
      ...variableHandles,
  ];

  return (
    <BaseNode id={id} title="Text" handles={handles}>
      <label className={styles.label}>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className={styles.autoResizeInput}
          rows={1}
        />
      </label>
    </BaseNode>
  );
};
