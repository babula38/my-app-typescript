import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";


export function useTodoPage_Present() {

    let history = useHistory();
    let { id } = useParams();

    let mess = `babula ${id}`;

    function handleClick() {
        history.push("/home");
    }
    return {
        Message: mess,
        handleClick
    }
}


