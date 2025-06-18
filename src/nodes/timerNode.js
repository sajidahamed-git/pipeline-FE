import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import styles from './nodes.module.css';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);
  const [unit, setUnit] = useState(data?.unit || 'ms');

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`
    }
  ];

  return (
    <BaseNode
      id={id}
      title="Timer"
      handles={handles}
    >
      <label className={styles.label}>
        Delay:
        <input 
          type="number"
          min="0"
          value={delay}
          onChange={handleDelayChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Unit:
        <select 
          value={unit}
          onChange={handleUnitChange}
          className={styles.select}
        >
          <option value="ms">Milliseconds</option>
          <option value="s">Seconds</option>
          <option value="m">Minutes</option>
        </select>
      </label>
    </BaseNode>
  );
};