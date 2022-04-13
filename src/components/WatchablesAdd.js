import { useState } from 'react'
import { useHistory } from 'react-router'
import Errors from './Errors'

import Button from 'react-bootstrap/Button'

import '../styles/WatchablesAddEditPage.css'

function WatchablesAdd({ currentUser, categories, setWatchables, errors, watchables, watchable }) {

    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [category, setCategory] = useState('')
    const [poster, setPoster] = useState('')
    const [trailer, setTrailer] = useState('')
    const [summary, setSummary] = useState('')

    const history = useHistory()

    function handleCreateWatchable(e) {
        e.preventDefault()
        switch (true) {
            case (formData.title.length <1):
                alert('Please enter Watchable title');
                break;
            case (!formData.rating || formData.rating === ''):
                alert('Please enter Watchable rating');
                break;
            case (!formData.category_id || formData.category_id === ''):
                alert('Please enter Watchable category');
                break;
            default:

        fetch('/watchables', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setWatchables([data, ...watchables])
            history.push('/watchables-list')
        })
    }}

    // Handles default values
    let formData = {
        "title": title,
        "rating": rating,
        "category_id": category,
        "poster_url": poster ? poster : 'https://m.psecn.photoshelter.com/img-get/I0000AJkdFdU3w8E/s/1000?1646725782',
        "trailer_url": trailer ? trailer : 'https://youtu.be/dQw4w9WgXcQ',
        "summary": summary
    }

    let form = (
        <div className='form-add'>
            <form onSubmit={handleCreateWatchable}>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name='title' placeholder="The Watchable's title" size='50'></input><br/>
                <p><br />
                    <select defaultValue='' onChange={(e) => setRating(e.target.value)} className='dropdown-add' name='rating'>
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
                    <select defaultValue='' onChange={(e) => setCategory(e.target.value)} className='dropdown-add' name='category_id'>
                        <option value=''>Select a category</option>
                        {renderCategories()}
                    </select>
                </p>
                <p>
                    <input onChange={(e) => setPoster(e.target.value)} type='text' name='poster_url' placeholder="The Watchable's poster url" size='50'></input>
                </p>
                <p>
                    <input onChange={(e) => setTrailer(e.target.value)} type="text" name='trailer_url' placeholder="The Watchable's trailer url" size='50'></input>
                </p>
                <textarea onChange={(e) => setSummary(e.target.value)} name='summary' placeholder='Enter Watchable summary' cols='49' rows='3'></textarea><br/><br/>

                <a className='cancel-button' href='/watchables-list'>Cancel</a>
                <Button variant='danger' className='submit-button' type='submit'>Submit</Button>

            </form>
            <Errors errors={errors} />
        </div>
    )

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
            <div className='page-title'>{
                currentUser
                ?
                'Add a new Watchable.'
                :
                'Log in to add a new Watchable.'
            }
            </div>
            <br/>
            {currentUser ? form : null}
        </div>
    )
}

export default WatchablesAdd;