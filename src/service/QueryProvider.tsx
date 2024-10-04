import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ServiceType } from '../types';

export const QueryProvider = ({ children }: ServiceType.QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
