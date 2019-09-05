const numerify = require('./lib/numerify');
const {pattern} = require('./lib/pattern');

const NUMERIC_FIELDS = [
    'shard',
    'took_millis',
    'total_shards'
];

module.exports = (string) => {
    const match = pattern.exec(string);

    if (!match) {
        return {};
    }

    const [, timestamp, severity, source, node, index, shard, took, took_millis, types, stats, search_type, total_shards, query] = match;

    return process({
        timestamp,
        severity,
        source,
        node,
        index,
        shard,
        took,
        took_millis,
        types,
        stats,
        search_type,
        total_shards,
        query
    });
};

function process(entry) {
    numerify(entry, NUMERIC_FIELDS);

    return entry;
}
