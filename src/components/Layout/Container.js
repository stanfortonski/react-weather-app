import React from 'react'

export default function Container({ children }) {
    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col h-100 d-flex justify-content-center align-items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
