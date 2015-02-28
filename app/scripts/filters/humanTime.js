'use strict';

var humanTimeFilter = angular.module('humanTimeFilter', []);

humanTimeFilter.filter('humanTime', function () {
    // localization!
    var currentDateTime, i18nTime, words, getWords, setLanguage;

    currentDateTime = new Date();

    i18nTime = {
        /* lang: [
            'now',
            'seconds',
            'minute',
            'minutes',
            'hour',
            'hours',
            'day',
            'days',
            'month',
            'months',
            'year',
            'years'
        ] */
        eng: [
            'just now',
            'seconds ago',
            'about a minute ago',
            'minutes ago',
            'about an hour ago',
            'hours ago',
            '1 day ago',
            'days ago',
            'about a month ago',
            'months ago',
            'about a year ago',
            'years ago'
        ],
        fre: [],
        ger: [],
        spa: []
    };
    words = [
        {
            minTime: 0,
            divider: false
        },
        {
            // 10 seconds
            minTime: 10,
            divider: 1
        },
        {
            // 31 seconds
            minTime: 31,
            divider: false
        },
        {
            // 1 minute, 31 seconds
            minTime: 91,
            divider: 60
        },
        {
            // 45 minutes
            minTime: 2700,
            divider: false
        },
        {
            // 1 hours, 31 ninutes
            minTime: 5460,
            divider: 3600
        },
        {
            // 1 day (24 hours)
            minTime: 86400,
            divider: false
        },
        {
            // 2 days (48 hours)
            minTime: 172800,
            divider: 86400
        },
        {
            // 1 month (30 days)
            minTime: 2592000,
            divider: false
        },
        {
            // 1 month, 15 days
            minTime: 3888000,
            divider: 2592000
        },
        {
            // 1 year (365 days)
            minTime: 31536000,
            divider: false
        },
        {
            // 52 + 26 weeks
            minTime: 47174400,
            divider: 31536000
        }

    ];

    // specify in filter or constant a language to localize
    setLanguage = function(localize) {
        var supportedLanguages, language, _i;

        // get set of supported languages
        supportedLanguages = _.keys(i18nTime);
        // find language if language is specified in filter
        if (!_.isNull(localize) && !_.isUndefined(localize)) {
            if (_.indexOf(supportedLanguages, localize) > 0) {
                language = localize;
            }
        }
        // if no lanaguage is specified or incorrect specification, default to english
        if (_.isUndefined(language)) {
            language = 'eng';
        }
        // populate time array with language
        for (_i in words) {
            words[_i].phrase = i18nTime[language][_i];
        }
    };

    // get correct phrasing based on time from current
    getWords = function(secondsDist) {
        var wordsObj;

        // get array of objects that are below the time distance
        wordsObj = _.filter(words, function(num) {
            return secondsDist >= num.minTime;
        });
        // return closest value to time distance
        return _.last(wordsObj);
    };

    return function (input, localize) {
        var inputTime, distance, secondsDist, wordObj, timePhrase;

        // set the locality for language
        setLanguage(localize);
        // convert date input to numerical value
        inputTime = new Date(input);
        // get time distance, in milliseconds
        distance = currentDateTime - inputTime;
        // we are not concerned with milliseconds.
        secondsDist = Math.ceil(distance / 1000);
        // get correct phrasing based on time distance
        wordObj = getWords(secondsDist);
        // some phrases don't require a number, e.g., "about an hour ago"
        if (wordObj.divider === false) {
            timePhrase = wordObj.phrase;
        }
        // otherwise, attach correct time increment to phrasing
        else {
            timePhrase = Math.floor(secondsDist / wordObj.divider) + ' ' + wordObj.phrase;
        }
        return timePhrase;
    };
});