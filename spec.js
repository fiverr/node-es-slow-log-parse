const fixtures = require('./fixtures');
const es = require('.');

describe('ES', () => {
    fixtures.forEach(
        ([entry, result], index) => {
            test(`Should parse entry ${index} correctly`, () => {
                expect(es(entry)).toEqual(result);
            });
        }
    );
});
