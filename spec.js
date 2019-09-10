const fixtures = require('./fixtures');
const es = require('.');

describe('ES', () => {
    fixtures.forEach(
        ([entry, result], index) => {
            test(`Should parse entry ${index} correctly`, () => {
                const parsed = es(entry);
                
                expect(parsed, 'match results').toEqual(result);
                expect(parsed.timestamp, 'timestamp format').to.be.a('number');
                expect(`${parsed.timestamp}`, 'timestamp format').to.to.have.lengthOf(13);
            });
        }
    );
});
