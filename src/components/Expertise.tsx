import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faNodeJs, faLaravel, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faServer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                        <h3>Backend Development</h3>
                        <p>
                            I specialize in building scalable and efficient backend systems using modern technologies such as NestJS and PostgreSQL.
                            I have expertise in designing RESTful APIs, microservices, authentication, and database management.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faLaravel} size="3x" />
                        <h3>Laravel Development</h3>
                        <p>
                            I specialize in building robust and scalable web applications using Laravel.
                            From designing RESTful APIs to implementing authentication, database migrations, and MVC architecture,
                            I ensure high-performance backend solutions tailored to business needs.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x" />
                        <h3>AWS Deployment & Cloud Infrastructure</h3>
                        <p>
                            I have hands-on experience deploying and managing cloud applications on AWS.
                            From setting up scalable EC2 instances and S3 storage to configuring RDS, Lambda functions, and auto-scaling,
                            I ensure reliable and cost-effective cloud solutions for production-ready applications.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;