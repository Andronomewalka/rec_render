import { useEffect, useRef, useState } from "react";
import { setCounter } from "./store/counter/slice";
import { useAppDispatch } from "./store/hooks";
import { useMyQuery } from "./useMyQuery";

export const useCounter = () => {
    const dispatch = useAppDispatch();
    const [done, setDone] = useState(false);
    const queryMutation = useMyQuery();
    const counter = useRef(0);

    console.log("useCounter (done)", done);

    useEffect(() => {
        console.log("hook effeect started (done)", done);

        if(!done) {
            console.log("disaptch setCounter");
            counter.current++;
            dispatch(setCounter(counter.current)); // this thing runs recursive render

            console.log("going to set done");
            setDone((cur) => {
                console.log("set done");
                return true;
            })
        }
    }, [dispatch, done, queryMutation])
}