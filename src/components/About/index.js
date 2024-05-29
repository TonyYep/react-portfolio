import "./index.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faAngular, faFigma, faReact, faHtml5, faPython } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders'
import UCBLogo from "../../assets/images/UCBLogo.png"
import PyTorch from "../../assets/images/PyTorch.png"
import R_logo from "../../assets/images/R_logo.png"

const About = () => {
    const idx = useRef(0);
    //check environment variables
    console.log('test')
    console.log(process.env.REACT_APP_EMAIL_SERVICE);
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass="text-animate" strArray={["About me"]} id={idx} startColor="white" endColor="#ffd700"/>
                    </h1>
                    <p>
                        I am Tony, a current Data Science student at UC Berkeley, formerly studying Financial Mathematics and Statistics at UC
                        Santa Barbara. Through my academic journey I have developed great respect and appreciation for academia and hope to be
                        able to make contributions to papers and academic journals in the future.

                        I am currently striving to be a mindful, context-driven data scientist. My passion fo rmachine learning and its
                        applications. I am fascinated by the raw probabilistic approach that models take and the sheer amount of calculations 
                        needed to deploy models. At the moment, I am searching for the right opportunity for me to properly utilize my skills
                        within a driven environment valuing the context of data, the process of learning, and pushing the boundaries of machine
                        learning applications.

                       

                    </p>
                    <p style={{whiteSpace: 'pre-wrap'}}>
                        Skills:    Python    |    PyTorch    |    R    |    SQL    |    Latex
                    </p>
                    <p style={{whiteSpace: 'pre-wrap'}}>
                        Interests/Hobbies:   Machine Learning   |   Peer-Reviewed Journals   |   Badminton  |   Dragon Boat   |   Lion Dance
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>

                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon className="adjust" icon={faPython} color="#fce303"/>
                        </div>
                        <div className="face2">
                            <img src={UCBLogo} alt="UCB Logo" style={{width: "20rem"}}/>
                        </div>
                        <div className="face3">
                            <img src={PyTorch} alt="UCB Logo" style={{width: "20rem"}}/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon className="adjust" icon={faDatabase} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon className="adjust" icon={faTerminal} color="#EFD81D"/>
                        </div>
                        <div className="face6">
                            <img src={R_logo} alt="UCB Logo" style={{width: "20rem"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
    
}

export default About;