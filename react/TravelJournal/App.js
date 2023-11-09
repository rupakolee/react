import React from 'react'
import Header from "./Components/Header"
import Page from "./Components/Page"
import Data from "./Data"

export default function App() {
    const mapped = Data.map((item) => {
        return <Page 
                    key={item.id}
                    item={item}
                />
    })
    return (
        <div>
    <Header />
    {mapped}
        </div>
    )
}