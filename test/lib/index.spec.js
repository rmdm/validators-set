describe('validators', function () {

    var v = require('../../lib/index')

    describe('min validator', function () {

        it('checks lower bound of value', function () {
            expect(v.min.check(2, 1)).toBe(true)
            expect(v.min.check(1, 2)).toBe(false)
            expect(v.min.check('10', '5')).toBe(true)
        })

        it('returns false if either of passed args is not a number', function () {
            expect(v.min.check({}, 1)).toBe(false)
            expect(v.min.check(1, {})).toBe(false)
            expect(v.min.check('z', 'a')).toBe(false)
        })

    })

})
