<template lang="pug">
div
    .row(v-for="(data, index) in info" :key="index" v-if="data.type !== 'Location' || location")
        .col-4 
            b {{data.type}} : &nbsp;
        .col-8 {{data.data}}
    Socials
    .row.py-2
      .col.text-center
        ResumeBtn
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  props: {
    location: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      info: [
        { type: "Email", data: "derek@derekjohnston.ca" },
        { type: "Cell", data: "+1 (905) 926-8279" },
        { type: "Location", data: "Durham Region, Ontario, Canada" },
        { type: "Open to", data: "Remote or local work" },
      ],
    };
  },
});
</script>

<style scoped>
.brand-img {
  height: 600px;
  width: 100%;
}
.splash {
  height: 600px;
  background-size: 100% auto;
}
.row {
  margin-top: 20px;
}
</style>
