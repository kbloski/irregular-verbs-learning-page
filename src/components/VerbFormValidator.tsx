'use client'

import { useForm } from "react-hook-form";
import { FormField, FormItem, FormLabel, Form, FormControl } from "./ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { VerbConfigurationType } from "@/types/VerbType";

const formSchema = z.object({
    trans1: z.string(),
    trans2: z.string(),
    trans3: z.string()
});

interface VerbInputValidatorProps {
    verbConfig: VerbConfigurationType;
}


function VerbInputValidator({verbConfig }: VerbInputValidatorProps){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            trans1: '',
            trans2: '',
            trans3: '',
        }
    });

    function handleSubmit(data : any){

    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit( handleSubmit)}>
                <FormField 
                    control={form.control}
                    name="trans1"
                    render={( field => (
                        <FormItem>
                            <FormLabel htmlFor='trans1'>
                                { verbConfig.verb.translation}
                                <FormControl>
                                    <input {...field.field}></input>
                                </FormControl>
                            </FormLabel>
                        </FormItem>
                    ))}
                >

                </FormField>
            </form>
        </Form>
    )

    return null;
}

export default VerbInputValidator;