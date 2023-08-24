import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { selectAllQuestionTypes } from "../redux/features/surveySlice"
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export const QuestionEditor = ({ questionChange, addQuestion, deleteQuestion, index = 0, question }) => {

    const [model, setModel] = useState({ ...question })

    const questions = useSelector(selectAllQuestionTypes);

    useEffect(() => {
        questionChange(model)
    }, [model])

    const upperCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <div>
            <div className='flex justify-between mb-3'>
                <h4>
                    {index + 1}. {model.question}
                </h4>
                <div className='flex items-center'>
                    <button onClick={addQuestion}
                        className='flex items-center text-xs mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700'
                        type='button'>
                        <PlusIcon className='w-4' />
                        Add
                    </button>
                    <button
                        type='button'
                        className='flex items-center text-xs mr-2 rounded-sm border border-transparent text-red-600 font-semibold'
                        onClick={() => deleteQuestion(question)}
                    >
                        <TrashIcon className='w-4' />Delete
                    </button>
                </div>
            </div>
            <div className='flex gap-3 justify-between mb-3'>
                <div className='flex-1'>
                    <label className='block text-sm font-medium text-gray-700'>
                        Question
                    </label>
                    <innput>
                        
                    </innput>
                </div>
            </div>
        </div>
    )
}
