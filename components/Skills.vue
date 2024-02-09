<template lang="pug">
.card 
    .card-header 
        .pull-left.row
            .col 
            h4.mt-2 Skills
            .col.text-right (by Years exp)
            //- TODO: use one style of underscore
            span.-webkit-linear-gradient
        //- TODO: add filters for years of exp and skill level? or most recent?
        //- TODO: Skill % = number of years skill has been used / total years as a dev?
    .card-body.pb-2
        div(v-for="(value, skill) in skillCounts" :key="skill")
            h6 {{ skill }}
            .progress.mb-3 
                .progress-bar.bg-danger(role="progressbar" :style="{width:value/highestSkillValue*100 + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
    </template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data: function () {
    return {
      // uniqueSkills: [],
      exps: [
        {
          startDate: new Date(2021, 4),
          endDate: new Date(2023, 9),
          title: "Front-end Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
          skills: [
            "Microsoft Azure",
            "TypeScript",
            "Github",
            "Express.js",
            "React.js",
            "GatsbyJS",
            "PHP",
            "Next.js",
            "Docker Products",
            "SASS",
            "Redux.js",
            "Leadership",
            "Node.js",
            "Git",
            "JavaScript",
            "Team Leadership",
            "Amazon Web Services (AWS)",
            "Symfony Framework",
            "Tailwind CSS",
          ],
        },
        {
          startDate: new Date(2019, 11),
          endDate: new Date(2021, 4),
          employer: "Johnston Software Developement",
          title: "Freelance",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
          skills: [
            "TypeScript",
            "Github",
            "Express.js",
            "Flutter",
            "iOS",
            "React.js",
            "PHP",
            "Next.js",
            "Docker Products",
            "SASS",
            "Redux.js",
            "Leadership",
            "Vue.js",
            "Node.js",
            "Android",
            "Nuxt.js",
            "Git",
            "JavaScript",
            "Team Leadership",
            "Amazon Web Services (AWS)",
            "Java",
          ],
        },
        {
          startDate: new Date(2018, 3),
          endDate: new Date(2019, 8),
          employer: "E-data Now!",
          title: "Software Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
          skills: [
            "Github",
            "Flutter",
            "iOS",
            "SASS",
            "Vue.js",
            "Android",
            "Nuxt.js",
            "Git",
            "JavaScript",
            "Java",
            "PostgreSQL",
            "Github",
            "Flutter",
            "iOS",
            "SASS",
            "Vue.js",
            "Android",
            "Nuxt.js",
            "Git",
            "JavaScript",
            "Java",
            "PostgreSQL",
          ],
        },
        {
          startDate: new Date(2017, 4),
          endDate: new Date(2019, 3),
          dates: "Dec 2019 - May 2021",
          employer: "Oiika",
          title: "Software Engineer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
          skills: [
            "TypeScript",
            "Github",
            "Express.js",
            "React.js",
            "SASS",
            "Node.js",
            "Git",
            "JavaScript",
            "TypeScript",
            "Github",
            "Express.js",
            "React.js",
            "SASS",
            "Node.js",
            "Git",
            "JavaScript",
          ],
        },
      ],
      eds: [
        {
          dates: "2018",
          title: "Computer Programming Analyst",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
        },
      ],
      skillCounts: { Github: 1 },
    };
  },
  computed: {
    // computedSkills(skill) {
    //     exps.map()
    //     return this.$route.name
    // },
    uniqueSkills() {
      return Array.from(new Set(this.allSkills));
    },
    // skillCounts() {
    //   return this.countUniqueValues(this.allSkills);
    // },
    allSkills() {
      console.log(
        "this.exps",
        this.exps.map((exp) => {
          return exp.skills;
        }),
      );
      return this.exps
        .map((exp) => {
          return exp.skills;
        })
        .reduce((acc, curr) => acc.concat(curr), []);
    },
    highestSkillValue() {
      const values = Object.values(this.skillCounts);
      return Math.max(...values);
    },
  },
  mounted() {
    // Update the list to be sorted by most common skill
    // Sort the array based on the values
    // Convert the sorted array back to an object if needed
    const entries = Object.entries(this.countUniqueValues(this.allSkills));
    entries.sort((a, b) => b[1] - a[1]);
    this.skillCounts = Object.fromEntries(entries);
  },
  methods: {
    getMonthDay(date) {
      const dateObject = new Date(date);
      const options = { month: "short", year: "numeric" };
      const formattedDate = dateObject.toLocaleString("en-US", options);
      return formattedDate !== "Invalid Date" ? formattedDate : " ";
    },
    countUniqueValues(arr) {
      const counts = {};

      // Count occurrences of each unique value
      arr.forEach((value) => {
        console.log("value", value);
        console.log("arr", arr);
        // TODO: 1 should be adjusted by weight
        counts[value] = (counts[value] || 0) + 1;
      });

      return counts;
    },
  },
});
</script>

<style scoped>
.card .card-header {
  background: 0 0;
  border: none;
}
.progress-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #f85c70;
  -webkit-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.bg-danger {
  background-color: #f85c70 !important;
}
.progress {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 0.3rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #eaf0fc;
  border-radius: 0.25rem;
}
.section {
  padding: 80px 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #eaf0fc;
  border-radius: 0.25rem;
}
</style>
