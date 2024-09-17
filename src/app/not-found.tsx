import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1 className="p-5">page is not found.....</h1>
            <Link href='/' className="p-3 bg-blue-600 mt-5">go back home</Link>
        </>
    )
}