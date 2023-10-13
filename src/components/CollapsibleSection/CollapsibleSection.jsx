import './CollapsibleSection.scss';
import { useState } from 'react';


function CollapsibleSection({ title, contents }) {
    const [collapsed, setCollapsed] = useState(false)



    return (
        <section className='section'>
            <h1
                // onClick={() => setCollapsed(currentVal => !currentVal)}
                className='section__title'>
                {title}
            </h1>
            {!collapsed &&
                <div className='section__contents'>
                    {contents()}
                </div>
            }
        </section>
    )
}


export default CollapsibleSection;