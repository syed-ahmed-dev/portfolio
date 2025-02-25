import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <strong>NowPosh</strong>, Karachi, Pakistan
            </h4>
            <p>
              Leading the backend development team at NowPosh, driving innovation, scalability, and efficiency in server-side solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <strong>Crownsoft</strong>, Karachi, Pakistan
            </h4>
            <p>
              At CrownSoft, I led backend operations, ensuring efficient workflows, database optimization, and high system uptime.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <strong>Code Augment Tech</strong>, Karachi, Pakistan
            </h4>
            <p>
              Led a high-performing team at Code Augment Tech, delivering innovative and scalable backend solutions to drive business success.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <strong>Indus Valley Technologies</strong>, Karachi, Pakistan
            </h4>
            <p>
              Began my professional journey at Indus Valley, where I developed strong backend development skills and gained hands-on experience with scalable systems.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;