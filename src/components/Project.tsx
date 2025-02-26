import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.nettybellshop.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.nettybellshop.com/" target="_blank" rel="noreferrer"><h2>Netty Bell</h2></a>
                <p>Netty Bell Shop is an e-commerce platform offering eco-friendly fashion. Developers may explore its tech stack, API integrations, and performance optimizations.</p>
            </div>
            <div className="project">
                <a href="https://qraftconnect.se/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://qraftconnect.se/" target="_blank" rel="noreferrer"><h2>QraftConnect</h2></a>
                <p>QraftConnect is a B2B platform connecting construction companies to collaborate and share labor resources efficiently.</p>
            </div>
            <div className="project">
                <a href="https://kacherilaw.com/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kacherilaw.com/" target="_blank" rel="noreferrer"><h2>Kacheri Law</h2></a>
                <p>Kacheri Law appears to be a legal services platform. If you're looking at it from a developer’s perspective, you might be interested in how the website is built, its tech stack, APIs, or any automation it uses. Let me know if you need insights into its structure, performance, or any integrations!</p>
            </div>
            <div className="project">
                <a href="https://crownsolarenergy.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://crownsolarenergy.com/" target="_blank" rel="noreferrer"><h2>Crown Solar Energy</h2></a>
                <p>Crown Solar Energy offers cutting-edge solar solutions, including high-efficiency panels, inverters, and batteries. Developers can explore their API integrations and technical resources at</p>
            </div>
            <div className="project">
                <a href="https://allalert.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://allalert.com/" target="_blank" rel="noreferrer"><h2>AllAlert</h2></a>
                <p>Currently, AllAlert does not provide publicly accessible developer resources, such as APIs or SDKs, for third-party integration. Their offerings are primarily consumer-focused, including the smart emergency wristband and GPS locator app. For any specific development or integration inquiries, it's advisable to contact AllAlert directly through their official website.</p>
            </div>
            <div className="project">
                <a href="https://teraride.co/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://teraride.co/" target="_blank" rel="noreferrer"><h2>Teraride</h2></a>
                <p>TeraRide is a transportation service that provides comfortable and affordable shuttle rides in areas like North Miami Beach, Aventura, and Sunny Isles. They aim to modernize public transport by offering convenient and cost-effective ride options.</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/syed-ahmed-dev/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/syed-ahmed-dev/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/syed-ahmed-dev/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/syed-ahmed-dev/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;