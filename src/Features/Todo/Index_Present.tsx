import useFormValidation from 'Features/_Share/Hooks/useFormValidation'

interface TodoViewModel {
    NewTodoText: string | number | readonly string[] | undefined;
    todos: any[],

}
interface TodoErrorViewModel {

}

function valid(model: TodoViewModel): any {
    return {};
}
const str = [
    { id: 1, name: 'name1' },
    { id: 2, name: 'name2' },
    { id: 3, name: 'name3' },
]
    ;
const INIT: TodoViewModel = {
    todos: str,
    NewTodoText: ""
}
export default function Index_Present() {
    var values = useFormValidation<TodoViewModel, TodoErrorViewModel>(INIT, valid)

    function handleClick() {
        console.log(values);
        console.log('handle click');
    }

    return {
        ...values,
        handleClick
    }
}
