import React from 'react';
import './TaskSection.sass'
import svg from './task__svg.svg'
import TaskCard from "./TaskCard/TaskCard";
const TaskSection = () => {
    return (
        <section className="task">
            <div className="task__svg">
                <img src={svg} alt="dots"/>
            </div>
            <div className="container task__container">
                <div className="task__title">
                    <h2 className="task__h2">Задачи</h2>
                    <p className="task__p">
                        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been
                    </p>
                </div>
                <div className="task__wrapper">
                    <TaskCard number={1} text="Представление и продвижение Halal-продуктов и услуг на мировом рынке, способствование укреплению их позиций на международной арене."/>
                    <TaskCard number={2} text="Содействие в реализации и развитии халал бизнес проектов и Халал продукт в странах СНГ."/>
                    <TaskCard number={6} text="Содействие в укреплении международных отношений, предоставление площадки для обмена опытом и знаниями между участниками, развитие бизнес-связей и партнерств между производителями и покупателями из разных стран и регионов."/>
                    <TaskCard number={6} text="Содействие в укреплении международных отношений, предоставление площадки для обмена опытом и знаниями между участниками, развитие бизнес-связей и партнерств между производителями и покупателями из разных стран и регионов."/>
                    <TaskCard number={6} text="Содействие в укреплении международных отношений, предоставление площадки для обмена опытом и знаниями между участниками, развитие бизнес-связей и партнерств между производителями и покупателями из разных стран и регионов."/>
                </div>
            </div>
        </section>
    );
};

export default TaskSection;