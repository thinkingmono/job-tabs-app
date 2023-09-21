import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
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
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  if (isError) {
    return <h2>There was an error</h2>
  }

  return (
    <main>
      <section className="jobs-center">
        <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
        {jobs && <JobInfo jobs={jobs} currentItem={currentItem}/>}
      </section>
    </main>
  );
};
export default App;
