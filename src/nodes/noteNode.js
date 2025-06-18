import { useState } from 'react';
// import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import { useAutoResize } from './hooks.js/useAutoResize';
import styles from './nodes.module.css';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '')
  const textareaRef = useAutoResize(note);
  

  const handleNoteChange = (e) => setNote(e.target.value);

  const handles = [
    //no handles for note node
  ];

  return (
    <BaseNode id={id} title="Note" handles={handles}>
      <label className={styles.label}>
        Note:
        <textarea
            ref={textareaRef}
          value={note}
          onChange={handleNoteChange}
          className={styles.autoResizeInput}
          placeholder="Write your notes here..."
        />
      </label>
    </BaseNode>
  );
};