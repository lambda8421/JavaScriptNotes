/*
requestStart(task,start)
requestEnd(task,end)

requestStart(2, 1);
requestStart(3, 2);
requestEnd(3, 4);
requestEnd(2, 5);

output:
request2 start: 1, end 5
request3 start: 2, end 4

 */

const state = new Map();

function requestStart(task,start) {
  state.put(task,`request ${task} start: ${start},`);
}

function requestEnd(task,start) {
  if (state.has(task)) {
  }
}