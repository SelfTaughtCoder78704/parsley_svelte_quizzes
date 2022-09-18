
<script>
  export let group = "";
  export let choices = [];
  export let step_filled = false;
  export let quiz_ender = false;

  function handleClick(e) {
    group = e.target.value;
    step_filled = true;
  }

  // since this is the last component we end with this function
  function handleEnd(e) {
    group = e.target.value;
    step_filled = true;
    quiz_ender = true;
  }
</script>

{#each choices as choice}
  <label>
    <input
      on:click={quiz_ender ? handleClick : handleEnd}
      type="radio"
      bind:group
      name="healthGoal"
      value={choice.value}
    />
    {choice.label}
  </label>
{/each}

<style>
  label {
    display: block;
    margin: 0.5rem 0;
    background-color: rgb(255, 255, 255);
    color: #79998e;
    padding: 0.5rem;
    border-radius: 0.25rem;
    position: relative;
  }
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }

  label:has(input:checked) {
    background-color: #79998e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
