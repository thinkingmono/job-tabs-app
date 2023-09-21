import { FaAngleDoubleRight } from '../../node_modules/react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const JobInfo = (props) => {
    return (
        <section>
            <div>
                <h3>{props.job.title}</h3>
                <span className='job-company'>{props.job.company}</span>
                <p className='job-date'>{props.job.dates}</p>
                <ul>
                    {props.job.duties && props.job.duties.map((dutie) => {
                        return <li key={uuidv4()}><FaAngleDoubleRight className='job-icon' />{dutie}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default JobInfo