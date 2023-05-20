<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grey-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <lable class="absolute left-0 -top-10">Role</lable>
        <!-- <input
          type="text"
          v-model="role"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        /> -->
        <text-input v-modal="role" placeholder="Software engineer" />
        <!-- v-on:input -->
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-grey-3 bg-brand-grey-2 px-3"
        >In
      </span>

      <div class="relative flex h-full flex-1 items-center pl-3">
        <lable class="absolute left-0 -top-10">Where ?</lable>
        <text-input
          placeholder="Los engineer"
          v-modal="location"
          @handle-input="location = $event"
        />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  data() {
    return {
      role: "",
      location: "",
    };
  },
  components: { ActionButton, TextInput },
  methods: {
    updateRole(payload) {
      console.log(payload);
      this.role = payload;
    },
    updateLocation(payload) {
      this.location = payload;
    },
  },
};
</script>
