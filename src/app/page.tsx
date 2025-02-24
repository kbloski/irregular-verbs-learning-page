"use client";

import { useGetVerbsQuery } from "@/features/api/apiVerbs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateType} from '../features/verbs/verbsSlice'
import VerbFormValidator from "@/features/verbs/VerbsValidationForm";

export default function Home() {
    const { data : verbsData, error, isLoading } = useGetVerbsQuery();

    const verbsStore : InitialStateType  = useSelector((store : any) => store.verbs)
    const dispatch = useDispatch();

    useEffect( () => {
        if (!verbsData) return;

        dispatch({ type: 'verbs/setVerbs', payload: verbsData})
    }, [ verbsData])


    return (<>
            <div className="text-center">
                { verbsStore.verbs.length }
            </div>
            <div className="flex items-center justify-center w-100"> 
                {
                    verbsStore.verbs.length && 
                    <VerbFormValidator 
                    key={verbsStore.currentVerbId}
                        verbConfig={verbsStore.verbs[verbsStore.currentVerbId]} 
                        />
                }
            </div>
        </>
    );
}
 