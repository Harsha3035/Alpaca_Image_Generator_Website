import React, {useState, useEffect} from "react";
import AlpacaArt from "./AlpacaArt";
import {alpacaConfig} from "../utils/alpacaConfig";
import {getImage} from "../utils/getImage";
import {downloadImage} from "../utils/downloadImage";
import Button from "./Button";
import Accessorize from "./Accessorize";
import Style from "./Style";
import {randomize} from "../utils/randomize";

const Alpaca = () => {
    const [config, setConfig] = useState(alpacaConfig);
    const [bg, setBg] = useState(null);
    const [neck, setNeck] = useState(null);
    const [nose, setNose] = useState(null);
    const [mouth, setMouth] = useState(null);
    const [eyes, setEyes] = useState(null);
    const [hair, setHair] = useState(null);
    const [leg, setLeg] = useState(null);
    const [ears, setEars] = useState(null);
    const [feature, setFeature] = useState(config[0])
    const [accessories, setAccessories] = useState(null);

    const changeImage = (feature, attribute) => {
        const {directory: dir} = feature;
        const {filename: bgImage} = attribute;

        const configClone = [...config];
        const selectedFeatureIndex = configClone.indexOf(feature);
        const selectedAttrIndex =
            configClone[selectedFeatureIndex].items.indexOf(attribute);

        configClone[selectedFeatureIndex].items.forEach(
            (attr) => (attr.selected = false)
        );
        configClone[selectedFeatureIndex].items[selectedAttrIndex].selected = true;

        setConfig(configClone);

        getImage(dir, bgImage, (image) => {
            switch (dir) {
                case "backgrounds":
                    setBg(image);
                    break;
                case "neck":
                    setNeck(image);
                    break;
                case "nose":
                    setNose(image);
                    break;
                case "eyes":
                    setEyes(image);
                    break;
                case "ears":
                    setEars(image);
                    break;
                case "mouth":
                    setMouth(image);
                    break;
                case "leg":
                    setLeg(image);
                    break;
                case "hair":
                    setHair(image);
                    break;
                case "accessories":
                    setAccessories(image);
                    break;
                default:
                    break;
            }
        });
    };

    const setFeatureItem = feature => {
        const configClone = [...config]
        const selectedIndex = configClone.indexOf(feature)
        configClone.forEach(ft => (ft.selected = false))
        configClone[selectedIndex].selected = true
        setConfig(configClone)
        setFeature(feature)
    }

    useEffect(() => {
        const renderAlpaca = () => {
            config.forEach((feature) => {
                const attribute = feature.items.filter(
                    (at) => at.filename === "default"
                )[0];
                changeImage(feature, attribute);
            });
        };
        renderAlpaca();
    }, []);

    const alpacaAttr = {
        bg,
        neck,
        nose,
        mouth,
        eyes,
        hair,
        leg,
        ears,
        accessories,
    };


    return (
        <div className="container">
            <div className="app">
                <h1>ALPACA GENERATOR</h1>
                <div className="left">
                    <AlpacaArt attr={alpacaAttr}/>
                    <div className="blockOfButtons">
                        <Button action={randomize} random={[changeImage, config]} emoji={'🔀'} name={'Random'}/>
                        <Button action={downloadImage} emoji={'🌄'} name={'Download'}/>
                    </div>
                </div>
                <div className="right">
                    <div className='accessoriesWindow blockOfContent'>
                        <h2>Accessorize the Alpaca's</h2>
                        <div className='button-container'>
                            {config.map(attributes => (
                                <Accessorize key={attributes.id} attributes={attributes}
                                             setFeatureItem={setFeatureItem}/>
                            ))}
                        </div>
                    </div>
                    <div className='styles blockOfContent'>
                        <h2>Style</h2>
                        <div className='button-container'>
                            {feature.items.map(attribute => (
                                <Style key={attribute.id} attribute={attribute} attributes={feature}
                                       changeImage={changeImage}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Alpaca;
