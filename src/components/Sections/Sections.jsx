import './Sections.scss';
import Projects from '../Projects/Projects';
import Values from '../Values/Values';
import { useState, useEffect } from 'react';

function Sections() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isValuesOpen, setIsValuesOpen] = useState(false);

    useEffect(() => {
        isValuesOpen && setIsProjectsOpen(false)
    }, [isValuesOpen]);

    useEffect(() => {
        isProjectsOpen && setIsValuesOpen(false);
    }, [isProjectsOpen]);


    return (
        <>
            <Projects isOpen={isProjectsOpen} setIsOpen={setIsProjectsOpen} />
            <Values isOpen={isValuesOpen} setIsOpen={setIsValuesOpen} />
        </>
    )

}


export default Sections;