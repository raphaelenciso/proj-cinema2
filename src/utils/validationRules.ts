export const generalRules = {
  required: (value: string) => !!value || 'Field is required',
  passwordMatch: () =>
    confirmPassword.value === password.value || 'Passwords does not match',
};

export const usernameRules = [
  generalRules.required,
  (value: string) => {
    if (value.length >= 3) return true;
    return 'Username must be at least 3 characters';
  },
  (value: string) => {
    if (value.length <= 15) return true;
    return 'Username must be at most 15 characters';
  },
];

export const emailRules = [
  generalRules.required,
  (value: string) =>
    !value ||
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    'Email must be valid',
];

export const passwordRules = [
  generalRules.required,
  (value: string) =>
    !value ||
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(value) ||
    'Password must be at least 8 characters and have 1 digit',
];

export const confirmPasswordRules = [
  generalRules.required,
  generalRules.passwordMatch,
];
