import React from 'react'
import github from '../Images/github.png'
import twitter from '../Images/twitter.png'
function Footer() {
    return (
        <footer>
            <section>
                <p className="footer-caption">This is my 2nd React.js Project. Follow me on my #100DaysOfCode Journey</p>
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
