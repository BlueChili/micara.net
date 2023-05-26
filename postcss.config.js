const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [ './hugo_stats.json' ],
    defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids, ['is-active', 'lock-scroll', 'open', 'reveal', 'destroy']);
    },
});

module.exports = {
    plugins: [
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ purgecss ] : [])
    ]
};
