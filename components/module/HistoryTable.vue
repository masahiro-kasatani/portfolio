<template>
  <div class="history-table">
    <h3>{{ project.title }}</h3>
    <table>
      <tbody>
        <tr>
          <td>期間：</td>
          <td>{{ project.span }}</td>
        </tr>
        <tr>
          <td>役割：</td>
          <td>{{ project.role }}</td>
        </tr>
        <tr>
          <td>業務：</td>
          <td>
            <ul class="duty-list">
              <li v-for="duty in project.duties" :key="duty">{{ duty }}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>技術：</td>
          <td>
            <ul class="inline-list skill-list">
              <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>環境：</td>
          <td>
            <ul class="inline-list env-list">
              <li v-for="env in project.envs" :key="env">{{ env }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
#history .history-table {
  margin-bottom: 2.5rem;
}

#history table {
  width: auto;
}

#history table td {
  min-width: 50px;
}

#history ul.duty-list li::before {
  margin-right: 0.4rem;
  content: '-';
}

#history ul.skill-list li,
#history ul.env-list li {
  display: inline-block;
  padding: 0.3rem 0.4rem 0.2rem;
  margin: 0 0.1rem 0.6rem 0;
  font-size: 0.8rem;
  line-height: 1;
  text-decoration: none;
}

#history ul.skill-list li {
  color: #fff;
  background-color: #363636;
}

#history ul.env-list li {
  color: #363636;
  background-color: #fff;
  border: 1px solid #363636;
}
</style>
