
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useHistory } from 'react-router'

import '../styles/Cards.css'

const CardBack = ({watchable, setWatchablesEdit, watchables, setWatchables, setFavorites, favorites, userCategories }) => {

    const {id} = watchable

    const history = useHistory()

    const handleClick = () => {
        setWatchablesEdit(watchable)
        history.push ('/edit')
    }

    const handleDeleteWatchable = () => {
        let config = {
            method: 'DELETE'
        }

        fetch(`/watchables/${id}`, config)
            .then(res => res.json())
            .then(data => {
                setWatchables(
                    watchables.filter(watchable => {
                        return watchable.id !== id
                    })
                )
            }
        )
    }

    const handleFavorite = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({favorite: true})
        }
        fetch(`/watchables/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                console.log(data, 'fave it')
                if(!data.errors) {
                    setFavorites([...favorites, data])
                }
            }
        )
    }

    const filterFavorites = () => {
        return favorites.filter(favorite => favorite.id !== id)
    }

    const handleRemoveFavorite = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({favorite: false})
        }
        fetch(`/watchables/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                console.log(data, 'remove fave')
                if(!data.errors) {
                    setFavorites(filterFavorites())
                }
            }
        )
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
                </Card.Body>

                <ListGroup>
                    <ListGroupItem>Rating: {watchable.rating}</ListGroupItem>


                    <ListGroupItem><Card.Link href={watchable.trailer_url} target="_blank">Watch Watchable Trailer</Card.Link></ListGroupItem>

                    {   watchable.favorite
                        ?<ListGroupItem><Card.Link onClick={handleRemoveFavorite} href="#">Remove Favorite</Card.Link></ListGroupItem>
                        :<ListGroupItem><Card.Link onClick={handleFavorite} href="#">Add to Favorites</Card.Link></ListGroupItem>
                    }
                </ListGroup>

                <Card.Body>
                    {   watchable.favorite ?
                            <Card.Link onClick={handleClick}>Edit Watchable</Card.Link>
                            :
                            <>
                            <Card.Link onClick={handleClick} href='#'>Edit Watchable</Card.Link>
                            <br/>
                            <Card.Link onClick={handleDeleteWatchable} href='#'>Delete Watchable</Card.Link>
                        </>
                    }
                     <Card.Text>Updated: {truncate(watchable.updated_at, 11)}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBack
