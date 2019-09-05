const TIMESTAMP = '^\\[(\\d{4}-\\d{2}-\\d{2}T\\d{1,2}:\\d{1,2}:\\d{1,2},\\d{1,4})\\]';
const SEVERITY = '\\[([a-zA-Z]+)\\s*\\]';
const SOURCE = '\\[(\\S+)\\]\\s*';
const NODE = '\\[(\\S+)\\]\\s*';
const INDEX = '\\[(\\w+)\\]';
const SHARD = '\\[(\\d+)\\]\\s*';
const TOOK = 'took\\[(.+)\\],\\s*';
const TOOK_MILLIS = 'took_millis\\[(\\d+)\\],\\s*';
const TYPES = 'types\\[(.*)\\],\\s*';
const STATS = 'stats\\[(.*)\\],\\s*';
const SEARCH_TYPE = 'search_type\\[(.*)\\],\\s*';
const TOTAL_SHARDS = 'total_shards\\[(\\d+)\\],\\s*';
const QUERY = 'source\\[(.*)\\],';


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
    pattern: new RegExp(matchers.join('')),
    matchers
};
