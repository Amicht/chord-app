const finger_position = document.querySelector(`#fingers-position`);
const str_notes = document.querySelector(`.str-notes`);
const base = document.querySelector(`[name="chord-base"]`);
const loc = document.querySelector(`[name="full-base"]`);
const type = document.querySelector(`[name="chord-tipe"]`);

function chordDetails(){
  const rootNoteLocations = {
    A: [5,0,7],
    B: [7,2,9],
    C: [8,3,10],
    D: [10,5,0],
    E: [0,7,2,9],
    F: [1,8,3],
    G: [3,10,5],
    sharp: 1,
    flat: -1,
    "": `basic`
  };
  return {
      name: base.value + ` ` + loc.value + ` ` + type.value,
      base:base.value,
      loc: loc.value,
      type: type.value,
      root: getLoc(rootNoteLocations[base.value], rootNoteLocations[loc.value])
  }; 
}

function chordModule(event){
  gtrNotesClear();

  const myChord = chordDetails();
  const positionNum = event.target.innerHTML;

  let handPosition = adjustPosToType(findPositions, myChord.root)[myChord.type];
  handPosition = handPosition[positionNum];
  handPosition = Object.values(handPosition);
  
  let fingersToHTML = ``;
  const forbiddenNotes = handPosition[0].Xstr;
  let indexer = 0;
  forbiddenNotes.forEach(e => {
    document.querySelector(`.str-note-${e}`).innerHTML = `-`
    document.querySelector(`.str-note-${e}`).classList.add(`red`);
  })
  handPosition.forEach((e,i) => {
    if(e.frt == "finger down"){
      indexer++;
    }
    else{
      if(e.frt !== 0 && e !== "finger off"){
        
        if(i==0 && e.barre){
          fingersToHTML += `<div class="finger str-${e.str} 
          fin-fret-${e.frt} barre">${indexer+1}</div>`;
          
        }
        else{
          fingersToHTML += `<div class="finger str-${e.str} 
          fin-fret-${e.frt}">${indexer+1}</div>`;
        }
        indexer++;  
      }
    }
  });
  finger_position.innerHTML = fingersToHTML;
  
}

function gtrNotesClear(){
  str_notes.innerHTML = `
  <div class="str-note-1">E</div>
  <div class="str-note-2">A</div>
  <div class="str-note-3">D</div>
  <div class="str-note-4">G</div>
  <div class="str-note-5">B</div>
  <div class="str-note-6">E</div>`;
}


