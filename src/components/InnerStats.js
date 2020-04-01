import React, { useState, useEffect } from 'react';

const InnerStats = ({ days, headerText, text }) => {

    const [initState, setInitState] = useState(0)

    useEffect(() => {
        if (initState <= days) {
            const timer = setInterval(() => { setInitState((initState) => ++initState)}, 20);
            return () => clearInterval(timer)  
        } ;
        
    }, [initState, days])

    return (
        <div className="stats-item">
            <h2>{initState}</h2>
            <h3>{headerText}</h3>
            <p>{text}</p>
        </div>
    );
}

export default InnerStats;

// const [count, setCount] = React.useState(0);
// React.useEffect( () => {
//   const i_id = setInterval(() => {
//     setCount(currCount => currCount+1)
//   },3000);
//   return () => {
//     clearInterval(i_id);
//   }
// },[]);