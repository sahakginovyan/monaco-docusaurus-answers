import React, {useCallback, useRef, useState} from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";
import '../App.css';

const FormattedEditor = (
    {
        content,
        filename = '',
        height = '300px',
        initialCode = '',
        answer = '',
        mode = 'dark',
        language = '',
        handleFinish = () => {},
        options = {
            renderSideBySide: false,
            minimap: {
                enabled: false
            }
        }
    }
) => {
    const editorContentRef = useRef(initialCode)

    const [isAnswered, setIsAnswered] = useState(false)
    const [hint, setHint] = useState('')
    const [wrongAnswers, setWrongAnswers] = useState('')
    const [isShowAnswer, setIsShowAnswer] = useState(false)

    const handleCheckAnswer = useCallback(() => {
        const splitAnswers = answer.split('\n')
        const splitCurrentContent = editorContentRef.current.split('\n')

        const hints = splitCurrentContent.map((row, rowIndex) => row === splitAnswers[rowIndex] ? '' : splitAnswers[rowIndex]);
        const wrongAnswers = splitAnswers.map((row, rowIndex) => row === splitCurrentContent[rowIndex] ? '' : splitCurrentContent[rowIndex])

        setHint(hints.join('\n'));
        setWrongAnswers(wrongAnswers.join('\n'));
        if (answer === editorContentRef.current) {
            handleFinish(content)
        } else {
            setIsAnswered(true);

        }
    }, [])

    const handleWriteAnswer = useCallback((content) => {
        editorContentRef.current = content
    }, [])

    const handleShowAnswer = useCallback(() => {
        setIsShowAnswer(true);
    }, [])

    const handleHideAnswer = () => {
        setIsShowAnswer(false)
    }

    return (
        <div className={`h-full flex ${mode}`}>
            <div style={{ height }} className="content-preview h-full">
                <div
                    className={`w-full h-full overflow-auto `}
                >
                    <h2>{filename}</h2>

                    {content}
                </div>
            </div>
            <div className="content-editor relative h-full" style={{ height }}>
                <>
                    <div style={{ height: 'calc(60% - 45px)' }}>
                        <MonacoEditor
                            width="100%"
                            height={'100%'}
                            language={language}
                            theme={`vs-${mode}`}
                            value={initialCode}
                            options={options}
                            onChange={handleWriteAnswer}
                        />
                    </div>
                    <div style={{ height: 'calc(40% - 25px)' }} className="hint-editor">
                        <div>
                            Hint
                        </div>
                        { isShowAnswer ? (
                            <MonacoEditor
                                width="100%"
                                height={'100%'}
                                language={language}
                                theme={`vs-${mode}`}
                                value={answer}
                                options={{
                                    ...options,
                                    readOnly: true
                                }}
                                onChange={handleWriteAnswer}
                            />
                        ) : (
                            <MonacoDiffEditor
                                key={Math.random()}
                                width="100%"
                                height={'100%'}
                                language={language}
                                theme={`vs-${mode}`}
                                value={hint}
                                original={wrongAnswers}
                                options={{
                                    ...options,
                                    readOnly: true
                                }}
                            />
                        ) }
                    </div>

                    <div className={`actions`}>
                        {isAnswered ? (
                            <div className="flex gap-4">
                                { !isShowAnswer ? (
                                    <button onClick={handleShowAnswer} className="btn check-answer">
                                        show me the answer &#10003;
                                    </button>
                                ) : (
                                    <button onClick={handleHideAnswer} className="btn check-answer">
                                        hide the answer &#10003;
                                    </button>
                                )}
                                <button onClick={handleCheckAnswer} className="btn try-again">
                                    Try again &#x274C;
                                </button>
                            </div>
                        ) : (
                            <button onClick={handleCheckAnswer} className="btn check-answer">
                                check answer &#10003;
                            </button>
                        )}
                    </div>
                </>
            </div>

        </div>
    )
}

export default FormattedEditor