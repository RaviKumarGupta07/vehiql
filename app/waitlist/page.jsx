"use client";
import React from 'react'
import Head from "next/head";

const WaitlistPage = () => {
    return (
        <>
            <Head>
                <title>Waitlist</title>
            </Head>
            <div className="mt-25 fixed w-full">
                <div className="aspect-video w-full">
                    <iframe style={{ width: "100%" }}
                        height="569"
                        src="https://vehiql-waitlist-rk.created.app"
                        title="Waiting List Landing Page"
                        frameBorder="0">
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default WaitlistPage