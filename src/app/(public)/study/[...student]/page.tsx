export default function Student({ params }: { params: { student: string } }) {
    return (
        <>

            <h1>day {params.student[0]}</h1>
            <p>lecture {params.student[1]}</p>
            <p>teacher :  {params.student[2]}</p>
        </>
    )
}