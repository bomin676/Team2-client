import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-100">
            <div
                className="relative w-[412px] h-[917px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 shadow-xl rounded-2xl overflow-hidden border border-neutral-200"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                {/* 앱 내부 스크롤 영역 */}
                <main className="w-full h-full overflow-y-auto overscroll-contain">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
