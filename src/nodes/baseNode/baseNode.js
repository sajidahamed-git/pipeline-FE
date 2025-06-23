import { Handle } from 'reactflow';
import styles from './baseNode.module.css';

export const BaseNode = ({ 
  id,
  title,
  handles = [],
  children
}) => {
  return (
    <div className={styles.container}>
      {/* Render handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style = {{
            ...handle.style,
            width: 10, // Increased size of handles
            height: 10, // Increased size of handles
            borderRadius: '50%', // Make handles circular
            background:'#9333ea',
            border:"0"
          }}
        />
      ))}
      
      <div className={styles.header}>
        {title}
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};