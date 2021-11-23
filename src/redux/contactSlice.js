import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://619952f49022ea0017a7ae2a.mockapi.io/api/v1",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query({ name, number }) {
        return {
          url: "/contacts",
          method: "POST",
          body: {
            name,
            number,
          },
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query(contactId) {
        return {
          url: `contacts/${contactId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactApi;
