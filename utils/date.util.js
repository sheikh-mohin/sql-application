const moment = require('moment');

exports.getDateInUTCFormatWithoutTime = () => {
    return new Date(moment().format('YYYY-MM-DD')).toUTCString();
};

exports.getDateInUTCFormat = () => {
    return new Date().toUTCString();
};

exports.getDateInISOFormat = () => {
    return new Date().toISOString();
};

exports.getDateFromUTCString = dateString => {
    return new Date(dateString);
};

exports.isDateEquals = (dateString1, dateString2) => {
    const date1 = moment(this.getDateFromUTCString(dateString1)).format('YYYY-MM-DD');
    const date2 = moment(this.getDateFromUTCString(dateString2)).format('YYYY-MM-DD');
    return date1.isSame(date2);
};

exports.isDateGreater = (dateString1, dateString2) => {
    const date1 = moment(this.getDateFromUTCString(dateString1)).format('YYYY-MM-DD');
    const date2 = moment(this.getDateFromUTCString(dateString2)).format('YYYY-MM-DD');
    return date1.isAfter(date2);
};

exports.isDateSmaller = (dateString1, dateString2) => {
    const date1 = moment(this.getDateFromUTCString(dateString1)).format('YYYY-MM-DD');
    const date2 = moment(this.getDateFromUTCString(dateString2)).format('YYYY-MM-DD');
    return date1.isBefore(date2);
};

exports.compareDate = (dateString1, dateString2) => {
    const date1 = moment(this.getDateFromUTCString(dateString1)).format('YYYY-MM-DD');
    const date2 = moment(this.getDateFromUTCString(dateString2)).format('YYYY-MM-DD');
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
};

exports.convertISODateToUTCDate = isoDateString => {
    return new Date(isoDateString).toUTCString();
};

exports.convertDateToUTCString = date => {
    const separator = date.includes('-') ? '-' : '/';
    const parts = date.split(separator);
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10)).toUTCString();
};

exports.getDateDifferenceInDays = (dateString1, dateString2) => {
    const date1 = moment(new Date(dateString1)).format('YYYY-MM-DD');
    const date2 = moment(new Date(dateString2)).format('YYYY-MM-DD');
    return date1.diff(date2, 'days');
};

exports.weeksDiff = (d1, d2) => {
    const date1 = moment(new Date(d1)).format('YYYY-MM-DD');
    const date2 = moment(new Date(d2)).format('YYYY-MM-DD');
    return date1.diff(date2, 'weeks');
};

exports.yearsDiff = (d1, d2) => {
    const date1 = moment(new Date(d1)).format('YYYY-MM-DD');
    const date2 = moment(new Date(d2)).format('YYYY-MM-DD');
    return date1.diff(date2, 'years');
};

exports.monthDiff = (d1, d2) => {
    const date1 = moment(new Date(d1)).format('YYYY-MM-DD');
    const date2 = moment(new Date(d2)).format('YYYY-MM-DD');
    return date1.diff(date2, 'months');
};

exports.getDayFromDate = dateString => {
    return new Date(dateString).getDate();
};

exports.getMonthFromDate = dateString => {
    return new Date(dateString).getMonth();
};

exports.getDayOfWeek = date => {
    if (date) return moment(new Date(date)).format('YYYY-MM-DD').day();
    return moment().format('YYYY-MM-DD').day();
};

exports.getQuarter = dateString => {
    if (dateString) return moment(new Date(dateString)).format('YYYY-MM-DD').quarter();
    return moment().format('YYYY-MM-DD').quarter();
};

exports.quarterDiff = (d1, d2) => {
    const date1 = moment(new Date(d1)).format('YYYY-MM-DD');
    const date2 = moment(new Date(d2)).format('YYYY-MM-DD');
    return date1.diff(date2, 'quarters');
};

exports.getDaysInMonth = date => {
    if (date) return moment(new Date(date)).format('YYYY-MM').daysInMonth();
    return moment().format('YYYY-MM').daysInMonth();
};

exports.addMonthInDate = (dateString, months) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD').add(months, 'months');
};

exports.addQuarters = (dateString, quarters) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD').add(quarters, 'quarters');
};

exports.getDateInDifferentFormats = (formatId, dateString) => {
    const d = moment(new Date(dateString));
    /*
     * 1. DD/MM/YYYY
     * 2. MONTH, DATE YEAR   (eg. June 8, 2020 )
     * */
    switch (formatId) {
        case 1: {
            return d.format('DD/MM/YYYY');
        }
        case 2: {
            return d.format('ddd, MMMM Do YYYY');
        }
        default: {
            return d.format('DD/MM/YYYY');
        }
    }
};
