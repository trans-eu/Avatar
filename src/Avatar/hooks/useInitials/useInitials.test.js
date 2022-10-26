import useInitials from './useInitials';

describe('useInitials hook', () => {
    const colorClassPattern = /colorClass[0-9]+/;

    describe('given both first and last name as arguments', () => {
        const firstName = 'Donald';
        const lastName = 'Trump';
        const initials = 'DT';
        const initialsPattern = /^[A-Z]{2}$/;

        it('should return an array of exactly 2 string elements.', () => {
            const results = useInitials(firstName, lastName);
            expect(Array.isArray(results)).toBe(true);
            expect(results.length).toBe(2);
            expect(typeof results[0]).toBe('string');
            expect(typeof results[1]).toBe('string');
        });

        it('should compute initials correctly.', () => {
            const [computedInitials] = useInitials(firstName, lastName);
            expect(computedInitials).toMatch(initialsPattern);
            expect(computedInitials).toBe(initials);
        });

        it('should compute colorClass for names correctly.', () => {
            const [, colorClass] = useInitials(firstName, lastName);
            expect(colorClass).toMatch(colorClassPattern);
        });
    });
});
