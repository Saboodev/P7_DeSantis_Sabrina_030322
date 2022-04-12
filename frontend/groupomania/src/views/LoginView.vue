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
      .max(20, { message: 'Le titre doit faire moins de 20 caractères' }),
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

<template>
  <div class="card">
    <h3 class="mb-10">Se connecter</h3>
    <form @submit="trySubmit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Email</label>
        <input v-model="email.value.value" type="text" />
        <small class="form-error" v-if="email.errorMessage.value">{{
          email.errorMessage.value
        }}</small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Password</label>
        <input v-model="password.value.value" type="text" />
        <small class="form-error" v-if="password.errorMessage.value">{{
          password.errorMessage.value
        }}</small>
      </div>
      <button class="btn btn-primary" :disabled="isSubmitting">
        Se connecter
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>