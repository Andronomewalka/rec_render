import { useEffect, useRef, useState } from "react";
import { setCounter } from "./store/counter/slice";
import { useAppDispatch } from "./store/hooks";
import { useMyQuery } from "./useMyQuery";

export const useCounter = () => {
    const dispatch = useAppDispatch();
    const [done, setDone] = useState(false);
    const queryMutation = useMyQuery();
    const counter = useRef(0);

    useEffect(() => {
        console.log("hook effeect started");

        if(!done) {
            console.log("disaptch setCounter");
            counter.current++;
            dispatch(setCounter(counter.current));

            console.log("going to set done");
            setDone((cur) => {
                console.log("set done");
                return true;
            })
        }
    }, [dispatch, done, queryMutation])
}