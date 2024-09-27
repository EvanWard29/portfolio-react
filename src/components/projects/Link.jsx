import PropTypes from "prop-types";

const Link = ({url, svg}) => {
    return (
        <a href={url} className={"text-decoration-none p-2"} target={"_blank"}>
            <img src={svg} alt={url} width={24} height={24}/>
        </a>
    )
}

Link.propTypes = {
    url: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired
}

export default Link;