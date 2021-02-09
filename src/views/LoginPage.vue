<template>
  <section id="login-screen" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box">
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                  </span>
                  <input class="input" aria-label="Username" autofocus required placeholder="Username" type="text"
                         id="UserName" name="UserName" value="">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                  </span>
                  <input class="input" type="password" aria-label="Password" required placeholder="Password"
                         id="Password" name="Password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" id="RememberMe" name="RememberMe">
                  Remember me
                </label>
              </div>
              <div class="field">
                <button class="button is-info">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>
#login-screen {
  background-color: #3298dc;
}
</style>
