import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import styles from './nodes.module.css';

export const GoogleSearchNode = ({ id, data }) => {
  const [query, setQuery] = useState(data?.query || '');
  const [resultsCount, setResultsCount] = useState(data?.resultsCount || 10);

  const handleQueryChange = (e) => setQuery(e.target.value);
  const handleCountChange = (e) => setResultsCount(e.target.value);

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode id={id} title="Google Search" handles={handles}>
      <label className={styles.label}>
        Search Query:
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          className={styles.input}
          placeholder="Google Search Query"
        />
      </label>
      <label className={styles.label}>
        Results Count:
        <input
          type="number"
          min="1"
          max="100"
          value={resultsCount}
          onChange={handleCountChange}
          className={styles.input}
        />
      </label>
    </BaseNode>
  );
};
