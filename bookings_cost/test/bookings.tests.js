describe("In bookingCost", () => {
    it("This booking should cost: R45 * 3 = R135.00 and the function should return that if called with this parameter", () => {
        assert.deepEqual(bookingCost({check_in_day: 'Monday', duration: 3, cat_name : 'Snowy'}), 135.00);
    })

    it("This booking should cost: R45 * 3 = R135.00 * 0.75 = 101.25 and the function should return that if called with this parameter", () => {
        assert.deepEqual(bookingCost({check_in_day: 'Wednesday', duration: 3, cat_name : 'Snowy'}), 101.25);
    })

    it("This booking should cost: R45 * 3 = R135.00 * 0.85 = 114.75 and the function should return that if called with this parameter", () => {
        assert.deepEqual(bookingCost({check_in_day: 'Friday', duration: 3, cat_name : 'Snowy'}), 114.75);
    })
})
