const Style = ({attribute, attributes, changeImage}) => {

    return (
        <button className={`btn ${attribute.selected ? "selected" : ""} `}
                onClick={() => changeImage(attributes, attribute)}>
            {attribute.label}
        </button>
    )
}

export default Style;