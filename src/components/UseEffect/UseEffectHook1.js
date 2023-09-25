import React, { useEffect, useState } from 'react'


const TestCom = () => {
    useEffect(() => {
        console.log('component mount');
        return () => {
            console.log('component unmount');
        };
    }, []);
    return <div>Test component</div>
}


export default function UseEffectHook1() {
    const [count, SetCount] = useState(0)
    useEffect(() => {
    //    console.log('render');
    }, [count])

    const [showComponent, SetShowComponent] = useState(false)

    return (
        <>
            <div> component did update
                <p>Count : {count}</p>
                <button onClick={() => { SetCount(count + 1) }}>increment</button>
            </div>
            <br />
            <div> component unmount

                <br />
                <button onClick={() => { SetShowComponent(!showComponent) }}>
                    {!showComponent ? "Show Component" : "Hide Component"}
                </button>
                <div>{showComponent ? <TestCom /> : null}</div>
            </div>
        </>
    )
}
