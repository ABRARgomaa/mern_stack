import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token

        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 403) {
        console.log('sending refresh token');

        // Call the refresh token endpoint
        const { data, error } = await baseQuery('/auth/refresh', api, extraOptions);

        if (data) {
            // Update the token in the Redux store
            api.dispatch(setCredentials({ ...data }));
            // Retry the original request with the new token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // If the refresh token request fails, log the user out
            api.dispatch(logOut());
            if (error?.status === 403) {
                error.data.message = "Your login has expired.";
            }
            return error;
        }
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})