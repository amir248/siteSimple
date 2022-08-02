const parallaxPoz={// const более глобальный вариант
  left : 0,
  right : 0,
  bottom : 0,
  top : 0
}
console.log("parallax");

function showCoords(evt){
  console.log(
    "clientX value: " + evt.clientX + "\n" +
    "clientY value: " + evt.clientY + "\n"
  );
  console.log(evt);
  if(evt.clientY<170||evt.clientY>200){
    console.log('evt.clientY>200&&120');
    parallaxPoz.top=+30;
    parallaxPoz.right=+0;
    parallaxPoz.left=+0;
    parallaxPoz.bottom=+0;
  }else{
    console.log("evt.elset");
    parallaxPoz.top=+0;
    parallaxPoz.right=+0;
    parallaxPoz.left=+0;
    parallaxPoz.bottom=+30;
  }
  if(evt.clientX<570||evt.clientX>3300){
    console.log('evt.clientX>XXX');
    // parallaxPoz.top=+0;
    parallaxPoz.right=+30;
    parallaxPoz.left=+0;
    // parallaxPoz.bottom=+0;
  }else{
    console.log("evt.elset");
    // parallaxPoz.top=+0;
    parallaxPoz.right=+0;
    // parallaxPoz.bottom=+0;
    parallaxPoz.left=+30;
  }
}

