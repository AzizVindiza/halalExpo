import React from 'react';
import "./RequirementSection.sass"
import nambers1 from "./nambers1.svg"
import nambers2 from "./nambers2.svg"
import nambers3 from "./nambers3.svg"


const RequirementSection = () => {
    return (
        <section className={'requirement'}>
            <div className="container requirement__container">

                <div className="requirement__wrapper">
                    <h2 className="requirement__h2">Условия участия в Food зоне на Halal Trade Expo включают следующие требования</h2>
                    <div className="requirement__text">
                        <div className="task-card__numb">
                            1
                        </div>
                        <div className="requirement__txt">
                            <h3 className="requirement__h3">Предоставление списка ингредиентов</h3>
                            <p className="requirement__p">Участники должны предоставить список всех используемых ингредиентов, которые будут использоваться при приготовлении блюд. Это включает информацию о каждом ингредиенте, его происхождении и соответствии халяльным стандартам.</p>
                        </div>
                    </div>
                    <div className="requirement__text">
                        <div className="task-card__numb">
                            2
                        </div>
                        <div className="requirement__txt">
                            <h3 className="requirement__h3">Указание количества планируемых блюд</h3>
                            <p className="requirement__p">Участники должны предоставить информацию о количестве блюд, которые они планируют приготовить и представить в Food зоне. Это поможет организаторам адекватно оценить потребности в пространстве и оборудовании.</p>
                        </div>
                    </div>
                    <div className="requirement__text">
                        <div className="task-card__numb">
                            3
                        </div>
                        <div className="requirement__txt">
                            <h3 className="requirement__h3">Предоставление списка ингредиентов</h3>
                            <p className="requirement__p">Участники должны предоставить список всех используемых ингредиентов, которые будут использоваться при приготовлении блюд. Это включает информацию о каждом ингредиенте, его происхождении и соответствии халяльным стандартам.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default RequirementSection;