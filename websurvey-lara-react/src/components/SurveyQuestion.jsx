import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import { QuestionEditor } from "./QuestionEditor";

export const SurveyQuestion = ({ survey, onSurveyUpdate }) => {
    
    const [model, setModel] = useState({ ...survey });

    const addQuestion = () => {
        setModel({
            ...model,
            questions: [
                ...model.questions,
                {
                    id: uuidv4(),
                    type: "",
                    question: "",
                    description: "",
                    data: {},
                },
            ],
        });
    };

    const questionChange = (question) => {
        if(!question) return;

        
    };

    const deleteQuestion = () => {

    }

    return (
        <>
            <div>
                <h3></h3>
                <button
                    onClick={addQuestion}
                    type="button"
                    className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                >
                    <PlusIcon className="w-4 mr-2" />
                    Add Question
                </button>
            </div>
            {model.question.length ? (
                model.question.map((q, index) => (
                    <QuestionEditor
                        questionChange={questionChange}
                        addQuestion={addQuestion}
                        deleteQuestion={deleteQuestion}
                        key={index}
                        index={index}
                        question={q}
                    />
                ))
            ) : (
                <div className="text-gray-400 text-center py-4">
                    You don&apos;t have any question created.
                </div>
            )}
        </>
    );
};
