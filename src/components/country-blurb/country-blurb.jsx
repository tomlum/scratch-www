const classNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');

require('./country-blurb.scss');

const CountryBlurb = props => (
    <div className={classNames('country-blurb', props.className)}>
        {props.className === 'regular' &&
            <div className="half">
                <img
                    className="large"
                    src={props.large_image}
                />
            </div>
        }
        <div className="half">
            <div className="country-info">
                <img src={props.icon} />
                <div className="country-text">
                    <h5>{props.title}</h5>
                    <div className="location">
                        <img src={props.list_icon} />
                        <span>{props.country}</span>
                    </div>
                </div>
            </div>
            <p>{props.paragraph}</p>
        </div>
        {props.className === 'reverse' &&
            <div className="half">
                <img
                    className="large"
                    src={props.large_image}
                />
            </div>
        }
    </div>
);

CountryBlurb.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    list_icon: PropTypes.string,
    country: PropTypes.string,
    paragraph: PropTypes.string,
    className: PropTypes.string,
    large_image: PropTypes.string
};

module.exports = CountryBlurb;
