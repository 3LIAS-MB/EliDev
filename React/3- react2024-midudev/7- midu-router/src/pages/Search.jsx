import { useEffect } from "react"

export default function SearchPage ({ routeParams }) {
    useEffect(() => {
        document.title  = `Has buscado ${routeParams.query}`
        fetch(`https://api.asdasdasd.com/search${routeParams}`)
    }, [])
    return (
        <h1>Has buscado {routeParams.query}</h1>
    )
}