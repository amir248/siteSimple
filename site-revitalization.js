window.addEventListener('scroll',()=>{
  // console.log('scroll');
  if(scrollY>=100){
      document.querySelector('body > main > header > nav').style.cssText=`
      position:fixed;
      min-height:77px;
      top:0;
    `;
    // console.log(typeof(mEnu));
    if(typeof(mEnu)=='object'){
      mEnu.style.display='block';
    }
    document.querySelector('body > main > header > nav > ul').style.display='none';
    if(!document.querySelector('body > main > header > nav > p:nth-child(3)')){
      let menu=document.createElement('p');
      document.querySelector('body > main > header > nav').append(menu);
      menu.style.cssText=`background:rgba(0,255,0,0.1);border-radius:50%;`
      let line=document.createElement('span');
      document.querySelector('body > main > header > nav > p:nth-child(3)').append(line);
        document.querySelector('body > main > header > nav > p:nth-child(3) > span').style.cssText=`
          width:30px;height:3px; background:grey;display:block;margin-bottom:10px;margin-top:10px;
        `;
      let lineTwo=document.createElement('span');
      document.querySelector('body > main > header > nav > p:nth-child(3)').append(lineTwo);
        document.querySelector('body > main > header > nav > p:nth-child(3) > span:nth-child(2)').style.cssText=`
          width:30px;height:3px; background:grey;display:block;margin-bottom:10px;
        `;
      let lineThree=document.createElement('span');
      document.querySelector('body > main > header > nav > p:nth-child(3)').append(lineThree);
        document.querySelector('body > main > header > nav > p:nth-child(3) > span:nth-child(3)').style.cssText=`
          width:30px;height:3px; background:grey;display:block;margin-bottom:10px;
        `;
        menu.setAttribute('title','Menu');
        menu.id="mEnu";
    }else{
      console.log("est");
    }
  }else if(scrollY<=100){
    document.querySelector('body > main > header > nav').style.cssText=`
    position:relative;
    min-height:107px;
  `;
      console.log('else if');
      document.querySelector('body > main > header > nav > ul').style.cssText=`
        display:block;
        max-width:470px;
      `;
      if(scrollY<=100&&typeof(mEnu)=='object'){
        // console.log("menu");
        if(typeof(mEnu)==true){
          mEnu.style.display='none';
        }
        mEnu.style.display=`none`;
      }
  }else{
    console.log('else');
  }
});
// If the screen width is more than five acres
let wiw=window.innerWidth;
if(wiw=>500){
  console.log("win");
}

// Ahtun! Ahtun main campfF und uberlieben/
if(scrollY>100){
  // console.log(typeof(document.querySelector('#mEnu')));
document.querySelector('#mEnu').addEventListener('click',()=>{
  console.log('menu_Click')
});
}
