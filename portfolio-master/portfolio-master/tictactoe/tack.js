var body = document.body;
var table = document.createElement('table');
var lines = [];
var blocks = [];
var turn = 'X';
var result = document.createElement('div');

var callback = function(event)
{
  console.log(event.target);

  console.log(event.target.parentNode);

  console.log(event.target.parentNode.parentNode);

  var fewLine = lines.indexOf(event.target.parentNode);
  console.log(fewLine);
  var fewBlock = blocks[fewLine].indexOf(event.target);
  console.log(fewBlock);

  if(blocks[fewLine][fewBlock].textContent !== '')
  {

  }
  else
  {
      blocks[fewLine][fewBlock].textContent = turn;

      var allTrue = false;

      if(blocks[fewLine][0].textContent === turn &&
         blocks[fewLine][1].textContent === turn &&
         blocks[fewLine][2].textContent === turn)
      {
         allTrue = true;
      }

      if(blocks[0][fewBlock].textContent === turn &&
         blocks[1][fewBlock].textContent === turn &&
         blocks[2][fewBlock].textContent === turn)
      {
         allTrue = true;
      }
  }

  console.log("역 대각선 : " + Math.abs(fewLine - fewBlock));

  if(fewLine - fewBlock === 0 || Math.abs(fewLine - fewBlock) === 2)
  {
    console.log("대각선 통과");

    if((blocks[0][0].textContent === turn &&
        blocks[1][1].textContent === turn &&
        blocks[2][2].textContent === turn) ||
       (blocks[0][2].textContent === turn &&
        blocks[2][0].textContent === turn &&
        blocks[1][1].textContent === turn))
    {
      allTrue = true;
    }
  }


  if(allTrue)
  {
    result.textContent = turn + '님이 승리';
    body.append(result);

    turn = 'X';
    blocks.forEach(function(line){
      line.forEach(function(block){
        block.textContent = '';
      });
    });
  }
  else
  {
    if(turn === 'X')
    {
      turn = 'O';
    }
    else
    {
      turn = 'X';
    }
  }
}


for(var i = 1; i <= 3; i += 1)
{
  var line = document.createElement('tr');
  lines.push(line);
  blocks.push([]);

  for(var j = 1; j <= 3; j += 1)
  {
    var block = document.createElement('td');

    block.addEventListener('click', callback);
    blocks[i - 1].push(block);
    line.append(block);
  }

  table.appendChild(line);
}

body.appendChild(table);
console.log(lines, blocks);
