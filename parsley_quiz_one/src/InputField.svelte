<script>
  export let value,
    name,
    label,
    filled = false,
    type = "text";

  function typeAction(node) {
    node.type = type;
  }

  function handleChange(e) {
    if (type === "email") {
      e.preventDefault();
      const val = e.target.value;
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(val)) {
        value = val;
        filled = true;
      } else {
        alert("Please enter a valid email address");
        filled = false;
      }
    }

    if (type === "tel") {
      e.preventDefault();
      const val = e.target.value;

      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (phoneRegex.test(val)) {
        value = val;
        filled = true;
      } else {
        alert("Please enter a valid phone number in the format 123-456-7890");
        filled = false;
      }
    }

    if (type === "text") {
      e.preventDefault();
      const val = e.target.value;
      if (val.length > 2) {
        value = val;
        filled = true;
      } else {
        alert("Please enter a valid name");
        filled = false;
      }
    }
  }
</script>

<p class="form-control">
  {#if label}
    <label class="label" for={name}>{label}:</label>
  {/if}
  <input
    {name}
    required
    on:change={handleChange}
    use:typeAction
    class="input"
    bind:value
    placeholder={type === "tel" ? "123-456-7890" : ""}
    pattern={type === "tel" ? "\\d{3}-\\d{3}-\\d{4}" : ""}
  />
</p>

<style>
  .form-control {
    margin: 0.5rem 0;
    text-align: left;
  }
  .input {
    width: 100%;
    display: block;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    border: 1px solid #79998e;
    border-radius: 8px;
  }
</style>
