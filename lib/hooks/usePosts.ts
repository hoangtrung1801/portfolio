import fetcher from "lib/fetcher";
import useSWR from "swr";

export default function usePosts() {
    const { data, error } = useSWR("/api/blog/post", fetcher);

    return {
        posts: data ? data.data : [],
        isLoading: !data && !error,
        error: error
    };
}
