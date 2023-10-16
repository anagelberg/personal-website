import './CollapsibleSection.scss';
import { ReactComponent as Arrow } from '../../assets/icons/chevron.svg';

function CollapsibleSection({ title, contents, isOpen, setIsOpen }) {

    return (
        <section className='section'>
            <h2
                onClick={() => {
                    setIsOpen(currentVal => !currentVal)
                }
                }
                className='section__title'>
                {title}
                <Arrow className={`section__arrow ${isOpen && 'section__arrow--rotated'}`} />
            </h2>
            <div
                className={isOpen
                    ? 'section__content-container section__content-container--open'
                    : 'section__content-container section__content-container--closed'}>
                <div className='section__contents'>
                    {contents()}
                </div>
            </div>
        </section >
    )
}


export default CollapsibleSection;