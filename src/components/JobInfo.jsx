import { FaAngleDoubleRight } from '../../node_modules/react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const JobInfo = ({ jobs, currentItem }) => {
    const { title, company, dates, duties } = jobs[currentItem];
    return (
        <article className='job-info'>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <div>
                {duties && duties.map((dutie) => {
                    return <div key={uuidv4()} className='job-desc'>
                        <FaAngleDoubleRight className='job-icon' />
                        <p>{dutie}</p></div>
                })}
            </div>
        </article>
    )
}

export default JobInfo