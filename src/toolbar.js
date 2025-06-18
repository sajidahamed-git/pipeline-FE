// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="mt-5 flex flex-wrap gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="timer" label="Timer" />
        <DraggableNode type="fileUploader" label="File Uploader" />
        <DraggableNode type="googleSearch" label="Google Search" />
        <DraggableNode type="note" label="Note" />
        <DraggableNode type="notifications" label="Notifications" />
      </div>
    </div>
  );
};
