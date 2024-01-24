import FormattedEditor from "./components/FormattedEditor";
function App() {
  return (
    <div>
      <FormattedEditor
          mode="dark"
          height="100vh"
          language="javascript"
          initialCode={
              `const editorContentRef = useRef(initial)

    const [isShowDiff, setIsShowDiff] = useState(false)
    const [isAnswered, setIsAnswered] = useState(false)

    const handleCheckAnswer = useCallback(() => {
        setIsShowDiff(true);
        setIsAnswered(answer !== editorContentRef.current);
    }, [])`
          }
          answer={
              `const editorContentRef = useRef(initialCode)

    const [isShowDiff, setIsShowDiff] = useState(false)
    const [isAnswered, setIsAnswered] = useState(false)

    const handleCheckAnswer = useCallback(() => {
        setIsShowDiff(true);
        setIsAnswered(answer !== editorContentRef);
    }, [])`
          }
          filename="Preview document"
          content={`
\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`

\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`

\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`


\`\`\`js
function () {
  console.log('hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello')
}
\`\`\`
\`\`\`js
function () {
  console.log('hello ')
}
\`\`\`
`} />
    </div>
  );
}

export default App;
