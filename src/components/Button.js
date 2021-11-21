import PropTypes from 'prop-types'


const Button = ({onClick, text,color}) => {
    return (
    <button style={{background:color}} onClick={onClick}  className='btn'>{text}</button>
    )
    
}

Button.propTypes= {
    text : PropTypes.string,
    onClick : PropTypes.func
}

export default Button
