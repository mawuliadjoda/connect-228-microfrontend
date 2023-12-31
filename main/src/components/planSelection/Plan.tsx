import React from 'react'

type PlanProperties = {
    icon: any
    title: any,
    features: any,
    url: any
}

const Plan = ({ icon, title, features, url }) => {
    return (
        <div className="flex gap-4 items-center">
            {icon}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{features.join(" · ")}</p>
            </div>
            {/* <span className="ml-auto font-medium">${price}</span> */}
        </div>
    )
}

export default Plan