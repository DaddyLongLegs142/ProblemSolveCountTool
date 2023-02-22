let ps = 0;
let dmg = 0;

function displayCount() {
    // document.getElementById("floor").innerHTML = '';
    document.getElementById("psCount").innerHTML = `${ps}`;
    document.getElementById("dmgCount").innerHTML = `${dmg}`;
}
function problemSolve1() {
    ps++;
}
function problemSolve5() {
    ps +=5;
}
function damages1() {
    dmg++;
}
function damages5() {
    dmg += 5;
}
function copyToClipboard() {
    navigator.clipboard.writeText(
        `${document.getElementById("floor").value}: ${ps} ps, ${dmg} dmg`
    );
    window.alert('Count copied to clipboard');
}
function checkKeyPressed(evt) {
    // console.log(evt.code);
    switch(evt.code) {
        case 'ShiftLeft':
            problemSolve1();
            break;
        case 'ShiftRight':
            damages1();
            break;
        case 'KeyZ':
            problemSolve5();
            break;
        case 'Slash':
            damages5();
            break;
        case 'Space':
            copyToClipboard();
            break;
    }
    displayCount();
}

displayCount();
window.addEventListener("keydown", checkKeyPressed);

