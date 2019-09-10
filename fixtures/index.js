module.exports = [
    [
        '[2019-09-10T02:19:57,219][INFO ][index.search.slowlog.query] [node_1] [index_1][1] took[108.4ms], took_millis[108], total_hits[11237041], types[], stats[], search_type[QUERY_THEN_FETCH], total_shards[3], source[{"some":{"kind":{"of":{"complex":"json"}}}}], id[],',
        {
            timestamp: 1568071197219,
            severity: 'INFO',
            source: 'index.search.slowlog.query',
            node: 'node_1',
            index: 'index_1',
            shard: 1,
            took: '108.4ms',
            took_millis: 108,
            total_hits: 11237041,
            types: '',
            stats: '',
            search_type: 'QUERY_THEN_FETCH',
            total_shards: 3,
            query: '{"some":{"kind":{"of":{"complex":"json"}}}}',
            id: ''
        }
    ]
];
