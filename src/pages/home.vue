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

    <h2>Hello {{ user }}</h2>

  </f7-page>
</template>

<script setup>
import  { signInWithRedirect, getRedirectResult, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { ref, onMounted } from 'vue';
import { useFirebaseAuth, useCurrentUser, getCurrentUser, useIsCurrentUserLoaded } from 'vuefire';

const auth = useFirebaseAuth();
// const user = useIsCurrentUserLoaded()
// const user = await getCurrentUser();

// display errors if any
const error = ref(null)
function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  error.value = null
  
  /* signInWithPopup(auth, provider).catch((reason) => {
    console.error('Failed sign', reason)
    error.value = reason
    getUser();
  }) */

  signInWithRedirect(auth, provider)
  .then(() => {
    console.log(userinfo.profile)
  })
  .catch((reason) => {
    console.error('Failed signinRedirect', reason)
    console.log(user)
    error.value = reason
  })
}

async function getUser() {
  debugger
  user.value = await getCurrentUser()  
}

onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  });
  if(useIsCurrentUserLoaded) {
    const user = useCurrentUser();
    
    console.log("User loggedin", user);
    console.log("User token", user.value);
  }
})

</script>