import './CollapsibleSection.scss';
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/chevron.svg';

function CollapsibleSection({ title, contents }) {
    const [open, setOpen] = useState(false);
    const myComponentRef = useRef();

    // Function to scroll to the component
    function scrollToComponent() {
        if (myComponentRef.current) {
            const element = myComponentRef.current;
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementTop, behavior: 'smooth' });
        }
    }

    // Function to add a delay before scrolling
    function scrollToComponentWithDelay() {
        setTimeout(scrollToComponent, 1000); // Delay of 1 second (1000 milliseconds)
    }


    return (
        <section className='section' ref={myComponentRef} onClick={scrollToComponentWithDelay}>
            <h1
                onClick={() => {
                    setOpen(currentVal => !currentVal)
                }
                }
                className='section__title'>
                {title}
                <Arrow className='section__arrow' />
            </h1>
            <div
                className={open
                    ? 'section__content-container section__content-container--open'
                    : 'section__content-container'}>
                <div className={open ? 'section__contents' : 'section__contents--hidden'}>
                    {contents()}
                </div>
            </div>
        </section >
    )
}


export default CollapsibleSection;