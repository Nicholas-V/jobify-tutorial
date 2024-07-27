import CreateJobForm from "@/components/CreateJobForm";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient, useQueryClient,
} from '@tanstack/react-query';

function AddJobPage() {
    const queryClient = new QueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CreateJobForm/>
        </HydrationBoundary>
    );
}

export default AddJobPage;