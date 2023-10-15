import './ProjectCard.scss';
import GithubIcon from '../GithubIcon/GithubIcon';
import DeployIcon from '../DeployIcon/DeployIcon';
import TrophyIcon from '../TrophyIcon/TrophyIcon';
import GithubIconLocked from '../GithubLocked/GithubIconLocked';



function ProjectCard({ project }) {
    return (
        <article className="project">
            <div className="project__header">
                <div>
                    <a
                        className="project__title"
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer">
                        {project.title}
                    </a>

                </div>

                <div className='project__icons'>
                    {
                        project.github === 'locked'
                            ? <GithubIconLocked link={project.github} />
                            : <GithubIcon link={project.github} modifier="--small" />}


                    <DeployIcon link={project.deployment} />
                </div>
            </div>

            <p>
                {project.shortDescription}
            </p>

            {project.trophy && <TrophyIcon />}

        </article>
    )
}

export default ProjectCard;