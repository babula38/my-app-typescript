import { useHistory, useParams } from "react-router-dom";

import useFormValidation from "Features/_Share/Hooks/useFormValidation";

export interface TodoModel {
    cool: string,
    testDrop: string,
    gender: string
}

interface TodoModelError {
    cool: string
    testDrop: string
}

const INIL_OBJ: TodoModel = {
    cool: "",
    testDrop: "drop2",
    gender: "male"
}
const validator = (e: TodoModel) => {
    let error: any = {};
    error.Name = "error name";

    return error;
}
export function useTestPage_Present() {
    var { values, onChange, onBlur } = useFormValidation<TodoModel, TodoModelError>(INIL_OBJ, validator);

    let history = useHistory();
    let { id } = useParams();

    let mess = `babula ${id}`;

    function handleClick() {
        history.push("/home");
    }

    return {
        Message: mess,
        handleClick,
        onChange,
        values,
        onBlur
    }
}


