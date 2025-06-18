import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import styles from './nodes.module.css';

export const FileUploaderNode = ({ id, data }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target.result);
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview('');
      }
    }
  };

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`
    }
  ];

  return (
    <BaseNode
      id={id}
      title="File Uploader"
      handles={handles}
    >
      <div className={styles.fileUploader}>
        <label className={styles.label}>
          <input
            type="file"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          {file ? (
            <div className={styles.fileInfo}>
              <p>{file.name}</p>
              <p className={styles.fileSize}>{(file.size / 1024).toFixed(1)} KB</p>
            </div>
          ) : (
            <div className={styles.dropzone}>
              Drop file here or click to upload
            </div>
          )}
        </label>
        {preview && (
          <div className={styles.preview}>
            <img src={preview} alt="Preview" />
          </div>
        )}
      </div>
    </BaseNode>
  );
};
