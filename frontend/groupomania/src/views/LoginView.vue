<template>
  <div class="card">
    <h3 class="mb-10">Se connecter</h3>
  
    <form @submit="trySubmit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Email</label>
        <input v-model="email.value.value" name="email" type="text" />
        <small class="form-error" v-if="email.errorMessage.value">{{
          email.errorMessage.value
        }}</small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Password</label>
        <input v-model="password.value.value" name="password" type="text" />
        <small class="form-error" v-if="password.errorMessage.value">{{
          password.errorMessage.value
        }}</small>
      </div>
      <button class="btn btn-primary" :disabled="isSubmitting">
        Se connecter
      </button>
    </form>
    <p>Pas encore de compte ? <span @click="goSignup()" class="signUp">Inscrivez-vous</span></p>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';
import router from "../router/index"
import auth from '../services/authService'

const required = { required_error: 'Veuillez renseigner ce champ' };
const validationSchema = toFormValidator(
  z.object({
    email: z
      .string(required)
      .min(1, { message: 'Le titre doit faire au moins 1 caractère' })
      .max(25, { message: 'Le titre doit faire moins de 25 caractères' })
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
  try {
    auth.login(formValues)
    .then((data) => {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("user", JSON.stringify(data.data.userInfo));
      router.push("profil") 
    })
  } catch (e) {
    console.log(e);
  }
});

function goSignup() {
    router.push("signup")
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
}
.btn-primary{
  margin-top: 1rem;
}
.signUp {
  text-decoration: underline;
  color: #d1515a;
  cursor: pointer;
}
</style>