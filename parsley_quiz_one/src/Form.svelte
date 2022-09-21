<script>
  import {
    allChoices,
    preventativeCareChoices,
    digestiveHealthChoices,
    metabolicAndHeartHealthChoices,
    mentalWellbeingChoices,
    fertilityPregAndPostpartumChoices,
    autoImmuneAndInflamationChoices,
    homonalHealthChoices,
    unexplainedSymptomsChoices,
  } from "./choices.js";
  import InputField from "./InputField.svelte";
  import Options from "./Options.svelte";
  import MultiSelect from "./MultiSelect.svelte";
  export let active_step;
  export let step_filled = false;
  export let quiz_ender = false;
  let url = window.location.href;

  // Just form data waiting to be filled
  let formData = {
    name: "",
    email: "",
    phoneNum: "",
    healthGoal: "",
    healthConcerns: [],
    whatTesting: [],
    triedToImproveHealth: [],
    triedToImproveHealthOther: "",
    howSoonLookingToMakeChanges: "",
  };

  // this is a dynamic binding to formData.healthConcerns
  // it maps the items picked in Q4 and then filters out duplicates
  $: mappedConcerns = formData.healthConcerns
    .map((concern) => {
      if (concern === "Preventative Care") {
        return preventativeCareChoices;
      } else if (concern === "Digestive Health") {
        return digestiveHealthChoices;
      } else if (concern === "Metabolic & Heart Health") {
        return metabolicAndHeartHealthChoices;
      } else if (concern === "Mental Wellbeing") {
        return mentalWellbeingChoices;
      } else if (concern === "Fertility, Pregnancy & Postpartum") {
        return fertilityPregAndPostpartumChoices;
      } else if (concern === "Autoimmune & Inflammation") {
        return autoImmuneAndInflamationChoices;
      } else if (concern === "Hormonal Health") {
        return homonalHealthChoices;
      } else if (concern === "Unexplained Symptoms") {
        return unexplainedSymptomsChoices;
      }
    })
    .flat()
    .filter((v, i, a) => a.findIndex((t) => t.value === v.value) === i);

  // this handles the last question by logging the data and then calling dataConverter(data)
  const handleEnd = () => {
    console.log("end");
    console.table(formData);
    dataConverter(formData);
  };

  // Convert the data into the required shape for iterable and then call sendData(data)
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
      areas_of_concern: data.healthConcerns,
    };

    console.log(convertedData);

    sendData(url);
  };

  // Send the data to the server
  const sendData = (url) => {
    let params = new URLSearchParams(url.search);
    params.set("quiz_provided_by", "thesis_quiz");

    let newUrl = url + "?" + params.toString();
    window.history.pushState({}, "", newUrl);
  };
  // dynmically bound to quiz_ender. The component with this prop ends the quiz currently it is Q7
  $: allDone = (() => {
    quiz_ender === true ? handleEnd() : null;
  })();
</script>

<form class="form-container">
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
        { label: "Preventative Care", value: "Preventative Care" },
        { label: "Digestive Health", value: "Digestive Health" },
        {
          label: "Metabolic & Heart Health",
          value: "Metabolic & Heart Health",
        },
        { label: "Mental Wellbeing", value: "Mental Wellbeing" },
        {
          label: "Fertility, Pregnancy & Postpartum",
          value: "Fertility, Pregnancy & Postpartum",
        },
        {
          label: "Autoimmune & Inflammation",
          value: "Autoimmune & Inflammation",
        },
        { label: "Hormonal Health", value: "Hormonal Health" },
        { label: "Unexplained Symptoms", value: "Unexplained Symptoms" },
        { label: "Other", value: "Other" },
      ]}
    />
  {:else if active_step == "Q5"}
    <!-- loop over formData.healthConcerns and for each of the items in there add them to the choices array -->
    <h2>What testing have you done regarding your health concerns?</h2>
    <MultiSelect
      bind:filled={step_filled}
      bind:group={formData.whatTesting}
      choices={mappedConcerns.length > 0
        ? [
            ...mappedConcerns,
            {
              label: "I haven’t done any testing",
              value: "I haven’t done any testing",
            },
            { label: "Other", value: "Other" },
          ]
        : [...allChoices]}
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
    </div>
  {/if}
</form>

<style>
  .form-container {
    border-radius: 10px;
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 350px;
  }

  .message {
    text-align: center;
  }
</style>
