import useSWR from 'swr';
import { client } from 'api/client';

export default function useRequest(request, { initialData, ...config } = {}) {
  const requestKey = request && JSON.stringify(request);

  const { data: response, error, isValidating, revalidate } = useSWR(requestKey, () => client(request || {}), {
    ...config,
    initialData: initialData && {
      status: 200,
      statusText: 'InitialData',
      headers: {},
      data: initialData,
    },
  });

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
  };
}
