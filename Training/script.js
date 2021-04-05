module.exports = function toReadable(number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];


    var numberString = number.toString();

    if (number < 0) throw new Error('Negative numbers are not supported.');

    if (number === 0) return 'zero';

};
