import React from 'react';
import svg from "./Clip path group.png"
import "./tasksSection.sass"
const TasksSection = () => {
    return (
        <section className={'tasksSection'}>
            <div className="container tasksSection__container">
                <div className="tasksSection__svg">
                    <img className={'tasksSection__left'} src={svg} alt=""/>
                </div>
                <h2 className={'purpose__h2'}>Задачи</h2>
                <p className="tasksSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="tasksSection__wrapper">
                    <div className="tasksSection__block">
                        <div className="tasksSection__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="tasksSection__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="tasksSection__block">
                        <div className="tasksSection__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="tasksSection__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="tasksSection__block">
                        <div className="tasksSection__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="tasksSection__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="tasksSection__block">
                        <div className="tasksSection__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="tasksSection__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TasksSection;