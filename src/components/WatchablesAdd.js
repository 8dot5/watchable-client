import { useState } from 'react'
import { useHistory } from 'react-router'
import Errors from './Errors'

import '../styles/WatchablesAddEditPage.css'

const WatchablesAdd = ({ categories, setWatchables, errors, watchables }) => {

    const [state, setState] = useState({})

    const history = useHistory()

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleCreateWatchable = (e) => {
        e.preventDefault()
        console.log(e)
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }

        fetch('/watchables', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setWatchables([data, ...watchables])
            history.push('/watchables-list')
        })
    }

    const renderCategories = () => {
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
            {/* <h5 className='page-title'>Add a Watchable</h5> */}
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
                    <textarea onChange={onChange} name='summary' placeholder='Enter watchable summary' cols='50' rows='3'></textarea><br/><br/>
                    <input type='submit'></input>
                </form>
                <Errors errors={errors} />
            </div>
        </div>
    )
}

export default WatchablesAdd
