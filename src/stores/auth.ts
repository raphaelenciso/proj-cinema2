import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface loginData {
  user: User;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  function login(data: loginData) {
    user.value = data.user;
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  function logout() {
    user.value = null;
    localStorage.removeItem('user');
  }

  onMounted(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user')!);

    if (userLocalStorage) {
      user.value = userLocalStorage;
    }

    console.log(user.value);
  });

  return { user, login, logout };
});
