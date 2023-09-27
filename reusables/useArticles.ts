import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useArtcles = () => {
  const { data, isLoading, error } = useSWR(`/api/articles`, fetcher);

  return { articles: data, isLoading, error };
};

export default useArtcles;