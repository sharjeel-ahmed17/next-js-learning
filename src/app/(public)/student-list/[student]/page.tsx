export default function Student({ params, searchParams }: {
    params: { student: string },
    searchParams: { id: string },
}) {

    return (
        <div>
            My student is {params.student}.
        </div>
    )
}

