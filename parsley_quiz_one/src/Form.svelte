<script>
  import InputField from "./InputField.svelte";
  import Options from "./Options.svelte";
  import MultiSelect from "./MultiSelect.svelte";
  export let active_step;
  export let step_filled = false;
  export let quiz_ender = false;
  let url = window.location.href;
  let formData = {
    name: "",
    email: "",
    phoneNum: "",
    healthGoal: "",
    healthConcerns: "",
    whatTesting: "",
    triedToImproveHealth: "",
    triedToImproveHealthOther: "",
    howSoonLookingToMakeChanges: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
  };

  const handleEnd = () => {
    console.log("end");
    console.table(formData);
    dataConverter(formData);
  };
  const dataConverter = (data) => {
    console.log("converting data");

    let fullName = data.name.split(" ");
    let convertedData = {
      email: data.email,
      health_goal: data.healthGoal,
      optimization_timeline: data.howSoonLookingToMakeChanges,
      first_name: fullName[0].toUpperCase(),
      last_name: fullName[fullName.length - 1].toUpperCase(),
      phoneNumber: data.phoneNum,
      pre_parsley_optimizations: data.triedToImproveHealth,
      pre_parsley_optimizations_other: data.triedToImproveHealthOther,
      pre_parsley_testing: data.whatTesting,
    };

    // build healthConcerns into convertedData
    for (let i = 0; i < data.healthConcerns.length; i++) {
      convertedData[`health_concern_${i + 1}`] = data.healthConcerns[i];
    }
    console.log(convertedData);

    sendData(url);
  };

  const sendData = (url) => {
    let params = new URLSearchParams(url.search);
    params.set("quiz_provided_by", "thesis_quiz");

    let newUrl = url + "?" + params.toString();
    window.history.pushState({}, "", newUrl);
  };

  $: allDone = (() => {
    quiz_ender === true ? handleEnd() : null;
  })();
</script>

