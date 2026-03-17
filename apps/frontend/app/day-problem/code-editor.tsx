"use client"
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const defaultCode = `import express from "express";
const app = express();
app.use(express.json());

// TODO: GET /api/health
// TODO: POST /api/auth/register
// TODO: POST /api/auth/login
// TODO: POST /api/launches
// TODO: GET /api/launches
// TODO: GET /api/launches/:id
// TODO: PUT /api/launches/:id

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
`;
export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);
  const [activeFile, setActiveFile] = useState("src/index.ts");

  const files = ["src/index.ts", "prisma/schema.prisma", "package.json", "tsconfig.json"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: "#1e1e1e",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Tab Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#252526",
          borderBottom: "1px solid #3c3c3c",
          overflowX: "auto",
          flexShrink: 0,
        }}
      >
        {files.map((file) => (
          <button
            key={file}
            onClick={() => setActiveFile(file)}
            style={{
              padding: "8px 16px",
              fontSize: "13px",
              color: activeFile === file ? "#ffffff" : "#969696",
              backgroundColor: activeFile === file ? "#1e1e1e" : "transparent",
              border: "none",
              borderTop: activeFile === file ? "1px solid #007acc" : "1px solid transparent",
              borderRight: "1px solid #3c3c3c",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {/* File icon */}
            <span style={{ fontSize: "11px", opacity: 0.7 }}>
              {file.endsWith(".ts") || file.endsWith(".tsx") ? "TS" : 
               file.endsWith(".prisma") ? "P" :
               file.endsWith(".json") ? "{}" : "📄"}
            </span>
            {file}
          </button>
        ))}
      </div>

      {/* Editor */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Editor
          height="100%"
          language={
            activeFile.endsWith(".ts") || activeFile.endsWith(".tsx")
              ? "typescript"
              : activeFile.endsWith(".json")
              ? "json"
              : activeFile.endsWith(".prisma")
              ? "prisma"
              : "plaintext"
          }
          value={code}
          onChange={(value) => setCode(value ?? "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontLigatures: true,
            lineHeight: 22,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            tabSize: 2,
            automaticLayout: true,
            padding: { top: 16, bottom: 16 },
            lineNumbers: "on",
            glyphMargin: false,
            folding: true,
            scrollbar: {
              verticalScrollbarSize: 6,
              horizontalScrollbarSize: 6,
            },
            renderLineHighlight: "line",
            cursorBlinking: "smooth",
            smoothScrolling: true,
          }}
        />
      </div>

      {/* Status Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#007acc",
          padding: "2px 12px",
          fontSize: "12px",
          color: "#ffffff",
          flexShrink: 0,
        }}
      >
        <span>{activeFile}</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}