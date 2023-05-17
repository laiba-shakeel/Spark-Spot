import React from 'react'

export default function GradientButton({children, height, borderRadius, width, color, backgroundColor1, backgroundColor2, fontWeight, title, onClick }) {

    const styles = {
        button: {
            height: height && height,
            minHeight: "38px",
            width: width && width,
            minWidth: !width && '170px',
            color,
            fontWeight: fontWeight && fontWeight,
            borderRadius: borderRadius ? borderRadius : "5px",
            border: 'none',
            background: `linear-gradient(to right, ${backgroundColor1}, ${backgroundColor2})`,
            // padding: '4px 25px',
            textAlign: 'center',
            fontSize: '15px',
            cursor: 'pointer',
            onClick:onClick
            
            
        }
    }

    return (
        <button
            style={styles.button}
            className='d-flex align-items-center justify-content-center'
        >
            {title}{children}
        </button>
    )

}