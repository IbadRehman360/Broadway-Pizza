import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder() {
    const navigate = useNavigate()
    const [query, setQuery] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search order ###" value={query} onChange={(e) => setQuery(e.target.value)}></input>
        </form>
    )
}

export default SearchOrder