var bingoListBeatsaber;
var q, w, e, r, t

function Beatsaber() {

    q = _.sample(['beatsaber q 1','beatsaber q 2','beatsaber q 3','beatsaber q 4','beatsaber q 5'], 5);
    w = _.sample(['beatsaber w 1','beatsaber w 2','beatsaber w 3','beatsaber w 4','beatsaber w 5'], 5);
    e = _.sample(['beatsaber e 1','beatsaber e 2','beatsaber e 3','beatsaber e 4','beatsaber e 5'], 5);
    r = _.sample(['beatsaber r 1','beatsaber r 2','beatsaber r 3','beatsaber r 4','beatsaber r 5'], 5);
    t = _.sample(['beatsaber t 1','beatsaber t 2','beatsaber t 3','beatsaber t 4','beatsaber t 5'], 5);

    bingoListBeatsaber = [...q, ...w, ...e, ...r, ...t];
    console.log('bingoListBeatsaber = ' + bingoListBeatsaber);
}