<form class="form-container" on:submit={handleSubmit}>
  {#if active_step == "Q1"}
    <h2>What’s your full name?</h2>
    <InputField
      label={"Full Name"}
      bind:value={formData.name}
      name="fullName"
      bind:filled={step_filled}
    />
  {:else if active_step == "Q2"}
    <InputField
      label={"Email"}
      bind:value={formData.email}
      type="email"
      name="Email"
      filled={step_filled}
    />
    <InputField
      type={"tel"}
      label={"Phone Number"}
      bind:value={formData.phoneNum}
      name="Phone Number"
      bind:filled={step_filled}
    />
  {:else if active_step == "Q3"}
    <h2>Which statement best describes your health goal?</h2>
    <Options
      bind:group={formData.healthGoal}
      bind:step_filled
      choices={[
        {
          label: "Resolve unexplained symptoms",
          value: "Resolve unexplained symptoms",
        },
        { label: "Manage my condition", value: "Manage my condition" },
        { label: "Optimize my health", value: "Optimize my health" },
        {
          label: "Prevent future health issues",
          value: "Prevent future health issues",
        },
      ]}
    />
  {:else if active_step == "Q4"}
    <h2>What are your biggest health concerns?</h2>
    <MultiSelect
      bind:filled={step_filled}
      bind:group={formData.healthConcerns}
      choices={[
        { label: "Preventative care", value: "Preventative care" },
        { label: "Digestive", value: "Digestive" },
        {
          label: "Metabolism & heart health",
          value: "Metabolism & heart health",
        },
        { label: "Mental wellbeing", value: "Mental wellbeing" },
        {
          label: "Fertility and postpartum",
          value: "Fertility and postpartum",
        },
        {
          label: "Autoimmune and inflammation",
          value: "Autoimmune and inflammation",
        },
        { label: "Hormonal health", value: "Hormonal health" },
        { label: "Unwell & undiagnosed", value: "Unwell & undiagnosed" },
        { label: "Other", value: "Other" },
      ]}
    />
  {:else if active_step == "Q5"}
    <h2>What testing have you done regarding your health concerns?</h2>
    <MultiSelect
      bind:filled={step_filled}
      bind:group={formData.whatTesting}
      choices={formData.healthConcerns == "Preventative care"
        ? [
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Digestive"
        ? [
            {
              label: "GI Effects/ GI MAP specialty testing",
              value: "GI Effects/ GI MAP specialty testing",
            },
            {
              label: "Food Sensitivity testing",
              value: "Food Sensitivity testing",
            },
            { label: "SIBO", value: "SIBO" },
            { label: "Thyroid Function", value: "Thyroid Function" },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Metabolism & heart health"
        ? [
            { label: "Cardio IQ Panel", value: "Cardio IQ Panel" },
            {
              label:
                "Cardiovascular health and metabolic functioning blood work",
              value:
                "Cardiovascular health and metabolic functioning blood work",
            },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Mental wellbeing"
        ? [
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Fertility and postpartum"
        ? [
            {
              label: "Hormone Metabolism testing (Ex. DUTCH)",
              value: "Hormone Metabolism testing (Ex. DUTCH)",
            },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Autoimmune and inflammation"
        ? [
            {
              label: "C-reactive protein (CRP)",
              value: "C-reactive protein (CRP)",
            },
            {
              label: "Erythrocyte sedimentation rate (ESR)",
              value: "Erythrocyte sedimentation rate (ESR)",
            },
            {
              label: "Antinuclear Antibody (ANA)",
              value: "Antinuclear Antibody (ANA)",
            },
            { label: "Reflex testing", value: "Reflex testing" },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Hormonal health"
        ? [
            {
              label: "Hormone Metabolism Testing (Ex. Dutch)",
              value: "Hormone Metabolism Testing (Ex. Dutch)",
            },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : formData.healthConcerns == "Unwell & undiagnosed"
        ? [
            {
              label: "Show all tests (consolidate among conditions)",
              value: "Show all tests (consolidate among conditions)",
            },
            {
              label: "GI Effects/ GI MAP specialty testing",
              value: "GI Effects/ GI MAP specialty testing",
            },
            {
              label: "Food Sensitivity testing",
              value: "Food Sensitivity testing",
            },
            { label: "SIBO", value: "SIBO" },
            { label: "Thyroid Function", value: "Thyroid Function" },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Cardio IQ Panel", value: "Cardio IQ Panel" },
            {
              label:
                "Cardiovascular health and metabolic functioning blood work",
              value:
                "Cardiovascular health and metabolic functioning blood work",
            },
            {
              label: "Hormone Metabolism testing (Ex. DUTCH)",
              value: "Hormone Metabolism testing (Ex. DUTCH)",
            },
            {
              label: "C-reactive protein (CRP)",
              value: "C-reactive protein (CRP)",
            },
            {
              label: "Erythrocyte sedimentation rate (ESR)",
              value: "Erythrocyte sedimentation rate (ESR)",
            },
            {
              label: "Antinuclear Antibody (ANA)",
              value: "Antinuclear Antibody (ANA)",
            },
            { label: "Reflex testing", value: "Reflex testing" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]
        : [
            {
              label: "GI Effects/ GI MAP specialty testing",
              value: "GI Effects/ GI MAP specialty testing",
            },
            {
              label: "Food Sensitivity testing",
              value: "Food Sensitivity testing",
            },
            { label: "SIBO", value: "SIBO" },
            { label: "Thyroid Function", value: "Thyroid Function" },
            {
              label: "Essential Nutrients (Baseline Panel)",
              value: "Essential Nutrients (Baseline Panel)",
            },
            { label: "Hormone Panel", value: "Hormone Panel" },
            { label: "Cardio IQ Panel", value: "Cardio IQ Panel" },
            {
              label:
                "Cardiovascular health and metabolic functioning blood work",
              value:
                "Cardiovascular health and metabolic functioning blood work",
            },
            {
              label: "Hormone Metabolism testing (Ex. DUTCH)",
              value: "Hormone Metabolism testing (Ex. DUTCH)",
            },
            {
              label: "C-reactive protein (CRP)",
              value: "C-reactive protein (CRP)",
            },
            {
              label: "Erythrocyte sedimentation rate (ESR)",
              value: "Erythrocyte sedimentation rate (ESR)",
            },
            {
              label: "Antinuclear Antibody (ANA)",
              value: "Antinuclear Antibody (ANA)",
            },
            { label: "Reflex testing", value: "Reflex testing" },
            { label: "Other", value: "Other" },
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
          ]}
    />
  {:else if active_step == "Q6"}
    <h2>What have you tried to improve your health?</h2>
    <MultiSelect
      bind:group={formData.triedToImproveHealth}
      bind:filled={step_filled}
      choices={[
        { label: "Modifying my diet", value: "Modifying my diet" },
        { label: "Taking supplements", value: "Taking supplements" },
        { label: "Keeping a food journal", value: "Keeping a food journal" },
        {
          label: "Prescription medications",
          value: "Prescription medications",
        },
        { label: "OTC medications", value: "OTC medications" },
        { label: "Exercising regularly", value: "Exercising regularly" },
        {
          label: "Completing periodic lab tests",
          value: "Completing periodic lab tests",
        },
        {
          label:
            "Alternative treatments (e.g. Acupuncture, Reiki, Cupping, etc).",
          value:
            "Alternative treatments (e.g. Acupuncture, Reiki, Cupping, etc).",
        },
        { label: "None of the above", value: "None of the above" },
        { label: "Other", value: "Other" },
      ]}
    />
    <InputField
      label={"Other"}
      bind:value={formData.triedToImproveHealthOther}
      name="fullName"
      bind:filled={step_filled}
    />
  {:else if active_step == "Q7"}
    <h2>How soon are you looking to make changes to your health?</h2>
    <Options
      bind:group={formData.howSoonLookingToMakeChanges}
      bind:step_filled
      bind:quiz_ender
      choices={[
        {
          label: "Just looking for more information/research stage",
          value: "Just looking for more information/research stage",
        },
        {
          label: "Looking to start within the next 30-60 days",
          value: "Looking to start within the next 30-60 days",
        },
        {
          label: "Looking to start as soon as possible",
          value: "Looking to start as soon as possible",
        },
      ]}
    />
  {:else if active_step == "Thanks"}
    <div class="message">
      <h2>Thanks for telling us about you!</h2>
      <p>Parsley will be in touch within the next 24 hours to</p>
      <button class="btn submit" on:click={handleSubmit}>Finish </button>
    </div>
  {/if}
</form>

<style>
  .form-container {
    border-radius: 10px;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1); */
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 350px;
  }
  .btn {
    color: white;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    display: inline-block;
    width: 100%;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .submit {
    background: linear-gradient(to bottom, #44c767 5%, #50b01c 100%);
    background-color: #44c767;
  }
  .submit:hover {
    background: linear-gradient(to bottom, #50b01c 5%, #44c767 100%);
    background-color: #50b01c;
  }
  .message {
    text-align: center;
  }
</style>
