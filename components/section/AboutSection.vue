<template>
  <section id="about" class="section">
    <div class="inner">
      <h2 class="section-title">ABOUT</h2>
      <div class="section-body">
        <div class="image-area">
          <img src="~/static/image/about/prof.png" />
        </div>
        <div class="description-area">
          <table>
            <tbody>
              <tr>
                <td>名前：</td>
                <td>{{ name }}</td>
              </tr>
              <tr>
                <td>年齢：</td>
                <td>{{ age }}歳</td>
              </tr>
              <tr>
                <td>住所：</td>
                <td>{{ place }}</td>
              </tr>
              <tr>
                <td>略歴：</td>
                <td>
                  <ul class="bio-list">
                    <li v-for="bio in bioList" :key="bio">{{ bio }}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>専門：</td>
                <td>
                  <ul class="specialized-list">
                    <li v-for="specialized in specializedList" :key="specialized.title">{{ specialized.title }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="badge-area">
        <a v-for="badge in badges" :key="badge.href" :href="badge.href" target="_blank"><img :src="badge.src" /></a>
      </div>
      <!-- <div class="link-area">
        <a v-for="link in links" :key="link.href" :href="link.href" target="_blank"><img :src="link.src" /></a>
      </div> -->
      <div class="specialized-area">
        <dl v-for="specialized in specializedList" :key="specialized.title">
          <dt>
            <h4>{{ specialized.title }}</h4>
          </dt>
          <dd>{{ specialized.desc }}</dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '笠谷 昌弘（カサタニ マサヒロ）',
      place: '東京都',
      bioList: ['2016年 SCSK株式会社 入社', '2020年 独立'],
      specializedList: [
        {
          title: 'AWSアーキテクティング',
          desc: '非機能要件やコストから、最適な AWSインフラ構成を提案します。絵に描いた餅にならないよう、FSを実施し、実現性を担保します。「手を動かせるアーキテクト」であることが私の強みです。',
        },
        {
          title: 'Infrastructure as Code の導入',
          desc: 'Terraform、AWS CDK で様々なインフラを構築してきました。その経験から、テックリードとして AWSインフラのコード化を推進できます。',
        },
        {
          title: 'CI/CDの構築',
          desc: 'アプリケーション、IaC、コンテナ、DBマイグレーションなど、様々なリソースのCI/CDを構築してきました。同時に、Blue-GreenやCanaryなど、デプロイ戦略の策定および、AWSにおける実現手法についてもサポート可能です。',
        },
        {
          title: 'アプリケーションアーキテクティング',
          desc: 'Spring および Nuxt.js を専門としています。プロジェクト構成検討や共通ライブラリの開発など、根幹部分を担当できます。また、AWS SDKを利用する際のローカル開発環境構築などもサポートできます。',
        },
      ],
      // links: [
      //   {
      //     href: 'https://turtlebuild.hatenablog.com/',
      //     src: require('~/static/image/about/links/hatena.png'),
      //   },
      //   {
      //     href: 'https://zenn.dev/kasa?tab=scraps',
      //     src: require('~/static/image/about/links/zenn.png'),
      //   },
      //   {
      //     href: 'https://github.com/TurtleBuild',
      //     src: require('~/static/image/about/links/github.png'),
      //   },
      // ],
      badges: [
        {
          href: 'https://www.credly.com/badges/4acbfd19-c02f-44a8-b548-d95422d00f07/public_url',
          src: require('~/static/image/about/badges/oracle-master-bronze-oracle-database-12c-jpn.1.png'),
        },
        {
          href: 'https://www.credly.com/badges/c378b206-7e85-45c5-8e13-022aaf323db2/public_url',
          src: require('~/static/image/about/badges/aws-certified-solutions-architect-associate.png'),
        },
      ],
    };
  },
  computed: {
    age() {
      const birthday = {
        year: 1991,
        month: 12,
        date: 26,
      };
      const today = new Date();
      const thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date);
      let age = today.getFullYear() - birthday.year;

      if (today < thisYearsBirthday) {
        age--;
      }
      return age;
    },
  },
};
</script>

<style>
#about .section-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#about .section .inner {
  max-width: 1200px;
}

#about .image-area {
  flex-basis: 40%;
  margin: 0 auto;
}

#about .image-area img {
  width: 250px;
  margin: 0;
  margin-right: 40px;
  margin-left: auto;
  border-radius: 50%;
  box-shadow: 0 0 25px 0 #d9d9d9;
}

#about table {
  width: auto;
}

#about table td {
  min-width: 50px;
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
}

#about .description-area {
  flex-basis: 60%;
}

#about .description-area td {
  white-space: pre-line;
}

/* #about .link-area, */
#about .badge-area {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

/* #about .link-area {
  margin-top: 1rem;
} */

/* #about .link-area a, */
#about .badge-area a {
  display: inline-block;
  margin: 0 1rem;
}

#about .specialized-area {
  max-width: 600px;
  margin: 2rem auto 0;
}

#about .specialized-area dd {
  margin-bottom: 1rem;
  margin-left: 1rem;
  white-space: pre-line;
}

@media screen and (max-width: 767px) {
  #about .image-area {
    flex-basis: 100%;
  }

  #about .image-area img {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  #about .badge-area {
    margin-top: 1rem;
  }

  #about .description-area {
    flex-basis: 100%;
  }
}
</style>
