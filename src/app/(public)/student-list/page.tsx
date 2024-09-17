import Link from "next/link";

export default function StudentList() {
    return (
        <>
            <h1>Student List</h1>
            <div className="my-4">
                <Link href="/student-list/usman" className="p-4 mx-2 bg-green-300">usman</Link>
                <Link href="/student-list/moin" className="p-4 mx-2 bg-green-300">moin</Link>
                <Link href="/student-list/arsalan" className="p-4 mx-2 bg-green-300">arsalan</Link>
                <Link href="/student-list/34" className="p-4 mx-2 bg-green-300">34</Link>
                <Link href="/student-list/67" className="p-4 mx-2 bg-green-300">67</Link>
                <Link href="/student-list/83" className="p-4 mx-2 bg-green-300">83</Link>

            </div>
        </>
    )
}