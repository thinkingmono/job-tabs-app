import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsLoading(false);
          setIsError(true);
        }
        const jobsArray = await response.json();
        // console.log(jobsArray);
        setJobs(jobsArray);
      } catch (error) {
        setIsError(true);
        console.log('Error' + error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error</h2>
  }

  return (
    <main>
      <div className="jobs-center">
        <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
        {jobs[currentItem] && <JobInfo job={jobs[currentItem]} currentItem={currentItem}/> }
      </div>
    </main>
  );
};
export default App;
