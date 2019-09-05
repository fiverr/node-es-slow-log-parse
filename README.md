# es-slow-log-parse [![](https://circleci.com/gh/fiverr/node-es-slow-log-parse.svg?style=svg)](https://circleci.com/gh/fiverr/node-es-log-parse) <a href="https://www.npmjs.com/package/es-slow-log-parse"><img src="https://img.shields.io/npm/v/es-slow-log-parse.svg"></a>

## 📃 Elasticsearch Slow Log line parser

```js
const parse = require('es-slow-log-parse');

const payload = new Buffer(event.awslogs.data, 'base64');
const logs = JSON.parse(zlib.gunzipSync(payload).toString('ascii'));

const events = logs.map(parse); // <= ✨ Money time
```

### Example

Record
```
[2019-09-04T14:17:34,160][INFO ][index.search.slowlog.query] [es-search-data] [index_1][9] took[225.8ms], took_millis[225], types[type_1], stats[], search_type[QUERY_THEN_FETCH], total_shards[10], source[{"some":{"kind":{"of":{"complex":"json"}}}}],'
```

Result
```js
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
    query: '{"some":{"kind":{"of":{"complex":"json"}}}}',
}
```

### Related projects:
- [rds-slow-log-parse](https://github.com/fiverr/node-rds-slow-log-parse)
