import CustomAuthForm from "../shared/CustomAuthForm";
import { taskSchema } from "../utils/validations";
import { taskFields } from "../utils/formFields";
import moment from "moment";

const TaskCreation = () => {
    const handleSubmit = (values) => {
        const formattedDate = moment(values.dueDate).format("YYYY-MM-DD");
        const formattedValues = {
            ...values,
            dueDate: formattedDate,
        };
        console.log("values", values);
        console.log("formattedValues", formattedValues);
    };
    return (
        <CustomAuthForm
            fields={taskFields}
            schema={taskSchema}
            onSubmit={handleSubmit}
            label="Create Task"
        />
    );
};

export default TaskCreation;
