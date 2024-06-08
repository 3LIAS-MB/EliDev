import { useEffect } from "react"
import PropTypes from "prop-types";

export default function SearchPage ({ routeParams }) {
    // console.log(routeParams)
    
    useEffect(() => {
        document.title  = `Has buscado ${routeParams.query}`
        //fetch(`https://api.asdasdasd.com/search${routeParams}`)
    }, [])
    return (
        <h1>Has buscado {routeParams.query}</h1>
    )
}

// Validación de props
SearchPage.propTypes = {
    routeParams: PropTypes.shape({
        query: PropTypes.string.isRequired
    }).isRequired
};