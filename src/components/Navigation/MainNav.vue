<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="border- mx-auto flex h-full flex-nowrap border-b border-solid border-brand-grey-1"
      >
        <!-- v-bind directive use to bind/connect data to htm attribute -->
        <!-- shortcut is :attr -->
        <a :href="url" class="flex h-full items-center text-xl">
          {{ company }}
        </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <!-- v-for attr use to iterate through the chunk of elements -->
            <!-- key use unique  -->

            <li
              class="ml-9 h-full first:ml-0"
              v-for="menuItem in menuItems"
              :key="menuItem"
            >
              <a href="/" class="py-2.2 flex h-full items-center">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto mr-2 flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button
            text="Sign in"
            type="primary"
            v-else
            @click="loginUser"
          />
        </div>
      </div>
      <the-Subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      company: "Bobo Careers",
      url: "https://tailwindcss.com/docs/margin",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<!-- 124 => for test -->
