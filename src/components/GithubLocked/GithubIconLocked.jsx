import './GithubIconLocked.scss';
import GithubIcon from '../GithubIcon/GithubIcon';
import { ReactComponent as Locked } from '../../assets/icons/lock.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Button from "../Button/Button";


function GithubIconLocked({ link }) {


    function sendMail(recipient, subject, body) {
        var link = "mailto:" + encodeURIComponent(recipient)
            + "?subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(body);

        window.location.href = link;
    }



    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='github-locked'>
                {/* clean this modifier */}
                <GithubIcon clickHandler={() => setShowModal(true)} modifier='--lighten github-icon--small' />
                <Locked className='github-locked__locked-icon' />
            </div>

            <Modal title='Request access?'
                bodyContent={() => {
                    return (
                        <div className='access-modal__body'>
                            <p>The projects BandSite, BrainFlix, and InStock were built as part of BrainStation's Web Development Diploma Program,
                                on all of which I received an excellent evaluation for a combination of code quality, visual design, functionality, and execution.
                            </p>
                            <p>It would be my pleasure to share my code with those interested in evaluating me as a candidate for hire.
                                However, all BrainStation graduates are required to uphold academic integrity initiatives by keeping our GitHub repos private
                                for these projects. </p>
                            <p>
                                Please contact me if you would like to request access, and I will gladly share with qualified individuals with whom this is appropriate.
                                Thank you for your understanding and cooperation.
                            </p>
                        </div>
                    )


                }}
                footerContent={() =>
                    <Button text="Request Access" onClick={() => {
                        sendMail("amy.nagelberg@gmail.com",
                            "Portfolio request",
                            "Hi Amy, \n\n\I'd like to view your full portfolio for reviewing your candidacy at [Company].\n\[Here is my github] or [you can send directly to this email address].\n\n\
                             Sincerely, \n\
                            [Full Name] \n\
                                ")
                    }} />
                }
                show={showModal}
                closeHandler={() => setShowModal(false)} />
        </>
    );
}

export default GithubIconLocked;