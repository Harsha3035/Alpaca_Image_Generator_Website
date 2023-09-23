import React from "react";

const Button = ({emoji, action, random, name}) => {
    return (
        <button className="bottom-button" onClick={() => {
            if (random) {
                let data = action()
                let config = random[1]
                let changeImage = random[0]

                data.map((element1, index) => {
                    changeImage(config[index], element1.items[0])
                })
            } else {
                action()
            }
        }}>{emoji} {name}</button>
    );
}

export default Button;