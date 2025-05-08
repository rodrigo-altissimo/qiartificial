
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface AppQueryProviderProps {
  children: ReactNode;
}

// Force webpack/vite to reload this component
const buildTimestamp = new Date().getTime();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: buildTimestamp,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  },
});

const AppQueryProvider = ({ children }: AppQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default AppQueryProvider;
