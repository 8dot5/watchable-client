import { useState } from 'react'
import { useHistory } from 'react-router'
import Errors from './Errors'

import '../styles/WatchablesAddEditPage.css'

const WatchablesEdit = ({ categories, errors, watchables, setWatchables, watchablesEdit }) => {

    const {id} = watchablesEdit

    const history = useHistory()
    const [state, setState] = useState(
        {
            title: watchablesEdit.title,
            summary: watchablesEdit.summary,
            poster_url: watchablesEdit.poster_url,
            trailer_url: watchablesEdit.trailer_url
        }
    )

    function onChange(e) {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    function handleUpdateWatchable(e) {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch(`/watchables/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.errors) {
                    setWatchables(watchables.map(watchable => watchable.id === id ? data : watchable))
                    history.push('/watchables-list')
                }
            }
        )
    }

    function renderCategories() {
        return categories.map(category => {
            return (
                <option
                    key={category.id}
                    value={category.id}
                >
                {category.name}
                </option>
            )
        })
    }

    return (
        <div className='watchables-add-edit-page'>
            <div className='page-title'>Edit a Watchable</div>
            <div className='form-add'>
                <form onSubmit={handleUpdateWatchable} >
                    <input onChange={onChange} type="text" value={state.title} name='title' placeholder='Enter watchable title' size='50'></input><br />
                    <p><br />
                    <select defaultValue='' onChange={onChange} className='dropdown-add' name='rating'>
                            <option value='' disabled >Select a rating</option>
                            <option value='G'>Rated: G</option>
                            <option value='PG'>Rated: PG</option>
                            <option value='PG-13'>Rated: PG-13</option>
                            <option value='R'>Rated: R</option>
                            <option value='Hide the Kids'>Hide the Kids</option>
                            <option value='Hide the Spouse'>Hide the spouse</option>
                        </select>
                    </p>
                    <p>
                        <select defaultValue='' onChange={onChange} className='dropdown-add' name="category_id">
                        <option value='' disabled >Select a category</option>
                            {renderCategories()}
                        </select>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='poster_url' value={state.poster_url} placeholder='Enter watchable poster url' size='50'></input>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='trailer_url' value={state.trailer_url} placeholder='Enter watchable trailer url' size='50'></input>
                    </p>
                        <textarea onChange={onChange} name='summary' value={state.overview} placeholder='Enter watchable summary' cols='50' rows='6'></textarea><br />
                        <input type='submit' ></input>
                    </form>
                    <Errors errors={errors} />
            </div>
        </div>
    )
}

export default WatchablesEdit
