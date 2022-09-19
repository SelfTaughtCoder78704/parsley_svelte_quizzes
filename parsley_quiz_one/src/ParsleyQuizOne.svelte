<script>
  import Form from "./Form.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  let steps = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Thanks"],
    currentActive = 1,
    step_filled = false,
    quiz_ender = false,
    progressBar;
  $: endGame = (() => {
    quiz_ender === true ? handleProgress(+1) : null;
  })();
  const handleProgress = (stepIncrement) => {
    progressBar.handleProgress(stepIncrement);
    step_filled = false;
  };
</script>

<main>
  <div class="container">
    <ProgressBar {steps} bind:currentActive bind:this={progressBar} />

    <Form
      bind:quiz_ender
      bind:step_filled
      active_step={steps[currentActive - 1]}
    />

    {#if currentActive <= 6}
      <div class="step-button">
        <!-- <button
        class="btn"
        on:click={() => handleProgress(-1)}
        disabled={currentActive == 1}>Prev</button
      > -->
        <button
          class={currentActive == steps.length || step_filled == false
            ? "btn disabled"
            : "btn"}
          tabindex="0"
          type="button"
          on:click={() => handleProgress(+1)}>Continue</button
        >
      </div>
    {/if}
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

  * {
    box-sizing: border-box;
  }

  main {
    font-family: "Muli", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(180deg, #fff7f0 0%, #f3f4ff 100%);
  }

  .btn {
    background-color: #79998e;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn:focus {
    outline: 1;
  }

  .disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
    pointer-events: none;
  }

  .step-button {
    margin-top: 1rem;
    text-align: center;
  }
  .step-button:focus {
    outline: 0;
  }
</style>



