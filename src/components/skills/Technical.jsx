import PropTypes from "prop-types";

const Technical = ({description}) => {
    return (
        <>
            <li className={"mb-2"}>{description}</li>
        </>
    )
}

Technical.propTypes = {
    description: PropTypes.string.isRequired
}

export default Technical;