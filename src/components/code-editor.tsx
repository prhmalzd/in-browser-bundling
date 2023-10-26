import { useRef } from 'react'
import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react'
import './code-editor.css';


interface CodeEditorProps {
  initialValue: string,
  onChange(value: string): void
}


const CodeEditor: React.FC<CodeEditorProps> = ({initialValue, onChange}) => {

  const onChangeMonaco: OnChange = (value: any) => {
  onChange(value)
}

  return (
    <div className="editor-wrapper">
    <MonacoEditor
    onChange={onChangeMonaco}
    value={initialValue}
    theme='vs-dark'
    language='javascript'
    height='500px'
    options={{
    wordWrap: 'on',
    minimap: {enabled: false},
    showUnused: false,
    folding: false,
    lineNumbersMinChars: 3,
    fontSize: 16,
    scrollBeyondLastLine: false,
    automaticLayout: true
  }}
/>
</div>)
}

export default CodeEditor;