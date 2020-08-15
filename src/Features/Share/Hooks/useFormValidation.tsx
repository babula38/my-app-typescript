import React, { useState } from 'react'

export default function useFormValidation<T, U>(initial: T, validators: (values: T) => U) {
    var [values, setValues] = useState<T>(initial);
    var [errors, setErrors] = useState({});
    let isSubmitting = false;

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        let result = validators(values);
        setErrors({ ...errors, ...result })
        // console.log(errors);
        // console.log(result);
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        let result = validators(values);
        setErrors({ ...errors, ...result })
        //TODO: Logic to see if the form is valid 
        //and notify the client about the success or failure so client could do according
        // if (errors == {})
        //     isSubmitting = true
    }

    return {
        values,
        errors,
        onChange,
        onBlur,
        onSubmit,
        isSubmitting: isSubmitting,
    }
}

