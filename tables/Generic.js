var bingoListGeneric;
var dTiles, cTiles, donationTiles;

function Generic() {

    dTiles = [
        'Skysnep says "wow"',
        'Derg sneeze',
        '"I mean what?"',
        'Derg mentions pizza',
        'g d 5',
        'g d 6',
        'g d 7',
        'g d 8',
        'g d 9',
        'g d 10',
        'g d 11',
        'g d 12',
        'g d 13',
        'g d 14',
        'g d 15',
        'g d 16',
        'g d 17',
        'g d 18',
        'g d 19',
        'g d 20'
    ];
    cTiles = [
        'Derg noise redeem spam',
        'g c 2',
        'g c 3',
        'g c 4',
        'g c 5',
        'g c 6',
        'g c 7',
        'g c 8',
        'g c 9',
        'g c 10',
        'g c 11',
        'g c 12',
        'g c 13',
        'g c 14',
        'g c 15',
        'g c 16',
        'g c 17',
        'g c 18',
        'g c 19',
        'g c 20'
    ];
    donationTiles = [
        'Someone resubs for over a year',
        'A founder resubs',
        '10 gift subs',
        '25 gift subs',
        '50 gift subs',
        '100 gift subs',
        '200 bits redeem',
        '666 bits redeem',
        '1000 bits redeem'
    ];

    bingoListGeneric = [..._.sample(dTiles, 15), ..._.sample(cTiles, 15), ..._.sample(donationTiles, 3)];
    console.log('bingoListGeneric = ' + bingoListGeneric);
}