import PropTypes from 'prop-types';
import style from './Section.module.css'

const Section = ({title, children}) => {
    return (
        <section className={style.section}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired
}