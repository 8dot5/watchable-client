import React from 'react'

const Errors = ({ errors }) => {
    const renderErrors = () => {
        return errors.map(error =>
        <ul>
            <li>
                {error}
            </li>
        </ul>
        )
    }

    return (
        <div>
            <br/>
            {renderErrors()}
        </div>
    )
}

export default Errors;