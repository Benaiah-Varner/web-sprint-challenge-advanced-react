// write your custom hook here to control your checkout form
import React, { useState } from 'react'

const useForm = (initialValue) => {

    const [successMessage, setSuccessMessage] = useState(false);
    const [value, setValue] = useState({});

    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault()
        setSuccessMessage(true)
        
    }
return ([value, successMessage, handleChanges, onSubmit])

}

export default useForm;