import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const usePins = (id: string) => {
  const { data, isLoading, error } = useSWR(`/api/user/${id}/pins`, fetcher);

  return { pins: data, isLoading, error };
};

export default usePins;