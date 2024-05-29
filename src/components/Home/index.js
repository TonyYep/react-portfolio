import './index.scss'
import logoE from '../../assets/images/logo-e.png'
import {Link} from 'react-router-dom'
import Hover from '../Hover'
import {useState, useEffect, useRef} from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js'
import Logo from './Logo/Logo.js'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ["ony Chan,"]
    const jobArray = ["Model Enthusiast,"]
    const temp = [" and     Data Science student at Cal"]
    const jobArray2 = ["an Aspiring Machine Learning Researcher,"]
    const intro1 = ["Hi, "]
    const intro2 = ["I'm"]
    const idx = useRef(0)
    let [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    return (
        <>
            <div className="container home-page"> 
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters strArray={intro1} letterClass={letterClass} id={idx}
                    startColor="#ffd700" endColor="white"/>
                    <br/> 
                    <AnimatedLetters strArray={intro2} letterClass={letterClass} id={idx} startColor="#ffd700" endColor="white"/>
                    <img src={logoE} alt="developer" />

                    <span className="scoot-left">
                        <AnimatedLetters strArray={nameArray} letterClass={letterClass} id={idx} startColor="#ffd700" endColor="white"/>
                    </span>
                    <br/>
                    <AnimatedLetters strArray={jobArray2} letterClass={letterClass} id={idx} startColor="#ffd700" endColor="white"/>
                    <br/>
                    </h1>
                    
                    <h2>
                        <AnimatedLetters strArray={jobArray} letterClass={letterClass} id={idx} startColor="#ffd700" endColor="white"/>
                        {screenWidth < 800 ? <br/> : null}
                        <AnimatedLetters strArray={temp} letterClass={letterClass} id={idx} startColor="#ffd700" endColor="white"/>
                    </h2>

                    <Link to="/portfolio" className='flat-button'>CONTACT ME</Link>
                    <br/>
                </div>
                <div className="hover-zone">
                    <Hover/>
                </div>
                
                <Logo/>
                
            </div>
            <Loader type="pacman"/>
        </>
    )   
}

export default Home