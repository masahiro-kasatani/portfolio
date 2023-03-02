<template>
  <section id="contact" class="section">
    <div class="inner">
      <div class="section-title-area">
        <h2 class="section-title">CONTACT</h2>
      </div>
      <div class="section-body">
        <div class="contact-list">
          <div class="contact-mail">kasatani1226@gmail.com</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#contact .contact-list ul {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;
}

#contact .contact-list li {
  display: flex;
  align-items: center;
  text-align: center;
}

#contact .contact-list li a {
  color: #333;
}

#contact .contact-list li img {
  width: 50px;
}

#contact .contact-list-desc {
  font-weight: bold;
}

#contact .contact-mail {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
</style>
