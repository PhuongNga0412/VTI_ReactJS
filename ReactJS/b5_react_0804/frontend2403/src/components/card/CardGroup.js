import React from "react";
import "./Card.css";

const cards = [
    {
        id: "1",
        img: "https://i.pinimg.com/564x/a9/8c/ef/a98cef81d9968637981fed0a46fccd9b.jpg",
        title: "This is for your item 1",
        desc: "This is description",
    },
    {
        id: "2",
        img: "https://i.pinimg.com/564x/3a/a6/22/3aa622c900041633f8fb3f6917cf5904.jpg",
        title: "This is for your item 2",
        desc: "This is description",
    },
    {
        id: "3",
        img: "https://i.pinimg.com/564x/77/f2/e4/77f2e4caf563e06b6fe9efb542ee76fc.jpg",
        title: "This is for your item 3",
        desc: "This is description",
    },
];

const CardGroup = () => {
    return (
        <div className="card-container">
            {cards.map((item, index) => {
                return (
                    <div className="card" key={item.id}>
                        <div className="card__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="card__content">
                            <h1 className="card__title">{item.title}</h1>
                            <p className="card__desc">{item.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default CardGroup;
