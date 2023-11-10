import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import { useRouter } from 'next/router';

const useUser = ({ id }: {id: string}) => {
  const { data, isLoading, error } = useSWR(`/api/user/${id}`, fetcher);

  return { user: data, isLoading, error };
};

export default useUser;