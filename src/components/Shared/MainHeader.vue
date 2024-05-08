<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useDialogStore } from '@/stores/dialog';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const auth = useAuthStore();

interface Items {
  title: string;
  url: string;
}

const isDrawerOpen = ref(false);
const items: Items[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Movies',
    url: '/movies',
  },
  {
    title: 'Cinemas',
    url: '/cinemas',
  },
];
const dialog = useDialogStore();
</script>

<template>
  <v-app-bar flat>
    <v-container class="d-flex justify-center align-center">
      <v-toolbar-title>
        <RouterLink to="/" class="logo">CINEMA</RouterLink>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" :class="route.path === '/' && 'bg-grey-darken-2'"
          >Home</v-btn
        >
        <v-btn
          to="/cinemas"
          :class="route.path === '/cinemas' && 'bg-grey-darken-2'"
          >Cinemas</v-btn
        >
        <v-btn
          to="/movies"
          :class="route.path === '/movies' && 'bg-grey-darken-2'"
          >Movies</v-btn
        >
      </v-toolbar-items>

      <v-btn
        variant="flat"
        color="red"
        class="ml-8 hidden-sm-and-down"
        @click="dialog.loginDialogOpen()"
        v-if="!auth.user"
        >LOGIN</v-btn
      >

      <v-menu open-on-hover v-if="auth.user">
        <template v-slot:activator="{ props }">
          <v-col cols="auto">
            <v-btn
              icon="mdi-calendar"
              variant="flat"
              color="red"
              size="small"
              class="ml-8 hidden-sm-and-down"
              v-bind="props"
            >
              {{ auth.user.username.slice(0, 1) }}
            </v-btn>
          </v-col>
        </template>

        <v-list>
          <v-list-item>
            <v-btn variant="text" size="large" @click="auth.logout()"
              >Logout</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-app-bar-nav-icon
        variant="text"
        class="hidden-md-and-up"
        @click.stop="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    location="right"
    v-model="isDrawerOpen"
    temporary
    class="hidden-md-and-up"
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :title="item.title"
        :class="route.path === item.url && 'bg-grey-darken-2'"
        link
      ></v-list-item>
    </v-list>

    <v-btn
      variant="flat"
      color="red"
      class="ml-4"
      @click="dialog.loginDialogOpen()"
      >LOGIN</v-btn
    >
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  color: white;
  font-size: 28px;
  font-weight: 500;
}
</style>
