import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './styles.scss';
const src = 'https://pbs.twimg.com/profile_images/2553092547/4square_avatar_400x400.jpg';

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: ['huge', 'big', 'medium', 'small'],
            control: { type: 'select' },
        },
        status: {
            options: ['available', 'away', 'invisible', 'unavailable'],
            control: { type: 'select' },
        },
    },

};

const Template = (args) => <Avatar {...args} />;


export const WithInitials = Template.bind({});
WithInitials.args = {
    lastName: 'Doe',
    name: 'Jane',
    title: '',
};

export const WithImage = Template.bind({});
WithImage.args = {
    lastName: 'Doe',
    name: 'Jane',
    src: src,
    title: '',

};
const ResponsiveTemplate = (args) => (
    <div className={styles.resize}>
        <Avatar {...args} />
    </div>
);

export const Responsive = ResponsiveTemplate.bind({});
Responsive.args = {
    lastName: 'Doe',
    name: 'Jane',
    src: src,
    responsive: true,
    title: '',

};
