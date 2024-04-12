import React from "react";
const CardItem = ({ img, title, desc }) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

const Card = () => {
    const cardItem = [
        {
            img: "https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340",
            title: "Card 1",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, possimus nesciunt! Adipisci, optio error. Distinctio, natus. Aperiam doloribus beatae nihil.",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            title: "Card 2",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, possimus nesciunt! Adipisci, optio error. Distinctio, natus. Aperiam doloribus beatae nihil.",
        },
        {
            img: "https://cdn.create.vista.com/api/media/small/349065364/stock-photo-abstract-wavy-background-fractal-art",
            title: "Card 3",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, possimus nesciunt! Adipisci, optio error. Distinctio, natus. Aperiam doloribus beatae nihil.",
        },
    ];
    return (
        <div className="card-container">
            {cardItem.map((item, index) => (
                <CardItem
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
};
export default Card;
