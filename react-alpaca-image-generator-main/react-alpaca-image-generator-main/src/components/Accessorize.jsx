const Accessorize = ({attributes, setFeatureItem}) => {
    return (
        <button className={`btn ${attributes.selected ? "selected" : ""}`}
            key={attributes.id}
            onClick={()=> setFeatureItem(attributes)}
        >
            {attributes.label}
        </button>
    )
}

export default Accessorize;