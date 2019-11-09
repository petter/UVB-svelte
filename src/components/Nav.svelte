<script>
  import { cubicInOut } from "svelte/easing";
  export let segment;
  let expanding = false;
  let open = false;
  let h;
</script>

<style>
  .container {
    position: fixed;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    background-color: orange;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 250ms ease-in-out;
  }

  a {
    padding: 0.5em 2em;
    text-align: center;
  }
</style>

<div class="container">
  <div class="content">
    <a on:click|preventDefault={() => (open = !open)} href="/">MENU</a>
    {#if open}
      <nav>
        <ul>
          <li>
            <a class:selected={segment === undefined} href=".">Home</a>
          </li>
          <li>
            <a class:selected={segment === 'about'} href="about">About</a>
          </li>
        </ul>
      </nav>
    {/if}
  </div>
</div>
