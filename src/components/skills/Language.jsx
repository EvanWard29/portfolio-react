import PropTypes from "prop-types";

const Language = ({description, percent}) => {
    return (
        <>
            <div className="row justify-content-between align-items-center">
                <div className="col text-start">
                    <p className="mb-1 lead">{description}</p>
                </div>
                <div className="col text-end lead">
                    <p className="mb-1 text-muted">{percent}</p>
                </div>
            </div>
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    );
}

Language.propTypes = {
    description: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
}

export default Language;