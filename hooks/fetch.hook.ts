import useSWR from "swr";

const API =
  "https://cors-anywhere.herokuapp.com/https://eucalyptus-production-master-services-us.cloud.virttrade.com";

export function useFetch(path: string) {
  if (path && path[0] !== "/") {
    path = "/" + path;
  }

  const { data, error } = useSWR(API + path, async (url) => {
    return await (await fetch(url)).json();
  });

  return { data, error };
}
