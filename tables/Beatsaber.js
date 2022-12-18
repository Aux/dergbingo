var bingoListBeatsaber;
var sTiles, eTiles;

function Beatsaber() {

    sTiles = [
        'bs s 1',
        'bs s 2',
        'bs s 3',
        'bs s 4',
        'bs s 5',
        'bs s 6',
        'bs s 7',
        'bs s 8',
        'bs s 9',
        'bs s 10'
    ]
    eTiles = [
        'bs e 1',
        'bs e 2',
        'bs e 3',
        'bs e 4',
        'bs e 5',
        'bs e 6',
        'bs e 7',
        'bs e 8',
        'bs e 9',
        'bs e 10'
    ]

    bingoListBeatsaber = [..._.sample(sTiles, 10), ..._.sample(eTiles, 10)];
    console.log('bingoListBeatsaber = ' + bingoListBeatsaber);
}