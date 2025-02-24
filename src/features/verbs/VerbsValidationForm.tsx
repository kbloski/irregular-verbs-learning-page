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
                    val.toLowerCase().trim() === verbConfig.present.tense.trim().toLowerCase(),
                "Incorrect"
            ),
        pastTense: z
            .string()
            .refine(
                (val) =>
                    val.toLowerCase().trim() === verbConfig.past.tense.trim().toLowerCase(),
                "Incorrect"
            ),
        participleTense: z
            .string()
            .refine(
                (val) =>
                    val.toLowerCase().trim() ===
                    verbConfig.pastParticiple.tense.trim().toLowerCase(),
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
        dispatch({ type: "verbs/getNextVerb" });

        form.setValue('simpleTense', '')
        form.setValue('pastTense', '')
        form.setValue('participleTense', '')
    }
    
    function handleShowResolutions(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        form.setValue('simpleTense', verbConfig.present.tense)
        form.setValue("pastTense", verbConfig.past.tense);
        form.setValue("participleTense", verbConfig.pastParticiple.tense);
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
                                <strong>
                                    {verbConfig.present.translation}
                                </strong>
                                <FormMessage />
                                <FormControl>
                                    <Input
                                        autoComplete="off"
                                        {...field.field}
                                    ></Input>
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
                                    <Input
                                        {...field.field}
                                        autoComplete="off"
                                    ></Input>
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
                                    <Input
                                        {...field.field}
                                        autoComplete="off"
                                    ></Input>
                                </FormControl>
                            </FormLabel>
                        </FormItem>
                    )}
                ></FormField>
                <Button type="submit">Wyślij</Button>
                <Button onClick={handleShowResolutions}>Show answers</Button>
            </form>
        </Form>
    );

    return null;
}

export default VerbFormValidator;
