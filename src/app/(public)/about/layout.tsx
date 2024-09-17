"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    console.log(usePathname());
    const pathname: string = usePathname();

    return (
        <>
            <div>
                {
                    pathname !== "/about/about-teacher" ? <div>

                        <Link href="/about" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">about main</Link>
                        <Link href="/about/about-student" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">about student</Link>
                        <Link href="/about/about-teacher" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">about teacher </Link>
                    </div> : <Link href="/about" className="p-3 ml-2 bg-blue-200 text-green-900 font-medium capitalize">go to about page </Link>

                }


                {children}
            </div>

        </>
    )
}