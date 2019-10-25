"use strict";
function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
  if (where == "top") window.scrollBy(0, eAmt);
}

SmoothVerticalScrolling(document.querySelector("body"), 275, "center");

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("click", () => {
    console.log("true");
    return true;
  });
});

document.querySelector("body").addEventListener("click", () => {
  return true;
});
