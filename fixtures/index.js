module.exports = [
    [
        '[2019-09-04T14:17:34,160][INFO ][index.search.slowlog.query] [es-search-data] [index_1][9] took[225.8ms], took_millis[225], types[type_1], stats[], search_type[QUERY_THEN_FETCH], total_shards[10], source[{"some":{"kind":{"of":{"complex":"json"}}}}],',
        {
            timestamp: '2019-09-04T14:17:34,160',
            severity: 'INFO',
            source: 'index.search.slowlog.query',
            node: 'es-search-data',
            index: 'index_1',
            shard: 9,
            took: '225.8ms',
            took_millis: 225,
            types: 'type_1',
            stats: '',
            search_type: 'QUERY_THEN_FETCH',
            total_shards: 10,
            query: '{"some":{"kind":{"of":{"complex":"json"}}}}'
        }
    ]
];
