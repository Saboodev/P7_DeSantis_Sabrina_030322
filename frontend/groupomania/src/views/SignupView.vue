<template>
  <div class="card">
    <h2 class="mb-10">Créer un compte</h2>
    <form @submit="submit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Email</label>
        <input ref="firstInput" v-model="email.value.value" type="text" />
        <p class="form-error" v-if="email.errorMessage.value">{{
          email.errorMessage.value
        }}</p>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Password</label>
        <input v-model="password.value.value" type="text" />
        <p class="form-error" v-if="password.errorMessage.value">{{
          password.errorMessage.value
        }}</p>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Nom</label>
        <input v-model="nom.value.value" type="text" />
        <p class="form-error" v-if="nom.errorMessage.value">{{
          nom.errorMessage.value
        }}</p>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Prénom</label>
        <input v-model="prenom.value.value" type="text" />
        <p class="form-error" v-if="prenom.errorMessage.value">{{
          prenom.errorMessage.value
        }}</p>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Pseudo</label>
        <input v-model="pseudo.value.value" type="text" />
        <p class="form-error" v-if="pseudo.errorMessage.value">{{
          pseudo.errorMessage.value
        }}</p>
        </div>
      <button class="btn btn-primary" :disabled="isSubmitting">
        Inscription
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';
import type { UserForm } from '../shared/interfaces';
import { createUser } from '../shared/services/user.service';
import { useRouter } from 'vue-router';

const router = useRouter();

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
    prénom: z
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

const submit = handleSubmit(async (formValue: UserForm) => {
    try {
        await createUser(formValue);
        router.push('/signup');
    } catch (e) {
        console.log(e);
    }
});

const email = useField('email');
const password = useField('password');
const nom = useField('nom');
const prenom = useField('prenom');
const pseudo = useField('pseudo');
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>