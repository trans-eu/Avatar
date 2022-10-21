import styles from './styles.scss';

const useInitials = (firstName = '', lastName = '') => {
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    const fullName = (firstName + lastName).trim();

    // Sum up code values of each character in the name string.
    const fullNameNumericalValue = [...fullName]
        .reduce((sum, char) => sum + char.charCodeAt(0), 0);

    // There are (N+1) color classes in the stylesheet including the default one.
    // So the actual number of available color classes (colors in the palette)
    // to choose from is (N).
    const colorPaletteSize = Object.values(styles).length - 1;

    // The color index is:
    // 0 (zero) for the edge case when both firstName and lastName are empty strings
    // OR:
    // a number in range [1..N], where (N) is the number of colors in the palette.
    let colorIndex = 0;
    if (fullNameNumericalValue !== 0) {
        colorIndex = (fullNameNumericalValue % colorPaletteSize) + 1;
    }
    const colorClass = styles[`colorClass${colorIndex}`];

    return [initials, colorClass];
};

export default useInitials;
