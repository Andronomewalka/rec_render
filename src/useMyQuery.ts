import { useQuery } from "@tanstack/react-query"

export const useMyQuery = () => {
    return useQuery(["repoData"], () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )
}