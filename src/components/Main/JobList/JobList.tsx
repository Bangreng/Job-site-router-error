import { useTypedSelector, useTypedDispatch } from "../../../hooks/redux"
import JobsCard from "../../JobsCard/JobsCard";
import { Stack, Pagination, Box } from "@mantine/core";
import { setPage } from "./../../../store/reducer/JobSlice";

type JobListProps = {
    updateURL: (updates: { page?: number }) => void;
};

export default function JobList({ updateURL }: JobListProps) {
    const { jobs, status, error, pagination } = useTypedSelector((state) => state.jobs);
    const dispatch = useTypedDispatch();

    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
        updateURL({ page });
    };

    if (status === "error") return <div>Ошибка: {error}</div>;

    return (
        <Stack gap='16px' align="center">
            {jobs.map((vacancy) => (
                <JobsCard key={vacancy.id} {...vacancy} />
            ))}

            {jobs.length > 0 && (
                <Box mb={50}>
                    <Pagination
                        value={pagination.currentPage}
                        onChange={handlePageChange}
                        total={100}
                    />
                </Box>
            )}
        </Stack>
    )
}