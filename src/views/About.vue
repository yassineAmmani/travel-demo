<template>
<div class="body">

  <div class="main">
    
      <div class="static"><span>I'm a</span></div>
      <ul class="dynamic">
        <li><span>YouTuber</span></li>
        <li><span>Devloper</span></li>
        <li><span>Programmer</span></li>
        <li><span>Freelancer</span></li>
      </ul>
  </div>
  <br/>
  
  <div class="loader">
 
      <h2 class="static-text"><span>I'm a</span></h2>
      <ul class="dynamic-text">
        <li><span><h1>YouTuber</h1></span></li>
        <li><span><h1>Devloper</h1></span></li>
        <li><span><h1>Freelancer</h1></span></li>
      </ul>
    
    <h1 class="anim">Loading...</h1>
  </div>
</div>
</template>

<style scoped>
.main {
  display: flex;
   -webkit-box-reflect: below -40px linear-gradient(transparent,#0003);
}
.main .static{
  font-size: 60px;
  color: #fff;
}
.main .dynamic{
  margin-left: 30px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.dynamic li{
  list-style: none;
  font-size: 60px;
  position: relative;
  top: 0;
  color: #03e9f4;
  animation: slide 12s steps(4) infinite;
}
@keyframes slide{
  100%{
    top: -360px;
  }
}
.dynamic li span{
  position: relative;
  line-height: 90px;

}
.dynamic li span::after{
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 120%;
  background: #121213;
  border-left: 2px solid #000;
  animation: typing 3s steps(10) infinite;
}
@keyframes typing{
  40%,60%{
    left: calc(100% + 30px);
  }
}


.body{
  display: flex;
  min-height: 100vh;
  background: #121213;
}
.static-text{
  color: #fff;
   font-size: 60px;
  font-weight: 400;
}
.dynamic-text {
  margin-left: 10px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.dynamic-text li{
  list-style: none;
  position: relative;
  top: 0;
   animation: slide 9s steps(3) infinite;
}
.dynamic-text li span{
  position: relative;
  margin: 5px 0;
  line-height: 90px;
}
@keyframes slide{
  from{
    0%{
      left: 0;
    }
  }
  100%{
    top: -360px;
  }
}





.loader{
  position: relative;
  -webkit-box-reflect: below -30px linear-gradient(transparent,#0003);
}
.loader::before{
  content: "";
  position: relative;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: #03e9f4;
  animation: blinkCusor 0.8s steps(3) infinite;
}
@keyframes blinkCusor {
  0%,75%{
    opacity: 1;
  }
  76%,100%{
    opacity: 0;
  }
}

.loader h1{
  position: relative;
  color:#03e9f4;
  letter-spacing: 5px;
  font-size: 4em;
  text-transform: uppercase;
  animation: typing 8s steps(10) infinite;
  overflow: hidden;
}
@keyframes typing{
  0%,90%,100%{
    width: 0;
  }
  30%,60%{
    width: 393px;
  }
}


</style>
