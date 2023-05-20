<template>
  <input
    type="text"
    :value="modalValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modalValue: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     value: "",
  //   };
  // },
  methods: {
    handleInput($event) {
      // this.value = $event.target.value;
      this.$emit("update:modalValue", $event.target.value);
      // this.$emit("handleInput", $event.target.value);
    },
  },
};
</script>
