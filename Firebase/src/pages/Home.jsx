import React from 'react'
import PropTypes from 'prop-types';
import '../styles/pages/Home.css'

const Home = ({ users }) => {
    return (
        <div className='home'>
            Welcome <span>{users?.email}</span>
        </div>
    )
}

Home.propTypes = {
    users: PropTypes.shape({
        email: PropTypes.string
    })
};

export default Home
