import './Values.scss';
import ValueCard from '../ValueCard/ValueCard';
import { ReactComponent as Truth } from '../../assets/icons/honesty.svg';
import { ReactComponent as Sustainability } from '../../assets/icons/sustainability.svg';
import { ReactComponent as Innovation } from '../../assets/icons/innovation.svg';
import { ReactComponent as Health } from '../../assets/icons/Health.svg';

function Values() {
    return (
        <section className='values'>
            <h1 className='values__title'>Core Values</h1>
            <p className='values__subtitle'>Non-exhaustive list of what matters most to me & guiding personal principles.</p>


            <ValueCard
                name="Truth"
                description="Open and honest communication for informed decision-making and negotiation."
                icon={() => <Truth className='values__icon' />} />

            <ValueCard
                name="Innovation"
                description="Solving complex challenges to make the world a better place."
                icon={() => <Innovation className='values__icon' />} />

            <ValueCard
                name="Sustainability"
                description="Ensuring what I do is prioritizing the future at least as much as the present."
                icon={() => <Sustainability className='values__icon' />} />

            <ValueCard
                name="Health & Wellness"
                description="Collectively improving my own and others health, wellbeing, and happiness."
                icon={() => <Health className='values__icon' />} />
        </section>
    )
}

export default Values;