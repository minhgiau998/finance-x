<template>
  <div class="bg-primary py-14 px-10 shadow">
    <div class="text-white text-sm font-normal leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</div>
    <div class="flex flex-row mt-4 space-x-3">
      <img :src="avatar" alt="" class="h-12 w-12 rounded-full">
      <div class="flex flex-col">
        <div class="text-white text-sm font-bold font-satoshi">{{ fullName }}</div>
        <div class="text-white text-opacity-70 text-xs font-normal">{{ jobTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker';

export default {
  computed: {
    fullName() {
      return faker.person.fullName()
    },
    avatar() {
      return faker.image.avatar()
    },
    jobTitle() {
      return faker.person.jobTitle()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
