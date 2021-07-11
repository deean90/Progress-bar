import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'


const ProgressBar = (props) => {

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null)
    const {
        size,
        progress,
        strokeWidth,
        strokeColor,
    } = props

    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = Math.PI * radius * 2;

    useEffect(() => {
        const progressOffset =  ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);

    return (
        <ProgressWrapper>
            <svg
                className="circle-bar"
                width={size}
                height={size}
            >
                <circle
                    className="circle-progress"
                    ref={circleRef}
                    stroke={strokeColor}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                >
                </circle>
            </svg>
        </ProgressWrapper>
    )
}

const ProgressWrapper = styled.div`
    transform: rotate(-90deg);
    .circle-progress{
        fill: none;
        transition: stroke-dashoffset 850ms ease-in-out;
    }
`

export default ProgressBar
