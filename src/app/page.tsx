"use client";

// import VerbFormValidator from "@/components/VerbFormValidator";
import { useGetVerbsQuery } from "@/features/api/apiVerbs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateType} from '../features/verbs/verbsSlice'

export default function Home() {
    const { data : verbsData, error, isLoading } = useGetVerbsQuery();

    const verbsStore : InitialStateType  = useSelector((store : any) => store.verbs)
    const dispatch = useDispatch();

    useEffect( () => {
        if (!verbsData) return;

        dispatch({ type: 'verbs/setVerbs', payload: verbsData})
    }, [ verbsData])


    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* <VerbFormValidator verbConfig={{} as any}/> */}
            {/* { JSON.stringify( verbsData )} */}
        </div>
    );
}
