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
const startArr = [];
const endArr = [];

function requestStart(task,start) {
  startArr.push({task,start});
}

function requestEnd(task,end) {
    if (task === startArr[0].task){
      console.log(`request${task} start: ${startArr[0].start}, end ${end}`);
      startArr.shift();
      while (true){
        let index  = endArr.findIndex(e=>e.task===startArr[0].task);
        if (index !== -1){
          let task = endArr.splice(index,1);
          console.log(`request${task[0].task} start: ${startArr[0].start}, end ${task[0].end}`);
          startArr.shift();
        } else {
          break;
        }
      }
    } else {
      endArr.push({task:task,end:end});
    }
}
requestStart(2, 1);
requestStart(3, 2);
requestEnd(3, 4);
requestEnd(2, 5);
