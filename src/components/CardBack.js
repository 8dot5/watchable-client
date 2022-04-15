import { useHistory } from 'react-router'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import '../styles/Cards.css'

function CardBack({watchable, setWatchablesEdit, watchables, setWatchables, setFavorites, favorites, userCategories }) {
    const {id} = watchable
    const history = useHistory()

    function handleClick() {
        setWatchablesEdit(watchable)
        history.push ('/edit')
    }

    function handleDeleteWatchable() {
        fetch(`https://watchables-api.herokuapp.com/watchables/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setWatchables(
                watchables.filter(watchable => {
                    return watchable.id !== id
                })
            )
            setTimeout(() => {
                alert('Deleted a Watchable!')
            }, 100)
        })
    }

    function handleFavorite(e) {
        e.preventDefault()
        fetch(`https://watchables-api.herokuapp.com/watchables/${id}`, {
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
                setTimeout(() => {
                    alert('Faved a Watchable!')
                }, 100)
            }
        })
    }

    function handleRemoveFavorite(e) {
        e.preventDefault()
        fetch(`https://watchables-api.herokuapp.com/watchables/${id}`, {
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
                setTimeout(() => {
                    alert('Unfaved a Watchable!')
                }, 100)
            }
        })
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='card-back'>
            <Card style={{ width: '15rem', height: '30vh'}}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{truncate(watchable.title, 20)}</Card.Title>
                    <Card.Text>
                        {truncate(watchable.summary, 100)}
                    </Card.Text>
                    <Card.Text style={{fontSize: 12}}>Rating: {watchable.rating}</Card.Text>
                </Card.Body>

                <ListGroup>
                    <ListGroupItem><Card.Link href={watchable.trailer_url} target="_blank">Trailer</Card.Link></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    {
                        watchable.favorite
                        ?
                        <Card.Link onClick={handleRemoveFavorite} href="#">Unfave it</Card.Link>
                        :
                        <Card.Link onClick={handleFavorite} href="#">Fave it</Card.Link>
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
                     <Card.Text style={{fontSize: 10}}>Updated: {truncate(watchable.updated_at, 11)}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBack;
