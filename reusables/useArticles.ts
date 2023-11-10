import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useArticles = (id: string) => {
  const { data, isLoading, error } = useSWR(`/api/user/${id}/articles`, fetcher);

  return { articles: data, isLoading, error };
};

export default useArticles;