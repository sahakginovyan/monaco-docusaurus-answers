import React, {useCallback, useRef, useState} from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";
import MarkdownPreview from '@uiw/react-markdown-preview';
import '../App.css';

const FormattedEditor = (
    {
        content = '',
        filename = '',
        height = '300px',
        initialCode = '',
        answer = '',
        mode = 'dark',
        language = '',
        handleFinish = () => {},
        options = {
            selectOnLineNumbers: true,
            renderSideBySide: false,
            ignoreTrimWhitespace: true,
            diffAlgorithm: 'advanced',
            experimental: {
                showEmptyDecorations: false
            },
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
        setWrongAnswers(wrongAnswers.join('\n') || '');
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
        const splitAnswers = answer.split('\n')
        const splitCurrentContent = editorContentRef.current.split('\n')
        const wrongAnswers = splitAnswers.map((row, rowIndex) => row === splitCurrentContent[rowIndex] ? '' : splitCurrentContent[rowIndex])
        setWrongAnswers(wrongAnswers.join('\n'))
    }

    return (
        <div className="h-full flex">
            <div style={{ height }} className="content-preview h-full">
                <MarkdownPreview
                    source={`# ${filename} \n ${content}`}
                    className="w-full h-full overflow-auto"
                    wrapperElement={{
                       "data-color-mode": mode
                    }}
                />
            </div>
            <div className="content-editor relative h-full" style={{ height }}>
                <>
                    <div style={{ height: 'calc(60% - 25px)' }}>
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
                        <div className={mode}>
                            Hint
                        </div>
                        <MonacoDiffEditor
                            width="100%"
                            height={'100%'}
                            language={language}
                            theme={`vs-${mode}`}
                            value={isShowAnswer ? answer : isAnswered ? hint : ''}
                            original={isShowAnswer ? editorContentRef.current : wrongAnswers}
                            options={{
                                ...options,
                                readOnly: true
                            }}
                            onChange={handleWriteAnswer}
                        />
                    </div>


                    <div className={`${mode} actions`}>
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