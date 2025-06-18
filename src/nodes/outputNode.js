// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import styles from './nodes.module.css';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={handles}
    >
      <label className={styles.label}>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Type:
        <select value={outputType} 
        onChange={handleTypeChange}
          className={styles.select}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
