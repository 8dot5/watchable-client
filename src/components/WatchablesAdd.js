import { useState } from 'react'
import { useHistory } from 'react-router'
import Errors from './Errors'

import Button from 'react-bootstrap/Button'

import '../styles/WatchablesAddEditPage.css'

function WatchablesAdd({ categories, setWatchables, errors, watchables }) {

    const [state, setState] = useState({})

    const history = useHistory()

    function onChange(e) {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    function handleCreateWatchable(e) {
        e.preventDefault()
        fetch('/watchables', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setWatchables([data, ...watchables])
            history.push('/watchables-list')
        })
    }

    function renderCategories() {
        return categories.map(category => {
            return (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
            )
        })
    }

    return (
        <div className='watchables-add-edit-page'>
            <div className='page-title'>Add a Watchable</div>
            <br/>
            <div className='form-add'>
                <form onSubmit={handleCreateWatchable}>
                    <input onChange={onChange} type="text" name='title' placeholder="The Watchable's title" size='50'></input><br/>
                    <p><br />
                        <select defaultValue='' onChange={onChange} className='dropdown-add' name='rating'>
                            <option value=''>Select a rating</option>
                            <option value='G'>Rated: G</option>
                            <option value='PG'>Rated: PG</option>
                            <option value='PG-13'>Rated: PG-13</option>
                            <option value='R'>Rated: R</option>
                            <option value='Hide the Kids'>Hide the Kids</option>
                            <option value='Hide the Spouse'>Hide the spouse</option>
                        </select>
                    </p>
                    <p>
                        <select defaultValue='' onChange={onChange} className='dropdown-add' name='category_id'>
                            <option value=''>Select a category</option>
                            {renderCategories()}
                        </select>
                    </p>
                    <p>
                        <input onChange={onChange} type='text' name='poster_url' placeholder="The Watchable's poster url" size='50'></input>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='trailer_url' placeholder="The Watchable's trailer url" size='50'></input>
                    </p>
                    <textarea onChange={onChange} name='summary' placeholder='Enter watchable summary' cols='49' rows='3'></textarea><br/><br/>

                    <a className='cancel-button' href='/watchables-list'>Cancel</a>
                    <Button variant='primary' className='submit-button' type='submit'>Submit</Button>

                </form>
                <Errors errors={errors} />
            </div>
        </div>
    )
}

export default WatchablesAdd
