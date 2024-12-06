<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Firebase Auth</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>Firebase Auth</f7-nav-title-large>
    </f7-navbar>

    <!-- Page content-->
    <f7-block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-button @click="loginWithGoogle" fill>Login With Google</f7-button>

  </f7-page>
</template>

<script setup>
import { ref } from 'vue';
import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';

const auth = useFirebaseAuth()

// display errors if any
const error = ref(null)
const provider = new GoogleAuthProvider();

function loginWithGoogle() {
  signInWithRedirect(auth, provider).catch((reason) => {
    console.error('Failed signinRedirect', reason)
    error.value = reason
  })
}

</script>