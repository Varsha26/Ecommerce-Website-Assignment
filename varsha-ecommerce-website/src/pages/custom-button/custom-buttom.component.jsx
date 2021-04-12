import React from 'react'
import './custom-buttom.component.scss'
export const CustomButton = ({ children, ...otherProps}) => {
    return (
        <div>
            <button className='custom-button' {...otherProps}>
                {children}
            </button>
        </div>
    )
}
