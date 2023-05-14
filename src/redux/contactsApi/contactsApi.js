import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://645be80699b618d5f329314f.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: `contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
