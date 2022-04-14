<template>
  <div class="card">
    <h3 class="mb-10">Se connecter</h3>
  
    <form @submit="trySubmit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Email</label>
        <input v-model="email.value.value" name="email" type="text" />
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Password</label>
        <input v-model="password.value.value" name="password" type="text" />
      </div>
      <button class="btn btn-primary" :disabled="isSubmitting">
        Se connecter
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';

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

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
});

const email = useField('email');
const password = useField('password');

const trySubmit = handleSubmit((formValues) => {
  console.log(formValues);
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>