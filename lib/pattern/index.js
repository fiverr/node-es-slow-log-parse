const TIMESTAMP = '^\\[(\\d{4}-\\d{2}-\\d{2}T\\d{1,2}:\\d{1,2}:\\d{1,2},\\d{1,4})\\]';
const SEVERITY = '\\[([a-zA-Z]+)\\s*\\]';
const SOURCE = '\\[(\\S+)\\]';
const NODE = '\\[(\\S+)\\]';
const INDEX = '\\[(\\w+)\\]';
const SHARD = '\\[(\\d+)\\]';
const TOOK = 'took\\[(.+)\\]';
const TOOK_MILLIS = 'took_millis\\[(\\d+)\\]';
const TYPES = 'types\\[(.*)\\]';
const STATS = 'stats\\[(.*)\\]';
const SEARCH_TYPE = 'search_type\\[(.*)\\]';
const TOTAL_SHARDS = 'total_shards\\[(\\d+)\\]';
const QUERY = 'source\\[(.*)\\]';
const delimiter = '(?:,?\\s*)';

const matchers = [
    TIMESTAMP,
    SEVERITY,
    SOURCE,
    NODE,
    INDEX,
    SHARD,
    TOOK,
    TOOK_MILLIS,
    TYPES,
    STATS,
    SEARCH_TYPE,
    TOTAL_SHARDS,
    QUERY
];

module.exports = {
    pattern: new RegExp(matchers.join(delimiter)),
    matchers,
    delimiter
};
