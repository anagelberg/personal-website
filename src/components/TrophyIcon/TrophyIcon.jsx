import './TrophyIcon.scss';
import { ReactComponent as Trophy } from '../../assets/icons/trophy.svg';
function TrophyIcon() {
    return (
        <div className='trophy'>
            <Trophy className='trophy__icon' />
            <p className='trophy__text'>Competition Winner</p>
        </div>
    )
}

export default TrophyIcon;