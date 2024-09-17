import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                show only dashboard layout
                {children}
            </div>

        </>
    )
}