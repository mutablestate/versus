<script>
  export let name = 'default';

  let buttonText = 'Button';

  function handleClick() {
    buttonText = 'Button Clicked';
  }
</script>

<h1>Hello {name}!</h1>
<button class="btn btn-blue" on:click="{handleClick}">{buttonText}</button>

<style lang="postcss">
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
