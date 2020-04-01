import React from 'react'
import InnerStats from './InnerStats'

const stateItems = [
    { days: 2, headerText: 'дня', text: 'веселья' },
    { days: 15, headerText: 'групп', text: 'на сцене' },
    { days: 3, headerText: 'сцены', text: 'для артистов' },
    { days: 80, headerText: 'площадь', text: 'зала' },
]

const Stats = () => {
    return (
        <div className="wrapper bg-grey">
            <div className="stats">
                {
                    stateItems.map(stateItem => {
                        return(
                            <InnerStats {...stateItem} key={stateItem.days}/>
                            
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Stats;