import { DefaultLayoutComponent } from "../components/DefaultLayoutComponent";
import { useSelector } from "react-redux";
import { tmpSurveys } from "../redux/features/SurveySlice";
import { SurveyListItem } from "../components/SurveyListItem";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { TButton } from "../components/core/TButton";

export const Survey = () => {
    const surveys = useSelector(tmpSurveys);

    const onDeleteClick = () => {
        console.log("Hola");
    };

    return (
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
    );
};
