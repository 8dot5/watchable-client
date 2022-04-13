import { useEffect } from 'react';
import '../styles/StaticPage.css'

import Spinner from 'react-bootstrap/Spinner'

function Static(){
    // let src = 'https://m.psecn.photoshelter.com/img-get2/I0000oMj4CY3BzMw/fill=2000x1125/g=G00003tyCpRF.qOc/bg.jpg'
    let src = 'https://m.psecn.photoshelter.com/img-get2/I0000oMj4CY3BzMw/fit=1400/g=G00003tyCpRF.qOc/bg.jpg'

    let style = {
        opacity: 0.5,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%'
    }

    return (
        <div className='static-body'>
            <img src={src} style={style} />
            <Spinner animation='border' className='spinner' role='status'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Static;