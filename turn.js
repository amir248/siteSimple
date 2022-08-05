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
let puth='https://amir248.github.io/siteSimple//post.html';
  // function run(){
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", `${puth}`, true);
  // xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
  // if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
  // document.getElementById("demo").innerHTML = this.responseText;
  // }
  // }
  // xhr.send();
  // }

  function run() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", `${puth}`, true);
    xhttp.send();
  }
run();
  // run();
  // console.log(typeof(goStart));
  let countClick=+0;
  // what is?
    if(typeof(goStart)=='object'){
      countClick++;
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
        countClick++;
        console.log("the button has already been pressed");
        if(countClick==1){
          count.innerHTML=`0`;

          console.log("newCirle")
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`newsCircle`;

          // let audio=document.createElement('source');
          // document.querySelector('body > main > header > div:nth-child(4) > p').append(audio);
          let y='/home/chikchicly/Tysur/prodjects/Final_project/siteSimple/audio/dva2.mp3';
          // puth='https://amir248.github.io/siteSimple/post.html';
          run();
        }else if(countClick==2){
          console.log(countClick);
          let count=document.createElement('span');
          document.querySelector('body > main > header > div:nth-child(4)').append(count);
          count.innerHTML=`newsCircle`;
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`1`;
          count.style.cssText=`font-size:30px;color:violet;text-shadow:1px 1px black;`
          console.log(countClick);

          let audio=document.createElement('audio');
          document.querySelector('body > main > header > div:nth-child(4) > p').append(audio);
            let source=document.createElement('source');
              document.querySelector('body > main > header > div:nth-child(4) > p > audio').append(source);
              document.querySelector('body > main > header > div:nth-child(4) > p > audio').setAttribute('autoplay','');
          document.querySelector('body > main > header > div:nth-child(4) > p > audio > source').setAttribute('src','audio/odin1.mp3');

          // puth='https://amir248.github.io/siteSimple/audio2.html';
          puth='https://amir248.github.io/siteSimple/post.html';

          run();

        }else if(countClick==3){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`2`;
          console.log(countClick);
          document.querySelector('body > main > header > div:nth-child(4) > span:nth-child(4)').remove();



          puth='https://amir248.github.io/siteSimple/audio2.html';
          run();
          // document.getElementById("demo").innerHTML="oK";
        }else if(countClick==4){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`3`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio3.html';
          run();
        }else if(countClick==5){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`4`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio4.html';
          run();
        }else if(countClick==6){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`5`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio5.html';
          run();
        }else if(countClick==7){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`6`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio6.html';
          run();
        }else if(countClick==8){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`7`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio7.html';
          run();
        }else if(countClick==9){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`8`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio8.html';
          run();
        }else if(countClick==10){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`9`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio9.html';
          run();
        }else if(countClick==11){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`10`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio10.html';
          run();
        }else if(countClick==12){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`11`;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio11.html';
          run();
        }else if(countClick==13){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`12`;
          countClick=0;
          console.log(countClick);
          puth='https://amir248.github.io/siteSimple/audio12.html';
          run();
        }else if(countClick==14){
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=`newsCircle`;
          countClick=0;
          document.querySelector('body > main > header > div:nth-child(4) > span:nth-child(3)').remove();

          document.querySelector('body > main > header > div:nth-child(4) > span:nth-child(3)').remove();
          return countClick=0;

          console.log(countClick);
        }else{
          document.querySelector('body > main > header > div:nth-child(4) > span').innerHTML=``;
          console.log('newCirle');
          console.log(countClick);
          countClick=0;
          // document.querySelector('body > main > header > div:nth-child(4) > span:nth-child(4)').innerHTML=`newCirle`;
          return countClick=0;
        }
      }
      });
    }else{
      console.log(typeof(goStart));
    }
});
