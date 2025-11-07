import { Box, Center, Button } from "@mantine/core"
import { Link } from "react-router-dom"
import NotFoundImg from './../../assets/NotFound.png'
import styles from './NotFoundPage.module.scss'

export default function NotFoundPage(){
    return(
        <Center>
            <Box w={707} h={556} bg='white' mt={72} p={32}>
                <Box mb={32} className={styles.textContent}>
                    <Box>
                        <h2>Упс! Такой страницы не существует</h2>
                        <p>Давайте перейдем к началу</p>
                    </Box>
                    <Link to="/vacancies/moscow">
                        <Button size="md" mt="md">На главную</Button>
                    </Link>
                </Box>

                <img src={NotFoundImg} alt='Страница не найдена'/>
            </Box>
        </Center>

    )
}