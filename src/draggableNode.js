// draggableNode.js
import styles from './draggableNode.module.css';

const getNodeIcon = (type) => {
  switch(type) {
    case 'customInput':
      return '📥';
    case 'customOutput':
      return '📤';
    case 'llm':
      return '🤖';
    case 'text':
      return '📝';
    case 'timer':
      return '⏲️';
    case 'fileUploader':
      return '📁';
    case 'googleSearch':
      return '🔍';
    case 'note':
      return '🗒️';
    case 'notifications':
      return '🔔';
    default:
      return '🔷';
  }
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${styles.draggableNode} ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <span className={styles.icon}>{getNodeIcon(type)}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
