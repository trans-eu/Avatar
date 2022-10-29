import React from 'react';
import {
    fireEvent,
    render,
} from '@testing-library/react';
import Avatar from '../Avatar';
import styles from '../styles.scss';

describe('Avatar', () => {
    const setup = (propsOverrides) => {
        const props = {
            name: 'John',
            lastName: 'Doe',
            ...propsOverrides,
        };

        const { container, rerender, queryByTestId } = render(<Avatar {...props} />);

        return {
            container,
            rerender: newProps => rerender(<Avatar {...newProps} />),
            props,
            image: () => container.querySelector('img'),
            initials: () => queryByTestId('initials'),
            avatar: () => queryByTestId('avatar'),
            status: () => queryByTestId('status'),
        };
    };

    it('should set image src to the one passed in props', () => {
        const props = {
            src: '/custom-url',
        };
        const { image } = setup(props);
        const url = new URL(image().src);
        expect(url.pathname).toEqual(props.src);
    });

    it('should show initials', () => {
        const { initials, props } = setup();
        expect(initials()).toHaveTextContent(`${props.name[0]}${props.lastName[0]}`);
    });

    describe('image load handling', () => {

        it('should invoke onLoad after load image', () => {
            const onLoad = jest.fn();
            const { image } = setup({ onLoad, src: 'foo' });

            fireEvent.load(image());
            expect(onLoad).toHaveBeenCalled();
        });

        it('should invoke onError function if Avatar can\'t load image', () => {
            const onError = jest.fn();
            const { image } = setup({ onError, src: 'foo' });

            fireEvent.error(image());
            expect(onError).toHaveBeenCalled();
        });
    });

    describe('size prop', () => {
        it('should set medium as the default size', () => {
            const { avatar } = setup({ size: undefined });
            expect(avatar()).toHaveClass(styles.medium);
        });

        it('should add small className', () => {
            const { avatar } = setup({ size: 'small' });
            expect(avatar()).toHaveClass(styles.small);
        });

        it('should add big className', () => {
            const { avatar } = setup({ size: 'big' });
            expect(avatar()).toHaveClass(styles.big);
        });

        it('should add huge className', () => {
            const { avatar } = setup({ size: 'huge' });
            expect(avatar()).toHaveClass(styles.huge);
        });
    });

    describe('status', () => {
        it('should show status if status is passed in props', () => {
            const { status } = setup({ status: 'available' });
            expect(status()).toBeTruthy();
        });

        it('should not show status if status is not passed in props', () => {
            const { status } = setup();
            expect(status()).toBeFalsy();
        });
    });
});
