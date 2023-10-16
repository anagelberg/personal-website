import './ResumeDownload.scss';
import { ReactComponent as Upload } from '../../assets/icons/upload.svg';

function ResumeDownload() {
    return (
        <a href="/files/Nagelberg_CV.pdf" className="resume-download" target="_blank" rel="noopener noreferrer">
            <h2 className='resume-download__text'>My Resumé <Upload className='resume-download__icon' /></h2>

        </a>
    )
}

export default ResumeDownload;