<template>
  <div class="card">
    <a :href="card.href" class="card-image hover-action" target="_blank"><img :src="card.src" /></a>
    <div class="card-caption">
      <div class="card-caption-title">{{ card.title }}</div>
      <div class="card-caption-info">
        <ul class="inline-list">
          <li v-for="tech in card.techs" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
#works .card {
  flex-basis: 31%;
  margin-bottom: 60px;
}

#works .card:nth-child(3n + 1):nth-last-child(-n + 3),
#works .card:nth-child(3n + 1):nth-last-child(-n + 3) ~ div {
  margin-bottom: 0;
}

#works .card-image img {
  width: 100%;
}

#works .card-caption {
  text-align: center;
}

#works .card-caption-title {
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
}

#works .card-caption-info li {
  margin: 0;
  font-size: 12px;
}

#works .card-caption-info li:not(:last-child)::after {
  margin: 0 0.2rem;
  content: '/';
}

@media screen and (max-width: 767px) {
  #works .card {
    flex-basis: 48%;
    margin-bottom: 30px;
  }

  #works .card:nth-child(3n + 1):nth-last-child(-n + 3),
  #works .card:nth-child(3n + 1):nth-last-child(-n + 3) ~ div {
    margin-bottom: 30px;
  }

  #works .card:nth-child(2n + 1):nth-last-child(-n + 2),
  #works .card:nth-child(2n + 1):nth-last-child(-n + 2) ~ div {
    margin-bottom: 0;
  }

  #works .card-caption-title {
    font-size: 12px;
  }

  #works .card-caption-info li {
    font-size: 10px;
  }
}
</style>
