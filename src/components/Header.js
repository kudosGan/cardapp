import PropTypes from 'prop-types'
import Button from'./Button'



const Header = ({title}) => {
    return (
        <header className='header'>
            <h1> {title}  </h1>
            <Button color='blue' text = 'play' />
           
        </header>
                    
    )
}
Header.defaultProps ={
    title:'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header
