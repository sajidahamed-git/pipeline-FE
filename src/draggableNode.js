// draggableNode.js
import styles from './draggableNode.module.css';
const icons = {
  customInput: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="8" width="14" height="4" rx="2" fill="#4F8AFA"/>
      <path d="M7 8V6a3 3 0 1 1 6 0v2" stroke="#4F8AFA" strokeWidth="2"/>
    </svg>
  ),
  customOutput: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="8" width="14" height="4" rx="2" fill="#F9A825"/>
      <path d="M13 12v2a3 3 0 1 1-6 0v-2" stroke="#F9A825" strokeWidth="2"/>
    </svg>
  ),
  llm: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" fill="#7E57C2"/>
      <text x="10" y="14" textAnchor="middle" fontSize="10" fill="#fff">AI</text>
    </svg>
  ),
  text: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="5" width="12" height="10" rx="2" fill="#43A047"/>
      <line x1="6" y1="8" x2="14" y2="8" stroke="#fff" strokeWidth="1.5"/>
      <line x1="6" y1="11" x2="14" y2="11" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  timer: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" fill="#E57373"/>
      <rect x="9" y="5" width="2" height="6" fill="#fff"/>
      <rect x="10" y="10" width="5" height="2" transform="rotate(45 10 10)" fill="#fff"/>
    </svg>
  ),
  fileUploader: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="6" width="12" height="8" rx="2" fill="#1976D2"/>
      <path d="M10 13V7M10 7l-2 2M10 7l2 2" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  googleSearch: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke="#4285F4" strokeWidth="2"/>
      <line x1="14" y1="14" x2="18" y2="18" stroke="#4285F4" strokeWidth="2"/>
    </svg>
  ),
  note: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="4" width="12" height="12" rx="2" fill="#FFD600"/>
      <line x1="6" y1="8" x2="14" y2="8" stroke="#fff" strokeWidth="1.5"/>
      <line x1="6" y1="11" x2="14" y2="11" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  notifications: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 18a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2z" fill="#FF7043"/>
      <path d="M16 14V9a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" fill="#FF7043"/>
    </svg>
  ),
  default: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="4" width="12" height="12" rx="6" fill="#90A4AE"/>
    </svg>
  ),
};
const getNodeIcon = (type) => icons[type] || icons.default;
// const getNodeIcon = (type) => {
//   switch(type) {
//     case 'customInput':
//       return '📥';
//     case 'customOutput':
//       return '📤';
//     case 'llm':
//       return '🤖';
//     case 'text':
//       return '📝';
//     case 'timer':
//       return '⏲️';
//     case 'fileUploader':
//       return '📁';
//     case 'googleSearch':
//       return '🔍';
//     case 'note':
//       return '🗒️';
//     case 'notifications':
//       return '🔔';
//     default:
//       return '🔷';
//   }
// };

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
