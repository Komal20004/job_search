<template>
  <!-- v-on: click="handleClick"-->
  <!-- @click="handleClick" -->
  <button :class="buttonClass" @click="doubleHeight">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return [("primary", "secondary")].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
  methods: {
    doubleHeight() {
      this.height = this.height * 2;
    },
  },
};
</script>

<style scoped>
button {
  /* apply helps to add tailwind classes to css classes */
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply rounded border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
