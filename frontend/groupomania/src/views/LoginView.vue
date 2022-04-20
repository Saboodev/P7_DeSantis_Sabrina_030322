<template>
  <div class="card">
    <h2 class="mb-10">Se connecter</h2>
  
    <form @submit="submit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Email</label>
        <input v-model="email.value.value" name="email" type="text" />
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Password</label>
        <input v-model="password.value.value" name="password" type="text" />
      </div>
      <button class="btn btn-primary">
        Se connecter
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';
import type { LoginForm } from '../shared/interfaces';
import { useRouter } from 'vue-router';
import { useUser } from '../shared/store';

const router = useRouter();
const userStore = useUser();

const required = { required_error: 'Veuillez renseigner ce champ' };
const validationSchema = toFormValidator(
  z.object({
    email: z
      .string(required)
      .min(1, { message: 'Le titre doit faire au moins 1 caractère' })
      .max(20, { message: 'Le titre doit faire moins de 20 caractères' })
      .regex((/^[a-z0-9.-]+@[a-z0-9._-]{2,}\.[a-z]{2,8}$/), { message: 'Merci de saisir un email correct'}),
    password: z.string(required)
  })
);

const { handleSubmit, setErrors } = useForm<{ email: string, password: string }>({
    validationSchema,
});

const email = useField('email');
const password = useField('password');

const submit = handleSubmit(async (formValue: LoginForm) => {
  try {
    await userStore.login(formValue);
    router.push('/profil');
  } catch (e) {
    setErrors({ password: e as string })
  }
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>