import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { QuestionEditor } from "./QuestionEditor";
import { v4 as uuidv4 } from "uuid";

export const SurveyQuestion = ({ questions, onQuestionUpdate }) => {
    const [question, setQuestions] = useState([...questions]);

    const addQuestion = (index) => {
        index = index !== undefined ? index : question.length;

        question.splice(index, 0, {
            id: uuidv4(),
            type: "text",
            question: "",
            description: "",
            data: {},
        });

        setQuestions([...question]);
    };

    const questionChange = (ques) => {
        if (!ques) return;

        const newQuestions = question.map((q) => {
            if (q.id == ques.id) {
                return { ...ques };
            }
            return q;
        });

        setQuestions([...newQuestions]);
    };

    const deleteQuestion = (ques) => {
        const newQuestions = question.filter((q) => q.id !== ques.id);

        setQuestions([...newQuestions]);
    };

    useEffect(() => {
        onQuestionUpdate(question);
    }, [question]);

    return (
        <>
            <pre>{JSON.stringify(question, undefined, 2)}</pre> 
            <div className="flex justify-between">
                <h3>Survey Question</h3>
                <button
                    type="button"
                    onClick={() => addQuestion()}
                    className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                >
                    <PlusIcon className="w-4 mr-2" />
                    Add Question
                </button>
            </div>

            {question.length ? (
                question.map((q, index) => {
                    return (
                        <QuestionEditor
                            questionChange={questionChange}
                            addQuestion={addQuestion}
                            deleteQuestion={deleteQuestion}
                            key={index}
                            index={index}
                            question={q}
                        />
                    );
                })
            ) : (
                <div className="text-gray-400 text-center py-4">
                    You don&apos;t have any question created.
                </div>
            )}
        </>
    );
};