document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').addEventListener('mousemove',()=>{
  showCoords(event); // event !!!
  // let top=+0;

  document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').style.cssText=`
  position:relative;
  top:${parallaxPoz.top}px;
  left:${parallaxPoz.left}px;
  right:${parallaxPoz.right}px;
  bottom:${parallaxPoz.bottom}px;
  transition: all 1s linear;
  `;

});
document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').addEventListener('mouseout',()=>{
    showCoords(event);
  document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').style.cssText=`
  position:relative;
  // top:${parallaxPoz.top}px;
  // left:${parallaxPoz.left}px;
  // right:${parallaxPoz.right}px;
  // bottom:${parallaxPoz.bottom}px;
  top:0;
  lett:0;
  right:0;
  bottom:0;
   transition: all 1s linear;
  `;

});

document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').addEventListener('mousemove',()=>{
  showCoords(event); // event !!!
  // let top=+0;
  document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').style.cssText=`
  position:relative;
  top:${parallaxPoz.top}px;
  left:${parallaxPoz.left}px;
  right:${parallaxPoz.right}px;
  bottom:${parallaxPoz.bottom}px;
  transition: all 1s linear;
  `;
});
document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').addEventListener('mouseout',()=>{
    showCoords(event);
  document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').style.cssText=`
  position:relative;
  top:0;
  lett:0;
  right:0;
  bottom:0;
  transition: all 1s linear;

  `;
});




const parallaxPoz2={// const более глобальный вариант
  left : 0,
  right : 0,
  bottom : 0,
  top : 0
}
console.log("paralaxTwo");

function showCoords2(evt){
  console.log(
    "clientX value: " + evt.clientX + "\n" +
    "clientY value: " + evt.clientY + "\n"
  );
  console.log(evt);
  if(evt.clientY<268||evt.clientY>273){
    console.log('TwoClient');
    parallaxPoz2.top=+30;
    parallaxPoz2.right=+0;
    parallaxPoz2.left=+0;
    parallaxPoz2.bottom=+0;
  }else{
    console.log("evt.elset");
    parallaxPoz2.top=+0;
    parallaxPoz2.right=+0;
    parallaxPoz2.left=+0;
    parallaxPoz2.bottom=+30;
  }
  if(evt.clientX<570||evt.clientX>3300){
    console.log('Two_evt.clientX>XXX');
    // parallaxPoz.top=+0;
    parallaxPoz2.right=+30;
    parallaxPoz2.left=+0;
    // parallaxPoz.bottom=+0;
  }else{
    console.log("evt.elset");
    // parallaxPoz.top=+0;
    parallaxPoz2.right=+0;
    // parallaxPoz.bottom=+0;
    parallaxPoz2.left=+30;
  }
}

document.querySelector('body > main > header > div.imAges > span').addEventListener('mousemove',()=>{
  showCoords2(event); // event !!!
  // let top=+0;
  document.querySelector('body > main > header > div.imAges > span').style.cssText=`
  position:relative;
  top:${parallaxPoz2.top}px;
  left:${parallaxPoz2.left}px;
  right:${parallaxPoz2.right}px;
  bottom:${parallaxPoz2.bottom}px;
  transition: all 1s linear;
  `;

});
document.querySelector('body > main > header > div.imAges > span').addEventListener('mouseout',()=>{
    showCoords2(event);
  document.querySelector('body > main > header > div.imAges > span').style.cssText=`
  position:relative;
  top:0;
  lett:0;
  right:0;
  bottom:0;
  transition: all 1s linear;
  `;

});

document.querySelector('body > main > header > div.imAges > p').addEventListener('mousemove',()=>{
  showCoords2(event); // event !!!
  // let top=+0;
  document.querySelector('body > main > header > div.imAges > p').style.cssText=`
  position:relative;
  top:${parallaxPoz2.top}px;
  left:${parallaxPoz2.left}px;
  right:${parallaxPoz2.right}px;
  bottom:${parallaxPoz2.bottom}px;
  transition: all 1s linear;
  `;

});
document.querySelector('body > main > header > div.imAges > p').addEventListener('mouseout',()=>{
    showCoords2(event);
  document.querySelector('body > main > header > div.imAges > p').style.cssText=`
  position:relative;
  top:0;
  lett:0;
  right:0;
  bottom:0;
  transition: all 1s linear;
  `;

});

//text
document.querySelector('body > main > header > div:nth-child(3) > p').addEventListener('mousemove',()=>{
  showCoords2(event); // event !!!
  // let top=+0;
  document.querySelector('body > main > header > div:nth-child(3) > p').style.cssText=`
  position:relative;
  top:${parallaxPoz2.top}px;
  left:${parallaxPoz2.left}px;
  right:${parallaxPoz2.right}px;
  bottom:${parallaxPoz2.bottom}px;
  transition: all 1s linear;
  `;

});
document.querySelector('body > main > header > div:nth-child(3) > p').addEventListener('mouseout',()=>{
    showCoords2(event);
  document.querySelector('body > main > header > div:nth-child(3) > p').style.cssText=`
  position:relative;
  top:0;
  lett:0;
  right:0;
  bottom:0;
  transition: all 1s linear;
  `;

});













// let pos1=0,pos2=0,pos3=0,pos4=0;
// let v1=0.5,v2=0.4,v3=0.3,v4=0.2;
// let dv=1;
// let x;

// document.querySelector('body > main > header > div:nth-child(3) > p').style.cssText=`
//   // width:70px;
//   max-width:100%;
// `;
// function moveBg(){
//   document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').style.cssText=`
//   // height:70px;
//     position:relative;
//     top:5px;
//     // width:70px;
//   `;
//   pos1+=v1*dv;
//   pos2+=v2*dv;
//   pos3+=v3*dv;
//   pos4+=v4*dv;
//   document.querySelector('body > main > header > div:nth-child(3) > p').style.backgroundPositionX=pos1+"px,"+pos2+"px,"+pos3+"px,"+pos4+"px,0px";
// }

//29/07/2022 workins day
// let moveId;
// bgParallax.onmouseover=function(){
//     dv=Math.random()*2 - 1;
//     if(Math.abs(dv)<0.1){
//       dv *= 10;
//     }
//     moveId = setInterval(moveBg,1);
// }//onmouseover

// bgParallax.onmouseout=function(){
//   clearInterval(moveId)
// }

  // document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').onmouseover=function(e){
  //   console.log(e);
  //   x=e.clientX;
  //   document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').onmousemove=function(e){
  //     dv = e.clientX - x;
  //     x=e.clientX;
  //     moveBg();
  //   }//onmousemove
    // document.querySelector('body > main > header > div:nth-child(3) > p').onmouseout=function(){
    //   document.querySelector('body > main > header > div:nth-child(3) > p').onmousemove =null;
    // }
  // }
// console.log(x)
