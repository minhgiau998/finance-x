<template>
  <div class="bg-primary">
    <div class="flex items-center justify-center pt-40 overflow-hidden 2xl:px-96 px-[30px]">
      <div class="flex flex-col w-full max-w-full lg:flex-row">
        <div class="w-full">
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 300 }" class="text-xl font-semibold text-success">
            Our Services
          </div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 400 }" class="mt-3">
            <span class="text-5xl font-bold text-white leading-[60px] font-satoshi">Browse our services & </span>
            <span class="text-5xl font-bold text-success leading-[60px] font-satoshi">offerings</span>
          </div>
          <BaseButton color="primary" class="px-[45px] py-[21px] mt-10">
            <span class="text-lg font-bold font-satoshi">Get Started</span>
            <img src="~assets/svg/arrow-right-black.svg" class="ml-3">
          </BaseButton>
        </div>
        <div class="w-full lg:px-0 mt-20 lg:mt-0 flex flex-col lg:flex-row">
          <HomeServiceCard v-for="index in 2" :key="index" :class="{ 'border-r-[1px]': index === 2, 'lg:border-r-0': index !== 2, 'border-b-0': true }"></HomeServiceCard>
        </div>
      </div>
    </div>
    <div class="2xl:px-96 px-[30px] flex flex-col lg:flex-row justify-end">
      <HomeServiceCard v-for="index in 3" :key="index" :class="{ 'border-r-[1px]': index === 3, 'lg:border-r-0': index !== 3 }"></HomeServiceCard>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>
