// Inspired by an answer found at http://stackoverflow.com/questions/11523331/passing-variables-through-handlebars-partial

module.exports = function partialParams(partialName, options) {
    if (!partialName) {
        console.error('No partial name given.');
        return '';
    }
    var partial = Handlebars.partials[partialName];
    if (!partial) {
        console.error('Couldnt find the compiled partial: ' + partialName);
        return '';
    }
    // return new Handlebars.SafeString( partial(options.hash) );
    return partial(options.hash);
};
