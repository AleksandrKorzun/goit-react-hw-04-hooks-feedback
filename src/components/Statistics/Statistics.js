import { ClassNames } from '@emotion/react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <p><span className={style.span}>Good</span>: {good}</p>
            <p><span className={style.span}>Neutral</span>: {neutral}</p>
            <p><span className={style.span}>Bad</span>: {bad}</p>
            <p><span className={style.span}>Total</span>: {total}</p>
            <p><span className={style.span}>Positive feedback</span>: {positivePercentage ? Math.floor(positivePercentage) : 0} %</p>
        </div>
    ); 
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}