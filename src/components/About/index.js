import "./index.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faAngular, faFigma, faReact, faHtml5, faPython } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders'
import UCBLogo from "../../assets/images/UCBLogo.png"

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
                        Hello, my name is Tony Chan. I am a student who has studied Financial Mathematics and Statistics at UC Santa Barbara for two years, 
                        before transferring to UC Berkeley to study Data Science. Through my studies I have developed great respect and appreciation for academia and 
                        feel in touch with my university. This is why being a researcher and contributing to a peer-reviewed journal is in my bucket list. In the meantime,
                        I am striving to find a meaningful internship in which I am able to grow as a Data Scientist, and to build proficiency in the field of Machine Learning.
                        My passion for Machine Learning stems from my feelings of amazement towards how AI and nueral networks deal with problems. I appreciate
                        the raw probabilistic approach that models take and the sheer amount of calculations needed to train models. Understanding the reasoning and logic behind AI 
                        has given me some existentialist feelings, which is why I am so drawn to this field. 
                        At the moment I am interested in internships and research opportunities related to Data Engineering/Science or Machine Learning.

                    </p>
                    <p style={{whiteSpace: 'pre-wrap'}}>
                        Skills:    Python    |    PyTorch    |    R    |    SQL    |    Latex    |    Regression Analysis
                    </p>
                    <p style={{whiteSpace: 'pre-wrap'}}>
                        Interests/Hobbies:   Machine Learning   |   Peer-Reviewed Journals   |   Badminton  |   Dragon Boat
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
                            <FontAwesomeIcon className="adjust" icon={faReact} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon className="adjust" icon={faDatabase} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon className="adjust" icon={faTerminal} color="#EFD81D"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon className="adjust" icon={faHtml5} color="#EC4"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
    
}

export default About;