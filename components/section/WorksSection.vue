<template>
  <section id="works" class="section">
    <div class="inner">
      <h2 class="section-title">WORKS</h2>
      <div class="section-body card-wrapper">
        <WorksCard v-for="work in works" :key="work.title" :card="work"></WorksCard>
      </div>
    </div>
  </section>
</template>

<script>
import WorksCard from '../module/WorksCard.vue';

export default {
  compornents: {
    WorksCard,
  },
  data() {
    return {
      works: [
        {
          title: 'Terraform Web',
          href: 'https://github.com/TurtleBuild/terraform-web',
          src: require('~/static/image/works/iac.png'),
          techs: ['Terraform', 'AWS'],
        },
        {
          title: 'PacVim',
          href: 'https://github.com/TurtleBuild/pacvim',
          src: require('~/static/image/works/pacvim.png'),
          techs: ['Go'],
        },
        {
          title: 'Qiitaいいねランキング',
          href: 'http://qiita-likes-rank.s3-website-ap-northeast-1.amazonaws.com/',
          src: require('~/static/image/works/qiita.png'),
          techs: ['Go', 'AWS'],
        },
      ],
    };
  },
};
</script>

<style>
#works .card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#works .card-wrapper::after {
  display: block;
  flex-basis: 31%;
  content: '';
}
</style>
