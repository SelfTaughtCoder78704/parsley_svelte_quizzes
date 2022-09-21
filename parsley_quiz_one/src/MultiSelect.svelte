
<script>
  export let group = [];
  export let choices = [];
  export let filled = true;
</script>

{#each choices as choice}
  <label
    >{choice.label}
    <input
      on:click={() => (filled = true)}
      type="checkbox"
      bind:group
      name="healthGoal"
      value={choice.value}
    />
    <span class="checkmark" />
  </label>
{/each}

<style>
  label {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
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
  .checkmark {
    height: 25px;
    width: 25px;
    background-color: #fff;
  }

  label input:checked ~ .checkmark {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  label input:checked ~ .checkmark:after {
    display: block;
  }
  label .checkmark:after {
    width: 5px;
    height: 10px;
    border: solid #79998e;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
</style>
