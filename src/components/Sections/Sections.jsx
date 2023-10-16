import './Sections.scss';
import Projects from '../Projects/Projects';
import Values from '../Values/Values';
import ResumeDownload from '../ResumeDownload/ResumeDownload';
import DecorativeImage from '../DecorativeImage/DecorativeImage';

import { useState, useEffect } from 'react';

function Sections() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isValuesOpen, setIsValuesOpen] = useState(false);
    const [showImageMobile, setShowImageMobile] = useState(true);

    useEffect(() => {
        isValuesOpen && setIsProjectsOpen(false)
    }, [isValuesOpen]);

    useEffect(() => {
        isProjectsOpen && setIsValuesOpen(false);
    }, [isProjectsOpen]);

    useEffect(() => {
        (isProjectsOpen || isValuesOpen) && setShowImageMobile(false);
    }, [isProjectsOpen, isValuesOpen])

    return (
        <>
            <Projects isOpen={isProjectsOpen} setIsOpen={setIsProjectsOpen} />
            <Values isOpen={isValuesOpen} setIsOpen={setIsValuesOpen} />
            <ResumeDownload />
            <DecorativeImage show={showImageMobile} />
        </>
    )

}


export default Sections;