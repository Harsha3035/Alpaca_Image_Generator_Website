import {alpacaConfig} from "./alpacaConfig";

const getRandomItemFromArray = (arr) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};

export const randomize = () => {
    return alpacaConfig.map((feature) => {
        return {
            ...feature,
            items: [getRandomItemFromArray(feature.items)],
        };
    });
};