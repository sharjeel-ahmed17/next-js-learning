"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../components/header/Header";

export default function Home() {

    const [name, setName] = useState("sharjeel");

    const router = useRouter();
    const navigate = (item: string) => {
        router.push(item)
    }

    const handleClick = () => {
        alert("Feedback submitted successfully")

    }
    const handleChangeName = () => {
        setName("usman")
    }

    const InnerComp = () => {
        return (
            <div>
                <h3>Inner Component</h3>
                <p>This is an inner component</p>
            </div>
        )
    }
    return (
        <>
            {/* <Header /> */}
            <h1 className="text-3xl  text-center mt-5">Home Page</h1>
            {/* linking */}
            <div className="mb-4">
                <h2 className="mb-4 bg-blue-500 p-3 ">Linking</h2>

                <Link href="/" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">home</Link>
                <Link href="/about" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">about</Link>
                <Link href="/contact" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">contact</Link>
                <Link href="/feedback" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">feed back</Link>

            </div>

            {/* navigation */}
            <div className="mb-4">
                <h2 className=" bg-blue-500 p-3 ">Navigation </h2>
                <button className="mt-10 mx-auto p-3 bg-yellow-500 ml-4 rounded-lg" onClick={() => router.push("/about")}>go to about page</button>

                <button className="mt-10 mx-auto p-3 bg-yellow-500 ml-4 rounded-lg" onClick={() => navigate("/contact")}>go to contact page</button>

                <button className="mt-10 mx-auto p-3 bg-yellow-500 ml-4 rounded-lg" onClick={() => navigate("/feedback")}>go to feedback page</button>
            </div>

            {/* event and function  */}
            <div>
                <h2 className=" bg-blue-500 p-3 ">Event Function And State</h2>
                <button className="mt-10 mx-auto p-3 bg-yellow-500 ml-4 rounded-lg" onClick={() => alert("hello world")}>click me</button>
                <button className="mt-10 mx-auto p-3 bg-yellow-500 ml-4 rounded-lg" onClick={handleClick}>second click me</button>
                <button className="mt-10 mx-auto p-3 bg-yellow-500 ml-4 rounded-lg mb-4" onClick={handleChangeName}>change name </button>
                <p className="capitalize font-thin text-center p-3 bg-green-400">{name}</p>

            </div>
            {<InnerComp />}
        </>
    )
}