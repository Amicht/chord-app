Chords();
function Chords(){
    let buttons = ``;
    chordArr.forEach(p => buttons += `<button onclick="basicChords(event)" 
    name="${p.chord_Name}" class="btn btn-success border-light">${p.chord_Name}</button>`);
    document.querySelector("#chord-buttons").innerHTML = buttons;
}



function basicChords(event){
    gtrNotes();
    const found = chordArr.find(e => e.chord_Name == event.target.name);

    chordCard(found);


  const fingers = handPositioning(event.target.name);
  let fingersToHTML = ``;
    for(let i=0; i<fingers.length; i++){
      let newNote = fingers[i].string;
      const str = document.querySelector(`.str-note-${newNote}`)
      str.innerHTML = fingers[i].note;
      str.classList.add(`new-note`)
      
        fingersToHTML += `<div class="finger str-${fingers[i].string} 
        fin-fret-${fingers[i].fret}">${i+1}</div>`;
  }
  document.querySelector(`#fingers-position`).innerHTML = fingersToHTML;
  let strings = 6;
  for(let i=0;i<strings;i++){
    const avoidString = document.querySelector(`.str-note-${i+1}`);
    if(found.root==avoidString.innerHTML){
      break;
    }
    avoidString.innerHTML = "-";
    avoidString.classList.add(`red`);
  }
}
function chordCard(chord){
  document.querySelector(`#cards`).innerHTML = 
    `<div  class="card border-secondary bg-light text-success my-1 mx-auto" style="max-width: 18rem;">
    <div class="card-header bg-dark text-white fs-4">${chord.basic[0]} ${chord.type}</div>
    <div class="card-body">
      <h5 class="card-title">also known as: ${chord.chord_Name}</h5>
      <p class="card-text">
          notes (basic): ${chord.basic} <br>
          first inversion: ${chord.first_inversion} <br>
          second inversion: ${chord.second_inversion}
          </p>
    </div>
  </div>`;
}
function gtrNotes(){
  document.querySelector(`.str-notes`).innerHTML = `
  <div class="str-note-1">E</div>
  <div class="str-note-2">A</div>
  <div class="str-note-3">D</div>
  <div class="str-note-4">G</div>
  <div class="str-note-5">B</div>
  <div class="str-note-6">E</div>`;
}
