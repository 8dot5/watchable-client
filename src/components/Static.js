import { useEffect } from 'react';
import '../styles/StaticPage.css'

import Spinner from 'react-bootstrap/Spinner'


function Static(){

    let src = 'https://m.psecn.photoshelter.com/img-get2/I0000oMj4CY3BzMw/fill=1375x1200/g=G00003tyCpRF.qOc/bg.jpg'

    // let src ='https://m.psecn.photoshelter.com/img-get/I0000oMj4CY3BzMw/s/1000?1649800949'


    let style = {
        // margin: "10px 5px 0px 5px",
        // backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',

        opacity: 0.5,
        // backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',

    }


    return (
        <div className="static-background">

            <div className='static-body'>
              <img src={src} style={style} />

              <Spinner animation='border' className='spinner' role='status'>
                  <span className="visually-hidden">Loading...</span>
              </Spinner>

            </div>

        </div>
    )
}

export default Static;