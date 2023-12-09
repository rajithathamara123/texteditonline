function applyFormatting(command) {
  document.execCommand(command);
}

function applyFontColor() {
  var fontColor = document.getElementById('fontColor').value;
  document.execCommand('foreColor', false, fontColor);
}

function setTextAlignment(alignment) {
  document.getElementById('editor').style.textAlign = alignment;
}

function undo() {
  document.execCommand('undo');
}

function redo() {
  document.execCommand('redo');
}
document.getElementById('fontColor').addEventListener('input', applyFontColor);