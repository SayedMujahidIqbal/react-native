import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_RESPOSITORIES } from "../graphql/qureis";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);

  const { data } = useQuery(GET_RESPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!repositories) {
      setRepositories(data?.repositories);
    }
  }, [repositories, data]);

  return { repositories };
};

export default useRepositories;
