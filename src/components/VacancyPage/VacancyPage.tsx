import { useParams  } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../hooks/redux";
import {useEffect} from 'react'
import { Box} from "@mantine/core";
import JobsCard  from '../JobsCard/JobsCard'
import styles from './VacancyPage.module.scss'
import { fetchJobById } from "../../store/reducer/JobThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";


export default function VacancyPage(){
  const { id } = useParams();
  const dispatch = useTypedDispatch();

  const { selectedJob, status} = useTypedSelector((s) => s.jobs);

  useEffect(() => {
    if (!id) return;
    dispatch(fetchJobById(id));
    }, [id, dispatch]);

    
    if (status === "loading") {
        return <p>Загрузка вакансии...</p>;
    }


    if (status === "error" || !selectedJob) {
        return <NotFoundPage/>;
    }

    return (
        <Box className={styles.container}>
            <JobsCard {...selectedJob} isOpenVacancyPage={true}/>
            <Box mt="20px"  w={658} bg="white" className={styles.info}> 
                <div dangerouslySetInnerHTML={{ __html: selectedJob.description || '' }} />
            </Box>
        </Box>
    );
}