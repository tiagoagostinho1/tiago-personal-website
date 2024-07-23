import { Title } from '@mantine/core'
import classes from './AboutMe.module.css';

export function AboutMe(){
    return(
        <div>
            <div className={classes.title}>
                <Title>
                    About Me
                </Title>
            </div>
            <div className={classes.description}>
                <p>
                    Hi! I'm an IT professional with a passion for building high-quality applications. Since 2014, I've been specializing in OutSystems, delivering innovative solutions for diverse projects.
                    My journey in the tech industry has always been driven by a desire to learn and improve.
                </p>
                <p>
                    Recently, I've taken up a React front-end course to further enhance my skills and elevate the quality and user experience of the applications I build.
                    By integrating React, I aim to bring more interactivity, performance, and modern design to my projects.
                </p>
                <p>
                    Thank you for visiting my site.
                    I'm excited to share my journey and look forward to collaborating on innovative projects.
                    Let's connect and create something amazing together!
                </p>
            </div>
        </div>

    );
};