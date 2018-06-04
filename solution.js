'use strict';


let distance = (point1, point2) => {
  return Math.sqrt((point1.x - point2.x)^2) + ((point1.y - point2.y)^2);
};

let tally = (list) => {
  let total = {};

  for (let i in list) {
    if(total[i.label] === undefined) {
      total[i.label] = 0;
    }
    else {
      total[i.label]++;
    }
  }
  return tally;
};

let majority = (total) => {
  let mostCount = 0;
  let mostLabel = undefined;
  for (let key in total) {
    if (total[key] > mostCount) {
      mostCount = total[key];
      mostLabel = key;
    }
  }
  return mostLabel;
};

