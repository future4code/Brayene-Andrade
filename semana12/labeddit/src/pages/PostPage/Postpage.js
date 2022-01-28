import React from 'react'
import useProtectedPage from '../../hooks/useUnprotectedPage'

const Postpage = () => {
    useProtectedPage()
    return (
        <div>
            <h3>Post</h3>
        </div>
    )
}

export default Postpage
