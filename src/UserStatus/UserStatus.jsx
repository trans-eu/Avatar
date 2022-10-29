import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const UserStatus = ({ size, status }) => (
    <div className={styles[`${size}Status`]}>
        <div
            data-testid="status"
            className={styles[status]}
        />
    </div>
);

UserStatus.propTypes = {
    size: PropTypes.oneOf(['huge', 'big', 'medium', 'small']),
    status: PropTypes.oneOf([
        'available',
        'away',
        'invisible',
        'unavailable',
    ]).isRequired,
};

export default UserStatus;
