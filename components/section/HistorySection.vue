<template>
  <section id="history" class="section">
    <div class="inner">
      <h2 class="section-title">HISTORY</h2>
      <div class="section-body">
        <HistoryTable v-for="history in histories" :key="history.title" :project="history"></HistoryTable>
      </div>
    </div>
  </section>
</template>

<script>
import HistoryTable from '../module/HistoryTable.vue';

export default {
  components: {
    HistoryTable,
  },
  data() {
    return {
      histories: [
        {
          title: 'エンタープライズ向けECフレームワーク再編',
          span: '2022年3月～',
          role: 'ITアーキテクト',
          duties: [
            'AWSアカウント構成策定 / 見積もり',
            'ネットワーク構成策定',
            'インフラストラクチャ全体構成策定 / 技術選定',
            'Inflastructure as Code 構成管理策定',
            'CI/CD基盤構成策定 / デプロイ戦略策定',
            'Spring Boot プロジェクトベース開発',
            'Nuxt3 プロジェクトベース開発',
            'Terraform AWSインフラ開発'
          ],
          techs: ['AWS', 'Terraform', 'Spring', 'Java', 'Nuxt.js', 'Vue.js', 'TypeScript', 'MySQL'],
          envs: ['Mac', 'InteliJ', 'VSCode', 'Gradle', 'Docker Compose', 'Swagger', 'Jira', 'Bitbucket'],
        },
        {
          title: '不動産業 モール型ECサイトの設計・構築',
          span: '2020年10月～2022年2月',
          role: 'AWSエンジニア / アーキテクト',
          duties: [
            'AWS CDK 開発',
            'AWS CDK Construct Library の開発',
            'Spring Boot プロジェクトベース開発',
            'Batch アプリケーション基本設計・詳細設計',
            'CI/CD 基盤の構築',
          ],
          techs: ['AWS', 'AWS CDK', 'TypeScript', 'Spring', 'Java', 'MySQL'],
          envs: ['Mac', 'VSCode', 'Yarn', 'Gradle', 'Flyway', 'Docker Compose', 'LocalStack', 'Jira', 'Bitbucket'],
        },
        {
          title: '中古流通業 基幹システムの刷新',
          span: '2020年3月～2021年2月',
          role: 'PG',
          duties: [
            '各種APIの設計・実装・試験',
            '各種テーブルの設計',
            '社内ツールの作成',
            'ブランチ管理/デプロイ管理・作業',
            'インフラ構築・運用',
          ],
          techs: ['Spring', 'Java', 'Go', 'SQL Server', 'Redis', 'Elasticsearch', 'Kibana', 'Kubernetes'],
          envs: ['Windows', 'Eclipse', 'Gradle', 'Docker', 'Backlog', 'GitLab'],
        },
      ],
    };
  },
};
</script>

<style>
#history .inner {
  max-width: 700px;
}
</style>
