const fixtures = require('./fixtures');
const es = require('.');

describe('ES', () => {
    fixtures.forEach(
        ([entry, result], index) => {
            test(`Should parse entry ${index} correctly`, () => {
                const parsed = es(entry);

                expect(parsed).toEqual(result);
                expect(typeof parsed.timestamp).toEqual('number');
                expect(`${parsed.timestamp}`).toHaveLength(13);
            });
        }
    );
});
