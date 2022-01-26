const chordArr = [];
const A_Minor = new chords(`Am`,`Minor`,[`A`,`C`,`E`]);
const A_Major = new chords(`A`,`Major`,[`A`,`C#`,`E`]);
const B_Dim = new chords(`Bdim`,`Diminished`,[`B`,`D`,`F`,`A`]);
const C_Major = new chords(`C`,`Major`,[`C`,`E`,`G`]);
const D_Minor = new chords(`Dm`,`Minor`,[`D`,`F`,`A`]);
const D_Major = new chords(`D`,`Major`,[`D`,`F#`,`A`]);
const E_Minor = new chords(`Em`,`Minor`,[`E`,`G`,`B`]);
const E_Major = new chords(`E`,`Major`,[`E`,`G#`,`B`]);
const F_Major = new chords(`F`,`Major`,[`F`,`A`,`C`]);
const G_Major = new chords(`G`,`Major`,[`G`,`B`,`D`]);


function chords (chord_Name,type, basic){
    this.chord_Name= chord_Name,
    this.type = type,
    this.basic = basic,
    this.first_inversion = [basic[1],basic[2],basic[0]],
    this.second_inversion = [basic[2],basic[0],basic[1]];
    this.root = basic[0];
    chordArr.push(this);
};

function handPositioning(chordName){
    var chordPose;
    switch (chordName){
        case `Am`: 
            chordPose =[{string: 5, fret: `1`,note: `C`},{string: 3, fret: `2`,note: `E`},
            {string: 4, fret: `2`,note: `A`}];
            break;
        case `A`: 
            chordPose =[{string: 3, fret: `2`,note: `E`},{string: 4, fret: `2`,note: `A`},
            {string: 5, fret: `2`,note: `C#`}];
            break;
        case `Bdim`: 
            chordPose =[{string: 2, fret: `2`,note: `B`},
            {string: 4, fret: `2`,note: `A`},{string: 3, fret: `3`,note: `F`},
            {string: 5, fret: `3`,note: `D`}];
            break;
        case `C`: 
            chordPose=[{string: 5, fret: `1`,note: `C`},{string: 3, fret: `2`,note: `E`},
            {string: 2, fret: `3`,note: `C`}];
            break;
        case `Dm`: 
            chordPose=[{string: 6, fret: `1`,note: `F`},{string: 4, fret: `2`,note: `A`},
            {string: 5, fret: `3`,note: `D`}];
            break;
        case `D`: 
            chordPose=[{string: 6, fret: `2`,note: `F#`},{string: 4, fret: `2`,note: `A`},
            {string: 5, fret: `3`,note: `D`}];
            break;
        case `Em`: 
            chordPose= [{string: 2, fret: `2`,note: `B`},{string: 3, fret: `2`,note: `E`}];
            break;
        case `E`: 
            chordPose= [{string: 4, fret: `1`,note: `G#`},{string: 2, fret: `2`,note: `B`},
            {string: 3, fret: `2`,note: `E`}];
            break;
        case `F`: 
            chordPose=[{string: 6, fret: `1`,note: `F`},{string: 5, fret: `1`,note: `C`},
            {string: 4, fret: `2`,note: `A`},{string: 3, fret: `3`,note: `F`}];
            break;
        case `G`: 
            chordPose=[{string: 2, fret: `2`,note: `B`},{string: 1, fret: `3`,note: `G`},
            {string: 6, fret: `3`,note: `G`}];
            break;
    };
    return chordPose;
}

function chordBarre(root,chord_type){
    const rootLocation = findBassStr(root);
    if(chord_type == "Major"){
        if(rootLocation.string==1){
            return [{string:rootLocation.string,fret:rootLocation.fret,hand:`barre`},
            {string:(rootLocation.string+3),fret:(rootLocation.fret+1)},
            {string:(rootLocation.string+1),fret:(rootLocation.fret+2)},
            {string:(rootLocation.string+2),fret:(rootLocation.fret+2)}]
        }
        if(rootLocation.string==2){
            return [{string:rootLocation.string,fret:rootLocation.fret,hand:`barre`},
            {string:(rootLocation.string+1),fret:(rootLocation.fret+2)},
            {string:(rootLocation.string+2),fret:(rootLocation.fret+2)},
            {string:(rootLocation.string+3),fret:(rootLocation.fret+2)}]
        }
    }
    if(chord_type == "Minor"){
        if(rootLocation.string==1){
            return [{string:rootLocation.string,fret:rootLocation.fret,hand:`barre`},
            "finger off",{string:(rootLocation.string+1),fret:(rootLocation.fret+2)},
            {string:(rootLocation.string+2),fret:(rootLocation.fret+2)}]
        }
        if(rootLocation.string==2){
            return [{string:rootLocation.string,fret:rootLocation.fret,hand:`barre`},
            {string:(rootLocation.string+3),fret:(rootLocation.fret+1)},
            {string:(rootLocation.string+1),fret:(rootLocation.fret+2)},
            {string:(rootLocation.string+2),fret:(rootLocation.fret+2)}]
        }
    }
}
 
