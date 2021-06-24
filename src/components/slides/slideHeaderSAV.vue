<template>
  <header class="flex justify-between py-3 pr-4">
    <p class="text-4xl font-bold font-JnJ text-slidColor-1">
      {{ title }}
    </p>
    <div class="flex justify-between">
      <img
        class="h-12"
        src="@/assets/logo/jnj_dollar.png"
      >
      <p class="text-base text-center font-bold text-blue-900">
        <span class="block pl-2">SAV</span>{{ savNumber }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    savNumber: {
      type: Number,
      required: true
    },
  },
}
</script>
