<template>
  <div id="wrapper">
    <TheHeader></TheHeader>
    <main id="contents">
      <AboutSection></AboutSection>
      <HistorySection></HistorySection>
      <WorksSection></WorksSection>
      <ContactSection></ContactSection>
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import AboutSection from '../components/section/AboutSection.vue';
import HistorySection from '../components/section/HistorySection.vue';
import WorksSection from '../components/section/WorksSection.vue';
import ContactSection from '../components/section/ContactSection.vue';

export default {
  components: {
    TheHeader,
    AboutSection,
    HistorySection,
    WorksSection,
    ContactSection,
  },
};
</script>
