import React, { useRef } from 'react';

const Card = ({ children }) => {
    const cardRef = useRef();

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        cardRef.current.style.setProperty('--start', angle + 60);
    };

    return (
        <div className="card" ref={cardRef} onMouseMove={handleMouseMove}>
            <div className="glow">{children}</div>
        </div>
    );
};

export default Card;
