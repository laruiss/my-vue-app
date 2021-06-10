<template>
  <SearchBar
    label="Rechercher"
    :dark="true"
    v-model="query"
    @search="search()"
  />
  <form
    class="login-form"
    @reset.prevent="reset"
    @submit.prevent="logIn"
  >
    <fieldset class="fieldset">
      <legend><strong>Connexion</strong></legend>
      <div class="flex flex-col my-2">
        <BasicInput
          label="Adresse courriel"
          v-model="email"
          placeholder="john@doe.com"
          id="email"
          type="email"
          @blur="checkEmail"
          :message="msgInvalidEmail"
        />
      </div>
      <div class="flex flex-col my-2">
        <basic-input
          label="Mot de passe"
          v-model="password"
          placeholder="53CR37P455"
          id="password"
          type="password"
          @blur="checkPwdSecurity"
          :message="msgInvalidPassword"
          tabindex="-1"
        />
      </div>
    </fieldset>
    <div class="text-center">
      <input
        class="button secondary"
        tabindex="-1"
        type="reset"
        value="Réinitialiser"
      />
      <input
        class="button primary"
        tabindex="0"
        type="submit"
        value="Se connecter"
      />
    </div>
  </form>
</template>

<script>
import BasicInput from './BasicInput/BasicInput.vue'
import SearchBar from './SearchBar/SearchBar.vue'

export default {
  name: "LoginForm",

  components: {
    BasicInput,
    SearchBar,
  },

  data() {
    return {
      email: undefined,
      password: undefined,
      msgInvalidEmail: undefined,
      msgInvalidPassword: undefined,
      title: undefined,
      query: undefined,
    }
  },

  methods: {
    logIn() {
      fetch("/auth/token", {
        method: "post",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
    },

    reset() {
      this.email = "";
      this.password = "";
    },

    search () {
      console.log(this.query)
    },

    checkEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const testEmail = re.test(this.email);
      this.msgInvalidEmail = ''
      if (!testEmail) {
        this.msgInvalidEmail = 'Invalide Email'
      }
    },

    checkPwdSecurity() {
      const mandatoryChars = '$?!#~_-@+*£%&'.split('');
      const containsMandatoryChars = mandatoryChars.some(char => this.password.includes(char)) 
      this.msgInvalidPassword = '';
      if (this.password.length < 8 || !containsMandatoryChars) {
        this.msgInvalidPassword = 'Mot de passe trop faible !';
      }
    },

    search() {
      console.log(this.query)
    }
  },
};
</script>

<style scoped>
.login-form {
  padding: 0.5rem;
  box-shadow: 1px 1px 5px 1px #555;
  margin: 0.5rem;
  background-color: #fff;
}

.button {
  margin: 0.25rem;
  border: none;
  padding: 0.5rem 1rem;
  background-color: var(--w);

  &.primary {
    background-color: var(--bf500);
    color: white;
    &:hover {
      background-color: var(--btn-color-hover);
    }
    &:active {
      background-color: var(--btn-color-active);
    }
  }

  &.secondary {
    box-shadow: inset 0 0 0 1px var(--bf500);
    &:hover {
      background-color: var(--block-color-hover);
    }
    &:active {
      background-color: var(--block-color-active);
    }
  }
}

.fieldset {
}
.legend {
}
</style>
