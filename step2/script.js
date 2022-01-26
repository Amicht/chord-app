function getLoc (base,loc) {
    var newArr = base;
    if(loc==`basic`){
        return newArr; 
    }
    else{
        newArr.forEach((e,i) => {
            e+loc==-1 ? newArr[i]=11 : newArr[i]= e + loc;
        });
        return newArr;
    }
}

function findPositions(root){
    const pos1 = {
        fing1: {str:1, frt: root[0], barre:true, Xstr:[]},
        fing2: {str:4, frt: root[0]+1}, 
        fing3: {str:2, frt: root[0] +2},
        fing4: {str:3, frt: root[0]+2}
    };
    const pos2 = {
        fing1: {str:2, frt: root[1], barre:true, Xstr:[1]},
        fing2: {str:3, frt: root[1]+2}, 
        fing3: {str:4, frt: root[1]+2}, 
        fing4: {str:5, frt: root[1]+2} 
    };
    const pos3 = {
        fing1: {str:3, frt: root[2], barre:false, Xstr:[1,2]},
        fing2: {str:6, frt: root[2]+2},
        fing3: {str:4, frt: root[2]+2},
        fing4: {str:5, frt: root[2]+3} 
    };
    let pos4;
    if(root[1]<3 && root[1] !==3){
        const rightRoot = root[1]+12;
        pos4 = {
            fing1: {str:2, frt: rightRoot-3, barre:true, Xstr:[1]},
            fing2: {str:5, frt: rightRoot-2},
            fing3: {str:3, frt: rightRoot-1},
            fing4: {str:2, frt: rightRoot} 
            };
    }
    else{
        pos4 = {
            fing1: {str:2, frt: root[1]-3, barre:true, Xstr:[1]},
            fing2: {str:5, frt: root[1]-2},
            fing3: {str:3, frt: root[1]-1},
            fing4: {str:2, frt: root[1]} 
            };
    }
    let pos5;
    if(root[0]<3){
        const rightRoot = root[0]+12;
        pos5 = {
            fing1: {str:3, frt: rightRoot-3, barre:true, Xstr:[6]},
            fing2: {str:1, frt:"finger down"}, 
            fing3: {str:2, frt: rightRoot-1}, 
            fing4: {str:1, frt: rightRoot} 
        }
    }else if(root[0]==3){
        pos5 = {
            fing1: {str:1, frt:"finger down", barre: false, Xstr:[]}, 
            fing2: {str:2, frt: root[0]-1}, 
            fing3: {str:1, frt: root[0]}, 
            fing4: {str:6, frt: root[0]} 
        }
    }
    else{
        pos5 = {
            fing1: {str:3, frt: root[0]-3, barre:true, Xstr:[6]},
            fing2: {str:1, frt:"finger down"}, 
            fing3: {str:2, frt: root[0]-1}, 
            fing4: {str:1, frt: root[0]} 
        }
    }
    return {
        "position 1": pos1,
        "position 2": pos2,
        "position 3": pos3,
        "position 4": pos4,
        "position 5": pos5,
    }
}

function adjustPosToType(findPos, root){
    const Major = findPos(root);
    const Minor = findPos(root);
    const Dim = findPos(root); // define later
    const Aug = findPos(root); // define later
    
    Minor["position 1"].fing2 = "finger off";
    Minor["position 2"].fing4= Minor["position 2"].fing3
    Minor["position 2"].fing3= Minor["position 2"].fing2;
    Minor["position 2"].fing2= {str:5, frt: root[1]+1};
    Minor["position 3"].fing2.frt -= 1;

    Minor["position 4"].fing1.Xstr = [1,6];
    Minor["position 4"].fing1.str += 2;
    Minor["position 4"].fing1.barre = false; 
    Minor["position 4"].fing2.str -= 2;
    Minor["position 4"].fing3.frt -= 1;
    Minor["position 4"].fing3.str += 2;
    if(Minor["position 4"].fing1.frt == 0){
        Minor["position 4"].fing1 = Minor["position 4"].fing3;
        Minor["position 4"].fing1.barre = false;
        Minor["position 4"].fing1.Xstr = [1,6];
        Minor["position 4"].fing3 = {str:1, frt:"finger down"};
    }
    if(root[0] == 3){
        Minor["position 5"].fing1 = Minor["position 5"].fing2;
        Minor["position 5"].fing1.frt -= 1;
        Minor["position 5"].fing1.barre -= false;
        Minor["position 5"].fing1.Xstr = [5,6];
        Minor["position 5"].fing4 = {str:1, frt:"finger down"};
        Minor["position 5"].fing2 = {str:1, frt:"finger down"};
    }else{
        Minor["position 5"].fing3.frt -= 1;
        Minor["position 5"].fing1.Xstr = [6,5];
    }
    return{
        Major: Major,
        Minor: Minor
    }
}


function strNotesBarre(chordObj){
    return {str1:[0,2,0,1,2,0],str2:[2,0,2,0,1,2]}
}
