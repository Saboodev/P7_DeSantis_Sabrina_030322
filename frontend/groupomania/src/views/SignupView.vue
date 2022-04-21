<template>
  <div class="card">
    <h3 class="mb-10">Créer un compte</h3>
    <form @submit="trySubmit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Email</label>
        <input ref="firstInput" v-model="email.value.value" type="text" />
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
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Nom</label>
        <input v-model="nom.value.value" type="text" />
        <small class="form-error" v-if="nom.errorMessage.value">{{
          nom.errorMessage.value
        }}</small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Prénom</label>
        <input v-model="prenom.value.value" type="text" />
        <small class="form-error" v-if="prenom.errorMessage.value">{{
          prenom.errorMessage.value
        }}</small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Pseudo</label>
        <input v-model="pseudo.value.value" type="text" />
        <small class="form-error" v-if="pseudo.errorMessage.value">{{
          pseudo.errorMessage.value
        }}</small>
        </div>
      <button class="btn btn-primary" :disabled="isSubmitting">
        S'enregistrer
      </button>
    </form>
    <p>Déjà un compte ? <span @click="goLogin()" class="loginSpan"> Connectez-vous </span></p>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';
import { onMounted, ref } from 'vue';
import router from "../router/index"
import auth from '../services/authService'

const firstInput = ref<HTMLInputElement | null>(null);
onMounted(() => {
  firstInput.value?.focus();
});

const required = { required_error: 'Veuillez renseigner ce champ' };
const validationSchema = toFormValidator(
  z.object({
    email: z
      .string(required)
      .min(1, { message: 'Le titre doit faire au moins 1 caractère' })
      .max(25, { message: 'Le titre doit faire moins de 25 caractères' })
      .regex((/^[a-z0-9.-]+@[a-z0-9._-]{2,}\.[a-z]{2,8}$/), { message: 'Merci de saisir un email correct'}),
    password: z.string(required),
    nom: z
      .string(required)
      .min(1, { message: 'Ce champ doit contenir au moins 1 caractère' })
      .max(25, { message: 'Ce champ doit contenir moins de 25 caractères' }),
    prenom: z
    .string(required)
    .min(1, { message: 'Ce champ doit contenir au moins 1 caractère' })
    .max(25, { message: 'Ce champ doit contenir moins de 25 caractères' }),
    pseudo: z
      .string(required)
      .min(1, { message: 'Ce champ doit contenir au moins 1 caractère' })
      .max(20, { message: 'Ce champ doit contenir moins de 20 caractères' })
  })
);

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
});

const email = useField('email');
const password = useField('password');
const nom = useField('nom');
const prenom = useField('prenom');
const pseudo = useField('pseudo');


const trySubmit = handleSubmit(async (formValues, { resetForm }) => {
    try {
    auth.signUp(formValues)
    router.push("login")
  } catch (e) {
    console.log(e);
  }
});

function goLogin() {
    router.push("login")
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
.loginSpan {
  text-decoration: underline;
  color: #d1515a;
  cursor: pointer;
}
</style>