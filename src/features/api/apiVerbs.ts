import { VerbConfigurationType } from "@/features/verbs/VerbType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = document.location.origin + "/api/";

console.log(baseApiUrl);

export const verbsApi = createApi({
    reducerPath: "verbsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
    endpoints: (builder) => ({
        getVerbs: builder.query<VerbConfigurationType[], void>({
            query: () => "verbs",
        }),
    }),
});

export const { useGetVerbsQuery } = verbsApi;
