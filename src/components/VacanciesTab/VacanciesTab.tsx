import { Tabs } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mantine/core';
import styles from  './VacanciesTab.module.scss'

export default function VacanciesTabs() {
    const location = useLocation();
    const navigate = useNavigate();


    function activeTab(){
        if(location.pathname.includes('/moscow')){
            return 'moscow'
        }

        if(location.pathname.includes('/petersburg')){
            return 'petersburg'
        }

        return 'moscow'
    }

        function handkeChangeTab(city: string | null){
        if (city === 'moscow') {
            navigate('/vacancies/moscow');
        } else if (city === 'petersburg') {
            navigate('/vacancies/petersburg');
        }
    };

    return (
        <Box mb={12}>
            <Tabs value={activeTab()} onChange={handkeChangeTab} classNames={{ list: styles.tabsList }}>
                <Tabs.List>
                    <Tabs.Tab value="moscow">Москва</Tabs.Tab>
                    <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </Box>
    );
}