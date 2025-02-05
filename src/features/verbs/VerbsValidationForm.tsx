"use client";

import { useForm } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormLabel,
    Form,
    FormControl,
    FormMessage,
} from "../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { VerbConfigurationType } from "@/features/verbs/VerbType";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";

interface VerbFormValidatorProps {
    verbConfig: VerbConfigurationType;
}

function VerbFormValidator({ verbConfig }: VerbFormValidatorProps) {
    const dispatch = useDispatch();

    const formSchema = z.object({
        simpleTense: z
            .string()
            .refine(
                (val) =>
                    val.toLowerCase() === verbConfig.verb.tense.toLowerCase(),
                "Incorrect"
            ),
        pastTense: z
            .string()
            .refine(
                (val) =>
                    val.toLowerCase() === verbConfig.past.tense.toLowerCase(),
                "Incorrect"
            ),
        participleTense: z
            .string()
            .refine(
                (val) =>
                    val.toLowerCase() ===
                    verbConfig.pastParticiple.tense.toLowerCase(),
                "Incorrect"
            ),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            simpleTense: "",
            pastTense: "",
            participleTense: "",
        },
    });

    function handleSubmit(data: any) {
        dispatch({ type: "verbs/incrementCurrentVerbId"});

        form.setValue('simpleTense', '')
        form.setValue('pastTense', '')
        form.setValue('participleTense', '')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="simpleTense"
                    render={(field) => (
                        <FormItem>
                            <FormLabel htmlFor="simpleTense">
                                (Present Simple){" "}
                                <strong>{verbConfig.verb.translation}</strong>
                                <FormMessage />
                                <FormControl>
                                    <Input {...field.field}></Input>
                                </FormControl>
                            </FormLabel>
                        </FormItem>
                    )}
                ></FormField>
                <FormField
                    control={form.control}
                    name="pastTense"
                    render={(field) => (
                        <FormItem>
                            <FormLabel htmlFor="pastTense">
                                (Past Simple){" "}
                                <strong>{verbConfig.past.translation}</strong>
                                <FormMessage />
                                <FormControl>
                                    <Input {...field.field}></Input>
                                </FormControl>
                            </FormLabel>
                        </FormItem>
                    )}
                ></FormField>
                <FormField
                    control={form.control}
                    name="participleTense"
                    render={(field) => (
                        <FormItem>
                            <FormLabel htmlFor="participleTense">
                                (Past Participle){" "}
                                <strong>
                                    {verbConfig.pastParticiple.translation}
                                </strong>
                                <FormMessage />
                                <FormControl>
                                    <Input {...field.field}></Input>
                                </FormControl>
                            </FormLabel>
                        </FormItem>
                    )}
                ></FormField>
                <Button type="submit">Wyślij</Button>
            </form>
        </Form>
    );

    return null;
}

export default VerbFormValidator;
