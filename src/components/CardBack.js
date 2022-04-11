
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useHistory } from 'react-router'

import '../styles/Cards.css'

function CardBack({watchable, setWatchablesEdit, watchables, setWatchables, setFavorites, favorites, userCategories }) {

    const {id} = watchable

    const history = useHistory()

    function handleClick() {
        setWatchablesEdit(watchable)
        history.push ('/edit')
    }

    function handleDeleteWatchable() {
        fetch(`/watchables/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setWatchables(
                watchables.filter(watchable => {
                    return watchable.id !== id
                })
            )
        })
    }

    function handleFavorite(e) {
        e.preventDefault()
        fetch(`/watchables/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({favorite: true})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data, 'fave it')
            if(!data.errors) {
                setFavorites([...favorites, data])
            }
        })
    }

    function handleRemoveFavorite(e) {
        e.preventDefault()
        fetch(`/watchables/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({favorite: false})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data, 'remove fave')
            if(!data.errors) {
                setFavorites(
                    favorites.filter(favorite => {
                        return favorite.id !== id
                    })
                )
            }
        })
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='card-back'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title>🍿 {truncate(watchable.title, 10)}</Card.Title>

                    <Card.Text>
                        {truncate(watchable.summary, 120)}
                    </Card.Text>
                    <Card.Text>Rating: {watchable.rating}</Card.Text>
                </Card.Body>

                <ListGroup>
                    {/* <ListGroupItem>Rating: {watchable.rating}</ListGroupItem> */}


                    <ListGroupItem><Card.Link href={watchable.trailer_url} target="_blank">Trailer</Card.Link></ListGroupItem>

                    {/* {
                        watchable.favorite
                        ?
                        <ListGroupItem><Card.Link onClick={handleRemoveFavorite} href="#">Remove Favorite</Card.Link></ListGroupItem>
                        :
                        <ListGroupItem><Card.Link onClick={handleFavorite} href="#">Add to Favorites</Card.Link></ListGroupItem>
                    } */}
                </ListGroup>

                <Card.Body>
                    {
                        watchable.favorite
                        ?
                        <Card.Link onClick={handleRemoveFavorite} href="#">Remove</Card.Link>
                        :
                        <Card.Link onClick={handleFavorite} href="#">Add</Card.Link>
                    }
                    <br/>
                    {
                        watchable.favorite
                        ?
                        <Card.Link onClick={handleClick}>Edit</Card.Link>
                        :
                        <>
                        <Card.Link onClick={handleClick} href='#'>Edit</Card.Link>
                         <br/>
                        <Card.Link onClick={handleDeleteWatchable} href='#'>Delete</Card.Link>
                        </>
                    }
                     <Card.Text style={{fontSize: 11}}>Updated: {truncate(watchable.updated_at, 11)}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBack
