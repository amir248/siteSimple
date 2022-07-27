const menuList='<a href="https://www.figma.com/file/6l7xEWh5vOwSLGXUXtlYQv/MINIMAL?node-id=1%3A2">ORIGIN</a><a href="#process">PROCESS</a><a href="#projects">PROJECTS</a><a href="#team">TEAM</a><a href="#contact">CONTACT</a> '

window.addEventListener('scroll',()=>{
  // console.log('scroll');
  let clickCount=+0;
  function hiMenu(){
    clickCount++;
    console.log('LOL');
    // document.addEventListener
    if(clickCount==1){
      let Section =document.createElement('section');
      document.body.append(Section);
      Section.style.cssText=`
      display:flex;
      position:fixed;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:100%;
      height:100%;
      background:white;
      z-index:0;
      top:0;
      `;
      document.querySelector('body').style.overflow=`hidden`;
      // document.querySelector('body > section > a').style.cssText=`
      //   margin:3%;
      //   border-radius:30px;
      //   background:rgba(255,0,255,0.3);
      // `;
    }
      // body > section
      document.querySelector('body > section').addEventListener('click',()=>{
        document.querySelector('body > section').remove();
        document.querySelector('body').style.overflow=`auto`;
      });
      clickCount=0;

  }//hiMenu

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
      const menu=document.createElement('p');
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
        // menu.onclick=hiMenu;
        console.log(typeof(document.querySelector('#mEnu')));
              // append
        // document.querySelector('body > main > header > nav').append(menu);
          document.querySelector('#mEnu').addEventListener('click',()=>{
            hiMenu();
              document.querySelector('body > section').innerHTML=`${menuList}`;
            // console.log('menu_Click');
          });

    }else{
      console.log("SCROLL_est");
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
  console.log("wiw");
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
// Ahtung! Ahtung main campfF und uberlieben/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if(scrollY>100){

}
