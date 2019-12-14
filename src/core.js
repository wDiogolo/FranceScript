const dictionary = require("./dictionary/dictionary");

const
  LANGS = {
    js: 0,
    fr: 1,
  };

module.exports = {
    compile,
    dictionary,
};

function escapeRegExp(str) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    if (/^\w+$/.test(str)) {
        str = '\\b' + str + '\\b';
    }

    return str;
}

function franceReplaceAll(str, search, replacement) {
    var re = new RegExp(escapeRegExp(search), 'g');
    return str.replace(re, replacement);
}

function compile(text, lang) {
    var commentRegExp = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g;
    var tmpToken = 'fr_' + (new Date()).getTime() + '_';
    var rStringLiterals = {};
    text = text.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g, function (val, pos) {
        var needKey = tmpToken + pos;
        rStringLiterals[needKey] = val;
        return needKey;
    });
    var commentsArray = text.match(commentRegExp) || [];
    text = iterateText(text, lang);
    text = text.replace(commentRegExp, function () {
        return commentsArray.shift();
    });
    for (tmpToken in rStringLiterals) {
        text = text.replace(tmpToken, rStringLiterals[tmpToken]);
    }
    return text;
}


function iterateText(text, to = 'js') {
    let
      lang = LANGS[to];

    dictionary
        .sort((a, b) => {
            a = a[lang].length;
            b = b[lang].length;
            return b - a;
        })
        .forEach(pair => text = franceReplaceAll(text, pair[lang], pair[+!lang]));

    return text;
}