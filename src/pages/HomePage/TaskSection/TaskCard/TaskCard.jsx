import React from 'react';
import './TaskCard.sass'
const TaskCard = ({number,text}) => {
    return (
        <div className="task-card">
            <div className="task-card__numb">
                {number}
            </div>
            <p className="task-card__p">
                {text}
            </p>
        </div>
    );
};

export default TaskCard;