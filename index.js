const numerify = require('./lib/numerify');
const {pattern} = require('./lib/pattern');

const NUMERIC_FIELDS = [
    'shard',
    'took_millis',
    'total_hits',
    'total_shards'
];

module.exports = (string) => {
    const match = pattern.exec(string);

    if (!match) {
        return {};
    }

    const [, timestamp, severity, source, node, index, shard, took, took_millis, total_hits, types, stats, search_type, total_shards, query, id] = match;

    return process({
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
        query,
        id
    });
};

function process(entry) {
    // convert elasticsearch timestamp to unix timestamp
    entry.timestamp = new Date(entry.timestamp.replace(',', '.')).getTime();

    numerify(entry, NUMERIC_FIELDS);

    return entry;
}
