import PropTypes from "prop-types";

const Quality = ({description}) => {
    return (
        <>
            <li className={"mb-2"}>{description}</li>
        </>
    )
}

Quality.propTypes = {
    description: PropTypes.string.isRequired
}

export default Quality;