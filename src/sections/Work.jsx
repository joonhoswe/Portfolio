import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import atc from '../assets/work_images/atc.png';
import jj from '../assets/work_images/jj.jpg';
import osu from '../assets/work_images/osu.png';
import reactLogo from '../assets/work_images/logos/React.png';
import tailwind from '../assets/work_images/logos/tailwind.png';
import clerk from '../assets/work_images/logos/clerk.webp';
import socket from '../assets/work_images/logos/socket.io.png';
import python from '../assets/work_images/logos/python.png';
import pandas from '../assets/work_images/logos/pandas.png';
import numpy from '../assets/work_images/logos/numpy.png';
import java from '../assets/work_images/logos/java.webp';
import dsa from '../assets/work_images/logos/dsa.png';
import bigO from '../assets/work_images/logos/bigo.png';

const Work = forwardRef((props, ref) => {

    const [activeExp, setActiveExp] = useState(0);

    const experiences = [
        {
            company: "Angel Trading Co.",
            position: "Software Engineer",
            blurb: "I helped develop the first marketplace with 2k+ monthly active users for Smiskis and Sonny Angels. This startup is currently in the Emory Hatchery Startup Accelerator Program.",
            image: atc,
            languages: [reactLogo, tailwind, clerk, socket],
        },
        {
            company: "Johnson & Johnson",
            position: "Software Engineer Intern",
            blurb: "The summer after high school, I interned in J&J's Ethicon Endo-Surgery team. Here, I wrote Python scripts for the Ottava Surgical Robot and improved existing data validation algorithms! I met some of my closest friends here and learned so much from my mentors.",
            image: jj,
            languages: [python, pandas, numpy],
        },
        {
            company: "The Ohio State University",
            position: "Undergraduate Teaching Assistant",
            blurb: "During my junior year of high school I took Data Structures and Algorithms & Java Object-Oriented Programming. I found a true passion in explaining concepts to my classmates and helping them succeed. To further this passion, I TA'd both of these courses my senior year.",
            image: osu,
            languages: [java, dsa, bigO],
        },
    ];

    const handlePrev = () => {
        if (activeExp === 0) {
            setActiveExp(experiences.length - 1);
        }
        else setActiveExp(activeExp - 1);
    };

    const handleNext = () => {
        if (activeExp === experiences.length - 1) {
            setActiveExp(0);
        }
        else setActiveExp(activeExp + 1);
    };

    return (
        <div ref = {ref} className="bg-gray-200 text-black w-full h-screen flex items-center justify-between px-24">

            <button onClick={handlePrev} className='h-12 w-12 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold shadow-2xl'> 〈 </button>

            <div className='bg-white rounded-2xl w-2/3 h-2/3 flex flex-col p-8 shadow-2xl justify-between'>
                <div className='w-full h-2/3 flex flex-row justify-between'>
                    <img src={experiences[activeExp].image} className='w-4/5 h-full rounded-lg shadow-2xl' alt='' />

                    <div className='flex flex-col justify-between items-center w-full h-full px-4'>
                        {
                            experiences[activeExp].languages.map((lang, index) => (
                                <div key={index} className='bg-white h-16 w-16 rounded-full p-4 flex items-center justify-center shadow-2xl'>
                                    <img src = {lang}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div>
                    <p className='font-bold'> {experiences[activeExp].company} </p>
                    <p className='italic'> {experiences[activeExp].position} </p>
                    <p className=''> {experiences[activeExp].blurb} </p>
                </div>

                <div className='flex flex-row space-x-1 items-center justify-center'>
                    { experiences.map((exp, index) => (
                        <div key={index} className={`rounded-full h-2 w-2 ${activeExp === index ? 'bg-cyan-400' : 'bg-gray-400'}`}/>
                    ))}
                </div>
            </div>

            <button onClick={handleNext} className='h-12 w-12 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold shadow-2xl'> 〉 </button>

        </div>
    );
});

export default Work;