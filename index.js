var katzDeli = [ ];

var totalNum = 0;

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var positionInLine = katzDeliLine.indexOf(name) + 1;
  totalNum +=1;
  return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function takeANumber2(katzDeliLine) {
  totalNum +=1;
  katzDeliLine.push(totalNum);
  return `Welcome, you are number ${totalNum}`;
}


function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.'
  } else {
    let arrayOfNames = [ ];
    
    for (var c = 0; c < line.length; c++) {
      let str = `${c+1}. ${line[c]}`;
      arrayOfNames.push(str);
    }
    return 'The line is currently: ' + arrayOfNames.join(', ');

  }
}