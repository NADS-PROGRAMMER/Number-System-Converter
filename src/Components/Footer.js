import React from 'react'
import github from '../Images/github.png'
import twitter from '../Images/twitter.png'
function Footer() {
    return (
        <footer>
            <section>
                <p>Created by: Nads Marcelo</p>
                <small>All Rights Reserved</small>
            </section>
            <nav>
                <img id="github" src={github} alt="" onClick={() => {
                    window.open('https://github.com/NADS-PROGRAMMER', '_blank')
                }}/>
                <img src={twitter} alt="" onClick={() => {

                    window.open('https://twitter.com/NadsMarcelo', '_blank')
                }}/>
            </nav>
        </footer>
    )
}

export default Footer
