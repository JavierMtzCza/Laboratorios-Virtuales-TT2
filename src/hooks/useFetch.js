import { useState, useEffect} from "react";

export function useFetch(api) {

   const [data, setData] = useState(null)
   const [error, setError] = useState(null)

   useEffect(() => {
      fetch(api)
      .then((response) => response.json)
      .then((data) => setData(data))
      .catch((error) => setError(error))
   }, [])

   return {data,error}
}