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
        console.log("hook effect started (done)", done);
        if (counter.current > 20) { // prevent max depth reach 
            return;
        }

        if(!done) {
            console.log("dispatch setCounter");
            counter.current++;
            dispatch(setCounter(counter.current)); // this thing runs recursive render

            console.log("going to set done");
            setDone((cur) => {
                console.log("set done");
                return true;
            })
        }
    }, [dispatch, done, queryMutation]) // queryMutation changes on every render
}