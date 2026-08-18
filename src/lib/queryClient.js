import { QueryClient } from '@tanstack/react-query'

/**
 * Umumiy so'rov klienti.
 *
 * Landing hozircha statik, ammo narx va psixologlar ro'yxati keyinchalik
 * API'dan keladi — o'shanda faqat `useQuery` yozish qoladi.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

export default queryClient
