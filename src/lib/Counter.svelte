<script>
  export let count = 0
  const increment = () => {
    count += 2
  }

</script>

<button on:click={increment}>
  count is {count}
</button>
