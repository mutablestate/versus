<script>
  import './index.css';
  import HellowWorld from './components/HelloWorld.svelte';
  export let name;
</script>

<main class="m-auto text-center">
  <h1 class="text-gray-400 text-6xl">Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <HellowWorld msg="message" />
</main>

<style lang="postcss">
  h1 {
    @apply uppercase;
  }
</style>
