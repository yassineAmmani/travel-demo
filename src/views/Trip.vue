<template>
<div class="istext">
    <div class="wrapper">
      <div class="static-text">I'm a</div>
      <ul class="dynamic-text">
        <li><span>YouTuber</span></li>
        <li><span>Devloper</span></li>
        <li><span>Freelancer</span></li>
      </ul>
    </div>
   
</div>
<br/>

 <p class="line-1 anim-typewriter">Animation typewriter style using css steps()</p>

</template>

<style scoped>
.line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}



.istext{
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vh;
  background-color: #343F4F;
}
.wrapper{
  display: flex;
}
.wrapper .static-text{
  color: #fff;
  font-size: 60px;
  font-weight: 400;
}
.wrapper .dynamic-text{
  margin-left: 15px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.dynamic-text li{
  list-style: none;
  color: #FC6D5D;
  font-size: 60px;
  font-weight: 500;
  position: relative;
  top: 0;
  animation: slide 12s steps(4) infinite;
}
.dynamic-text li span{
  position: relative;
  margin: 5px 0;
  line-height: 90px;
}
.dynamic-text li span ::after{
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background: #343F4F;
  border-left: 2px solid #FC6D6D;
  animation: typing 3s steps(10) infinite;
}
@keyframes slide{
  from{
    0%{
      left: 0;
    }
  }
  100%{
   left: 40px;
  }
}
@keyframes typing{
  40%,60%{
    left: calc(100% +30px);
  }
  100%{
    left: 0;
  }
}
</style>
