<template>
  <div class="row">
    <div class="col-6 m-auto">
      <div class="border rounded p-3">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          ref="email"
          v-model.trim="email"
        />
        <input
          type="password"
          class="form-control mt-2"
          placeholder="Пароль"
          ref="password"
          v-model.trim="password"
        />
        <button class="btn btn-light w-100 mt-2" @click="logIn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from './../../stores/auth'

const auth = useAuthStore()

export default {
  data() {
    return {
      email: 'mail@mail.ru',
      password: '123'
    }
  },
  methods: {
    logIn() {
      if (!this.email) {
        this.$refs.email.classList.remove('is-valid')
        this.$refs.email.classList.add('is-invalid')
      } else {
        this.$refs.email.classList.remove('is-invalid')
        this.$refs.email.classList.add('is-valid')
      }
      if (!this.password) {
        this.$refs.password.classList.remove('is-valid')
        this.$refs.password.classList.add('is-invalid')
      } else {
        this.$refs.password.classList.remove('is-invalid')
        this.$refs.password.classList.add('is-valid')
      }

      if (this.email && this.password) {
        console.log(
          'LoginMain.vue email = ',
          this.email,
          ' password = ',
          this.password
        )

        auth.logIn({ email: this.email, password: this.password })
      }
    }
  }
}
</script>