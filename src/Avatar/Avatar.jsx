import React, {
    memo,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useInitials from './hooks/useInitials/useInitials';
import styles from './styles.scss';
import UserStatus from '../UserStatus/UserStatus';

const noop = () => {};

const Avatar = ({
    lastName,
    name,
    onError = noop,
    onLoad = noop,
    responsive,
    size = 'medium',
    src,
    status,
    title,
}) => {
    const imgNode = useRef(null);
    const [isImageHidden, setIsImageHidden] = useState(true);
    const [initials, backgroundColorClass] = useInitials(name, lastName);

    const handleLoad = useCallback((e) => {
        if (e.target.src === imgNode.current.src) {
            setIsImageHidden(false);
            onLoad(e);
        }
    }, [onLoad, imgNode]);

    const handleError = useCallback((e) => {
        if (e.target.src === imgNode.current.src) {
            onError(e);
        }
    }, [onError]);

    useLayoutEffect(() => {
        setIsImageHidden(!imgNode.current?.complete);
    }, [src]);

    return (
        <div
            className={classNames(
                styles[size],
                responsive && styles.responsive,
                status && styles.hasStatus
            )}
            data-testid="avatar"
        >
            <div className={styles.positioner}>
                <div
                    className={classNames(
                        styles.avatar,
                        status && styles[`${size}Avatar`],
                        backgroundColorClass
                    )}
                >
                    <span
                        className={isImageHidden ? styles.initials : styles.hiddenInitials}
                        data-testid="initials"
                        title={title}
                    >
                        {initials}
                    </span>
                    {src && (
                        <img
                            key={src}
                            ref={imgNode}
                            alt={`${name} ${lastName}`}
                            className={isImageHidden ? styles.hiddenImage : styles.image}
                            loading="lazy"
                            onError={handleError}
                            onLoad={handleLoad}
                            src={src}
                            title={title}
                        />
                    )}
                </div>
                {status && (
                    <UserStatus size={size} status={status} />
                )}
            </div>
        </div>
    );
};

Avatar.propTypes = {
    lastName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    /** Hide component when wrapper is shorter than avatar width */
    responsive: PropTypes.bool,
    size: PropTypes.oneOf(['huge', 'big', 'medium', 'small']),
    src: PropTypes.string,
    status: PropTypes.oneOf(['available', 'away', 'invisible', 'unavailable']),
    title: PropTypes.string,
};

export default memo(Avatar);
