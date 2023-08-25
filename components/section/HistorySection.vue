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
          title: '中古流通業 パートナー向けプラットフォーム構築',
          span: '2022年10月～2023年6月',
          role: 'インフラエンジニア',
          duties: [
            'Kubernetesクラスタ構成変更',
            'Kubernetesクラスタ内ネットワーク構成変更',
            'Kubernetes環境 CI/CD設計・構築（GitOps）',
            '既存保守デプロイフローの改善（設計・構築）',
          ],
          techs: ['AWS', 'Kubernetes', 'ArgoCD', 'Ansible', 'Microsoft SQL Server', 'Redis', 'Fluentd', 'nginx'],
          envs: ['Windows', 'CentOS 7', 'GitLab', 'Jira'],
        },
        {
          title: 'BtoBプラットフォーム構築',
          span: '2022年6月～2022年9月',
          role: 'Goエンジニア / サーバレスアーキテクト',
          duties: [
            'サーバレスアーキテクチャ設計・構築',
            'サーバレスアーキテクチャ CI/CD設計・構築',
            'サーバレスアプリケーション方式設計',
            'サーバレスアプリケーション雛形作成',
            'Elasticsearch 全文検索アーキテクチャ設計',
          ],
          techs: ['AWS Lambda', 'AWS CDK', 'Go', 'TypeScript', 'PostgreSQL', 'Elasticsearch'],
          envs: ['Mac', 'VSCode', 'Docker Compose', 'GitHub'],
        },
        {
          title: 'エンタープライズ向けECフレームワーク再編',
          span: '2022年3月～2022年9月',
          role: 'AWSアーキテクト / IaCエンジニア',
          duties: [
            'AWSアカウント設計 / 見積もり',
            'ネットワーク設計',
            'インフラストラクチャ全体設計 / 技術選定',
            'Inflastructure as Code 構成管理策定',
            'CI/CD設計・構築 / デプロイ戦略策定',
            'Spring Boot プロジェクトベース開発',
            'Nuxt3 プロジェクトベース開発',
            'Terraform AWSインフラ開発',
            'AWSインフラ負荷試験環境構築 / 負荷試験実施',
          ],
          techs: ['AWS', 'Terraform', 'Spring', 'Java', 'Nuxt.js', 'Vue.js', 'TypeScript', 'MySQL', 'JMeter'],
          envs: ['Mac', 'InteliJ', 'VSCode', 'Gradle', 'Docker Compose', 'Swagger', 'Jira', 'Bitbucket'],
        },
        {
          title: '不動産業 モール型ECサイトの設計・構築',
          span: '2020年10月～2022年2月',
          role: 'AWSアーキテクト / IaCエンジニア',
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
          role: 'Javaエンジニア',
          duties: [
            '各種APIの設計・実装・試験',
            '各種テーブルの設計',
            '社内ツールの作成',
            'ブランチ管理/デプロイ管理・作業',
            'インフラ構築・運用',
          ],
          techs: ['Spring', 'Java', 'Go', 'Microsoft SQL Server', 'Redis', 'Elasticsearch', 'Kibana', 'Kubernetes', 'nginx'],
          envs: ['Windows', 'CentOS 7', 'Eclipse', 'Gradle', 'Docker', 'Backlog', 'GitLab'],
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
