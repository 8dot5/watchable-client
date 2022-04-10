function Errors({ errors }) {

    function renderErrors() {
        return errors.map(error => <ul><li>{error}</li></ul>)


    }

    return (
        <div>
            <br />
            {renderErrors()}
        </div>
    )
}

export default Errors
