<template>
  <div id="header">
    <nav id="gnav" class="fixed">
      <ul>
        <li><nuxt-link v-scroll-to="'#about'" to="#">ABOUT</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#history'" to="#">HISTORY</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#works'" to="#">WORKS</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#contact'" to="#">CONTACT</nuxt-link></li>
      </ul>
    </nav>

    <div class="inner">
      <div class="logo">
        <h1 class="logo-title swirl">
          <span>M</span>
          <span>A</span>
          <span>S</span>
          <span>A</span>
          <span>H</span>
          <span>I</span>
          <span>R</span>
          <span>O</span>
          <span> </span>
          <span>K</span>
          <span>A</span>
          <span>S</span>
          <span>A</span>
          <span>T</span>
          <span>A</span>
          <span>N</span>
          <span>I</span>
        </h1>
        <p class="logo-desc">PORTFOLIO</p>
      </div>
    </div>
  </div>
</template>

<style>
#header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86vh;
}

#header .logo {
  position: relative;
  margin-bottom: 30px;
  text-align: center;
}

#header .logo-title {
  font-size: 64px;
  font-weight: normal;
}

#header .logo-desc {
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.2em;
}

.swirl {
  perspective: 1000px;
}

.swirl span {
  display: inline-block;
  transform-origin: 50% 50% -25px;
  transform-style: preserve-3d;
  animation: swirl 1.6s;
}

.swirl span:nth-child(2) {
  animation-delay: 50ms;
}

.swirl span:nth-child(3) {
  animation-delay: 100ms;
}

.swirl span:nth-child(4) {
  animation-delay: 150ms;
}

.swirl span:nth-child(5) {
  animation-delay: 200ms;
}

.swirl span:nth-child(6) {
  animation-delay: 250ms;
}

.swirl span:nth-child(7) {
  animation-delay: 300ms;
}

.swirl span:nth-child(8) {
  animation-delay: 350ms;
}

.swirl span:nth-child(9) {
  animation-delay: 400ms;
}

.swirl span:nth-child(10) {
  animation-delay: 450ms;
}

.swirl span:nth-child(11) {
  animation-delay: 500ms;
}

.swirl span:nth-child(12) {
  animation-delay: 550ms;
}

.swirl span:nth-child(13) {
  animation-delay: 600ms;
}

.swirl span:nth-child(14) {
  animation-delay: 650ms;
}

.swirl span:nth-child(15) {
  animation-delay: 700ms;
}

.swirl span:nth-child(16) {
  animation-delay: 750ms;
}

.swirl span:nth-child(17) {
  animation-delay: 800ms;
}
@keyframes swirl {
  0% {
    transform: rotateX(-360deg);
  }

  70% {
    transform: rotateX(0);
  }
}

#gnav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 3px -3px rgb(0 0 0 / 20%);
}

#gnav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#gnav li {
  padding: 0 30px;
  font-size: 18px;
  letter-spacing: 0.05em;
}

#gnav li a {
  position: relative;
  display: inline-block;
  padding: 20px 0;
  color: #333;
  transition: 0.3s;
}

#gnav li a:hover {
  text-decoration: none;
  opacity: 1;
}

#gnav li a::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  content: '';
  background-color: #333;
  transition: 0.3s;
  transform: translateX(-50%);
  transform: translateX(-50%);
}

#gnav li a:hover::after {
  width: 100%;
}

@media screen and (max-width: 767px) {
  #header {
    height: 70vh;
    padding: 0 25px;
  }

  #header .logo-title {
    font-size: 20px;
  }

  #header .logo-desc {
    font-size: 14px;
  }

  #gnav {
    padding: 15px 0;
  }

  #gnav li {
    padding: 2px 14px;
    font-size: 12px;
  }

  #gnav li a {
    padding: 0;
  }

  #gnav li a:hover {
    opacity: 1;
  }

  #gnav li a::after {
    display: none;
  }
}
</style>
