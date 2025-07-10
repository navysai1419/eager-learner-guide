import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
 
const codingQuestions = [
  {
    id: 1,
    title: "Check Even or Odd",
    question: "Write a program to read an integer and print even or odd.",
    scenario: "Using if-else statement.",
    expectedOutput: "Input: 4 -> Output: Even\nInput: 7 -> Output: Odd"
  }
];
 
const Compiler = () => {
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
 
  const handleRunCode = () => {
    if (selectedLanguage !== 'javascript') {
      setError('Only JavaScript is supported in this demo. Use a backend service like Judge0 for other languages.');
      setOutput('');
      return;
    }
    setOutput('');
    setError('');
    try {
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: unknown[]) => {
        logs.push(args.join(' '));
      };
 
      // eslint-disable-next-line no-eval
      eval(code);
 
      console.log = originalConsoleLog;
      setOutput(logs.join('\n') || 'No output');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    }
  };
 
  const handleClearCode = () => {
    setCode('// Write your JavaScript code here\nconsole.log("Hello, World!");');
    setOutput('');
    setError('');
  };
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>Online Compiler</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Coding Questions</h3>
            <Card className="p-4">
              <h4 className="font-medium text-primary mb-4">Question Number 1: {codingQuestions[0].title}</h4>
              <div className="space-y-4">
                <Card className="p-3">
                  <h5 className="text-sm font-semibold text-primary">Question</h5>
                  <p className="text-sm text-muted-foreground">{codingQuestions[0].question}</p>
                </Card>
                <Card className="p-3">
                  <h5 className="text-sm font-semibold text-primary">Scenario</h5>
                  <p className="text-sm text-muted-foreground">{codingQuestions[0].scenario}</p>
                </Card>
                <Card className="p-3">
                  <h5 className="text-sm font-semibold text-primary">Expected Output</h5>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{codingQuestions[0].expectedOutput}</p>
                </Card>
              </div>
            </Card>
          </div>
 
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-4 mb-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="course" onClick={handleRunCode}>
                Run Code
              </Button>
              <Button variant="outline" onClick={handleClearCode}>
                Clear
              </Button>
            </div>
            <h3 className="text-lg font-semibold mb-2">Code Editor</h3>
            <AceEditor
              mode="javascript"
              theme="monokai"
              value={code}
              onChange={(newCode) => setCode(newCode)}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
                fontSize: 14,
                showPrintMargin: false,
              }}
              className="w-full h-[300px] border rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Output</h3>
            <Card className="w-full min-h-[150px] p-4 bg-muted">
              {error ? (
                <pre className="text-red-600 whitespace-pre-wrap">{error}</pre>
              ) : (
                <pre className="text-foreground whitespace-pre-wrap">{output || 'Run the code to see output'}</pre>
              )}
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Compiler;