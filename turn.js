document.querySelector('body > main > header > nav > ul > li:nth-child(6) > a').addEventListener('click',()=>{
  // document.querySelector('body');
  if(document.querySelector('#goStart')){
    console.log('the button has already been pressed');
  }else{
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
    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > div:nth-child(4) > button:nth-child(1)').setAttribute('id','goStart');
  }
  // console.log(typeof(goStart));
  // what is?
    if(typeof(goStart)=='object'){
      console.log(typeof(goStart));
      document.querySelector('#goStart').addEventListener('click',()=>{
        console.log('&&&');
        document.querySelector('body > main:nth-child(1) > header:nth-child(1) > div:nth-child(4) > p:nth-child(2)')
      if(!document.querySelector('body > main:nth-child(1) > header:nth-child(1) > div:nth-child(4) > p:nth-child(2)')){
        let timer=document.createElement('p');
        document.querySelector('body > main > header > div:nth-child(4)').append(timer);
        let timerOn=Math.floor(Math.random()* 100);
        console.log(timerOn);
      }else{
        console.log("the button has already been pressed");
        
      }
      });
    }else{
      console.log(typeof(goStart));
    }
});
