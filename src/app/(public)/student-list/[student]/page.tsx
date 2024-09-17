export default function Student({ params }: {
    params: { student: string },

}) {

    return (
        <div>
            My student is {params.student}.
        </div>
    )
}

