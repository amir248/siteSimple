console.log("paralax");
function showCoords(evt){
  console.log(
    "clientX value: " + evt.clientX + "\n" +
    "clientY value: " + evt.clientY + "\n"
  );
}

let left;
let right;
let bottom;
document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').addEventListener('mouseover',()=>{
  showCoords(event)
  let top=+0;
  top=+10;
  right=+10;
  left=+20;
  bottom=+30;
  document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').style.cssText=`
  position:relative;
  top:${top}px;
  left:${left}px;
  right:${right}px;
  bottom:${bottom}px;
  `;



});
document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').addEventListener('mouseout',()=>{
  top=110;
  document.querySelector('body > main > header > div.imAges > strong:nth-child(1)').style.cssText=`
  position:relative;
  top:${top}px;
  `;
});
let pos1=0,pos2=0,pos3=0,pos4=0;
let v1=0.5,v2=0.4,v3=0.3,v4=0.2;
let dv=1;
let x;

document.querySelector('body > main > header > div:nth-child(3) > p').style.cssText=`
  // width:70px;
  max-width:100%;
`;
function moveBg(){
  document.querySelector('body > main > header > div.imAges > strong:nth-child(2)').style.cssText=`
  // height:70px;
    position:relative;
    top:5px;
    // width:70px;
  `;
  pos1+=v1*dv;
  pos2+=v2*dv;
  pos3+=v3*dv;
  pos4+=v4*dv;
  document.querySelector('body > main > header > div:nth-child(3) > p').style.backgroundPositionX=pos1+"px,"+pos2+"px,"+pos3+"px,"+pos4+"px,0px";
}

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
