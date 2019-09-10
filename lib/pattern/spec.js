const {pattern, matchers, delimiter} = require('.');

describe('ES/pattern', () => {
    test('Should create a patterns comprised of all matchers', () => {
        expect(pattern.source).toEqual(matchers.join(delimiter));
    });

    const [
        timestamp,
        severity,
        source,
        node,
        index,
        shard,
        took,
        took_millis,
        total_hits,
        types,
        stats,
        search_type,
        total_shards,
        query
    ] = matchers.map((part) => new RegExp(part));

    describe('delimiter', () => {
        test('Should extract timestamp', () => {
            const [, ...matches] = new RegExp(new Array(4).fill('(\\w)').join(delimiter)).exec('a,b, c   d');
            expect(matches).toEqual(['a', 'b', 'c', 'd']);
        });
    });
    describe('timestamp', () => {
        test('Should extract timestamp', () => {
            const [, match] = timestamp.exec('[2019-09-04T14:17:34,160]');
            expect(match).toEqual('2019-09-04T14:17:34,160');
        });
    });
    describe('severity', () => {
        test('Should extract severity', () => {
            const [, match] = severity.exec('[INFO ]');
            expect(match).toEqual('INFO');
        });
    });
    describe('source', () => {
        test('Should extract source', () => {
            const [, match] = source.exec('[index.search.slowlog.query] ');
            expect(match).toEqual('index.search.slowlog.query');
        });
    });
    describe('node', () => {
        test('Should extract node', () => {
            const [, match] = node.exec('[es-search-data]');
            expect(match).toEqual('es-search-data');
        });
    });
    describe('index', () => {
        test('Should extract index', () => {
            const [, match] = index.exec('[index_1]');
            expect(match).toEqual('index_1');
        });
    });
    describe('shard', () => {
        test('Should extract shard', () => {
            const [, match] = shard.exec('[9]');
            expect(match).toEqual('9');
        });
    });
    describe('took', () => {
        test('Should extract took', () => {
            const [, match] = took.exec('took[225.8ms]');
            expect(match).toEqual('225.8ms');
        });
    });
    describe('took_millis', () => {
        test('Should extract took_millis', () => {
            const [, match] = took_millis.exec('took_millis[225]');
            expect(match).toEqual('225');
        });
    });
    describe('types', () => {
        test('Should extract types', () => {
            const [, match] = types.exec('types[type_1]');
            expect(match).toEqual('type_1');
        });
    });
    describe('stats', () => {
        test('Should extract stats', () => {
            const [, match] = stats.exec('stats[]');
            expect(match).toEqual('');
        });
    });
    describe('search_type', () => {
        test('Should extract search_type', () => {
            const [, match] = search_type.exec('search_type[QUERY_THEN_FETCH]');
            expect(match).toEqual('QUERY_THEN_FETCH');
        });
    });
    describe('total_shards', () => {
        test('Should extract total_shards', () => {
            const [, match] = total_shards.exec('total_shards[10]');
            expect(match).toEqual('10');
        });
    });
    describe('query', () => {
        test('Should extract query with single quotes', () => {
            const [, match] = query.exec('source[{"some":{"kind":{"of":{"complex":"json"}}}}]');
            expect(match).toEqual('{"some":{"kind":{"of":{"complex":"json"}}}}');
        });
    });
});
