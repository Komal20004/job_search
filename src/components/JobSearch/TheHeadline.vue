<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }} </span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at bobo corp.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLocaleLowerCase()]: true,
      };
    },
  },
  beforeUnmount() {
    console.log(this.interval, "interval");
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
  created() {
    this.changeTitle();
    // console.log("hey i am created", this.sample);
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
