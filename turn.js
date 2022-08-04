document.querySelector('body > main > header > nav > ul > li:nth-child(6) > a').addEventListener('click',()=>{
  document.querySelector('body');
  console.log('ok')
  let turn=document.createElement('div');
  document.querySelector('header').append(turn);
  document.querySelector('body > main > header > div:nth-child(4)').style.cssText=`
    background:green;
    min-height:30px;
    // height:300px;
  `;
  let btn=document.createElement('button');
  btn.style.cssText=`
    background: yellow;
    color:cyan;
    text-shadow:1px 1px black;
  `;
  btn.innerHTML=`startTurn`
  document.querySelector('body > main > header > div:nth-child(4)').append(btn);
  document.querySelector('body > main > header > div:nth-child(3) > button').setAttribute('id','goStart');
  console.log(goStart);
  if(typeof(goStart)){

}else{
  document.querySelector('#goStart').addEventListener('click'=>{
    let timer=document.createElement('p');
    document.querySelector('body > main > header > div:nth-child(4)').append(timer);
  });
}
});
