// draggableNode.js
import styles from "./draggableNode.module.css";
const icons = {
  customInput: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2M11 16l4-4-4-4v3H1v2h10z"
        fill="#000"
      />
    </svg>
  ),
  customOutput: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"
        fill="#000"
      />
      <path
        d="M19 19H5V5h14v2h2V5c0-1.1-.89-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.11 0 2-.9 2-2v-2h-2z"
        fill="#000"
      />
    </svg>
  ),
  llm: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" fill="#7E57C2" />
      <text x="10" y="14" textAnchor="middle" fontSize="10" fill="#fff">
        AI
      </text>
    </svg>
  ),
  text: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="5" width="12" height="10" rx="2" fill="#43A047" />
      <line x1="6" y1="8" x2="14" y2="8" stroke="#fff" strokeWidth="1.5" />
      <line x1="6" y1="11" x2="14" y2="11" stroke="#fff" strokeWidth="1.5" />
    </svg>
  ),
  timer: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" fill="#E57373" />
      <rect x="9" y="5" width="2" height="6" fill="#fff" />
      <rect
        x="10"
        y="10"
        width="5"
        height="2"
        transform="rotate(45 10 10)"
        fill="#fff"
      />
    </svg>
  ),
  fileUploader: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="6" width="12" height="8" rx="2" fill="#1976D2" />
      <path d="M10 13V7M10 7l-2 2M10 7l2 2" stroke="#fff" strokeWidth="1.5" />
    </svg>
  ),
  googleSearch: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke="#4285F4" strokeWidth="2" />
      <line x1="14" y1="14" x2="18" y2="18" stroke="#4285F4" strokeWidth="2" />
    </svg>
  ),
  note: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="4" width="12" height="12" rx="2" fill="#FFD600" />
      <line x1="6" y1="8" x2="14" y2="8" stroke="#fff" strokeWidth="1.5" />
      <line x1="6" y1="11" x2="14" y2="11" stroke="#fff" strokeWidth="1.5" />
    </svg>
  ),
  notifications: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 18a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2z" fill="#FF7043" />
      <path d="M16 14V9a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" fill="#FF7043" />
    </svg>
  ),
  default: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="4" width="12" height="12" rx="6" fill="#90A4AE" />
    </svg>
  ),
};
const getNodeIcon = (type) => icons[type] || icons.default;

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
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
