import { DefaultLayoutComponent } from "../components/DefaultLayoutComponent";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSurveys, error, fetchSurvey, meta, status } from "../redux/features/SurveySlice";
import { SurveyListItem } from "../components/SurveyListItem";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { TButton } from "../components/core/TButton";
import { useEffect } from "react";
import { Pagination } from "../components/core/Pagination";

export const Survey = () => {

    const surveys = useSelector(selectAllSurveys);

    const currentStatus = useSelector(status)

    const metas = useSelector(meta)

    const errors = useSelector(error)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSurvey());
    }, [])

    const handlePageLink = (e, url) => {
        e.preventDefault();
        dispatch(fetchSurvey(url))
    }

    const onDeleteClick = () => {
        console.log("Hola");
    };

    let content;

    if (currentStatus === 'pending') {
        content = <div className="text-3xl my-10 text-green-500 text-center">Loading...</div>

    } else {

        content = <div>
            {errors && <p className="text-2xl text-center my-5 text-red-600">{errors}</p>}

            <DefaultLayoutComponent
                buttons={(
                    <TButton color="green" to="/surveys/create">
                        <PlusCircleIcon className="h-6 w-6 mr-2" />
                        Create new
                    </TButton>)
                }
                title="Survey"
            >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

                    {surveys.map((survey) => {
                        return (
                            <SurveyListItem
                                key={survey.id}
                                survey={survey}
                                onDeleteClick={onDeleteClick}
                            />
                        );
                    })}
                </div>
            </DefaultLayoutComponent>
            <Pagination meta={metas} handlePageLink={handlePageLink} />
        </div>
    }

    return content;
};
