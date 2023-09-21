import { v4 as uuidv4 } from 'uuid';

const BtnContainer = ({ currentItem, setCurrentItem, jobs }) => {
    const activeTab = (index) => {
        // console.log(index);
        setCurrentItem(index);
    }
    return (
        <div className='btn-container'>
            {jobs && jobs.map((job, index) => {
                return <button key={uuidv4()} type="button" className="job-btn" onClick={() => activeTab(index)}>{job.company}</button>
            })}
        </div>
    )
}

export default BtnContainer