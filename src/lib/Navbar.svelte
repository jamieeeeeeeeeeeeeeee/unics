<!-- the actual navbar needs a layout fix still :)-->
<script lang="ts">
  import { writable } from 'svelte/store';
  export const openMenu = writable(false);

  const toggleMenu = () => {
    openMenu.update((value) => !value);
  }
</script>

<div class="main">
  <div class="navbar">
    <div class="navbar-left">
      <a href="/"><img class="logo" src="/logo.svg" alt="logo" width="70px" height="70px" /></a>
    </div>

    <div class="navbar-center">
      <a on:click={toggleMenu} href="/#about" class="navbar-option">About</a>
      <a on:click={toggleMenu} href="/#events" class="navbar-option">Events</a>
      <a on:click={toggleMenu} href="/committee" class="navbar-option">Committee</a>
      <a on:click={toggleMenu} href="/sponsors" class="navbar-option">Sponsors</a>
    </div>

    <div class="navbar-right">
      <a href="https://manchesterstudentsunion.com/activities/view/unics" class="navbar-joinus">Join Us!</a>
    </div>
    <button class="hamburger" id="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
      <div></div> 
      <div></div>
      <div></div>
    </button>
  </div>
</div>

<div class="mobile-menu {$openMenu ? 'active' : ''}">
  <a on:click={toggleMenu} href="/#about" class="navbar-option">About</a>
  <a on:click={toggleMenu} href="/#events" class="navbar-option">Events</a>
  <a on:click={toggleMenu} href="/committee" class="navbar-option">Committee</a>
  <a on:click={toggleMenu} href="/sponsors" class="navbar-option">Sponsors</a>
  <a on:click={toggleMenu} href="https://manchesterstudentsunion.com/activities/view/unics" class="navbar-joinus">Join Us!</a>
</div>

<style>
  .logo {
    border-radius: 25%;
    margin-right: 10px;
  }

  .main {
    z-index: 10;
    top: 0;
    width: 100%;
    position: sticky;
  }

  .navbar {
    background-color: #000;
    color: white;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;  
    align-items: center;
    padding: 24px 5px;
    justify-content: space-between;
    z-index: 10;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 10px;
  }

  .navbar-center {
    display: flex;
    align-items: center;
    justify-content: center; 
    flex: 1;
  }

  .navbar-option {
    color: white;
    margin: 0 10px;
    cursor: pointer;
    padding-bottom: 2px;
    text-decoration: none;
  }

  .navbar-option:hover {
    text-decoration: underline;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    margin-right: 20px;
  }

  .navbar-joinus {
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
    border: 2px solid #b536da;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  .navbar-joinus:hover {
    background-color: #b536da;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
    margin-right: 20px;
    background-color: transparent;
    border: none;
  }

  .hamburger > div {
    width: 25px;
    height: 5px;
    background-color: white;
  }

  .mobile-menu {
    flex-direction: column;
    gap: 10px;
    transform: translateY(-200%);
    transition: transform 0.3s ease;
    z-index: 1;
    position: fixed;
    width: 100%;
    display: flex;
    background-color: black;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .mobile-menu.active {
    z-index: 1;

    transform: translateY(-200%);
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 800px) {
    .navbar-center, .navbar-right {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .mobile-menu {
      z-index: 1;
      position: fixed;
      width: 100%;
      display: flex;
      background-color: black;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .mobile-menu.active {
      z-index: 1;
      transform: translateY(0);
    }

    .navbar-joinus {
      padding: 6px 50px;
    }

    .navbar {
      padding: 6px 5px; 
      z-index: 10;
    }

    * {
      box-sizing: border-box;
    }
  }

</style>