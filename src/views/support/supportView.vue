<template>
  <page-wrapper title="Pitch Deck">
    <base-card class="p-4 rounded-2xl">
      <div class="flex flex-col w-full space-y-9">
        <div class="flex w-72 bg-gray-75 border items-center mt-3 px-4 rounded-lg space-x-2">
          <svg-icon
            class="w-5 h-5"
            name="search"
          />
          <input
            v-model="searchTerm"
            placeholder="Search Links"
            class="py-3 my-auto bg-gray-75 focus:outline-none"
          >
        </div>
        <support-panel />
      </div>
    </base-card>
  </page-wrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import BaseCard from '@/components/BaseCard.vue';
import SupportPanel from '@/components/support/SupportPanel.vue';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';

export default {
  components: {
    PageWrapper,
    BaseCard,
    SupportPanel
  },
  setup(){
    const store = useStore()
    const searchTerm = ref('')

    const publishedLinks = computed(()=> store.getters['rfps/getPublishedLinks'])

    return {
      publishedLinks,
      searchTerm,
    }
  },
  methods: {
    submit() {
    },
  }
};
</script>
