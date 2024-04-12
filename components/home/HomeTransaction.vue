<template>
  <div class="bg-primary">
    <div class="flex items-center justify-center pt-40 overflow-hidden 2xl:px-96 px-[30px]">
      <div class="flex flex-col w-full max-w-full lg:flex-row lg:space-x-20 space-x-0 justify-center items-center">
        <div class="w-full lg:w-1/2">
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 300 }" class="text-xl font-semibold text-success">
            Our Services
          </div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 400 }" class="mt-3">
            <span class="text-5xl font-bold text-white leading-[60px] font-satoshi">Real Time </span>
            <span class="text-5xl font-bold text-success leading-[60px] font-satoshi">Transaction Report</span>
          </div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 500 }" class="mt-10 text-white text-opacity-70 text-lg font-normal leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</div>
          <BaseButton color="primary" class="px-[45px] py-[21px] mt-10">
            <span class="text-lg font-bold font-satoshi">Get Started</span>
            <img src="~assets/svg/arrow-right-black.svg" class="ml-3">
          </BaseButton>
        </div>
        <div class="w-full lg:w-1/2 lg:px-0 mt-20 lg:mt-0 flex flex-col lg:flex-row">
          <img v-scroll-reveal="{ origin: 'right', distance: '60px', delay: 600 }" src="~assets/images/transaction-right.png" class="w-full" alt="">
        </div>
      </div>
    </div>
    <div class="py-20 flex lg:flex-row flex-col justify-center items-center 2xl:px-96 px-[30px]">
      <HomeTransactionCard v-for="(item, index) in list" :key="index" :icon="item.icon" :title="item.title"></HomeTransactionCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: "gps",
          title: "Local business finance",
        },
        {
          icon: "globe",
          title: "Built for global payments",
        },
        {
          icon: "wave",
          title: "Make internet of Money",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
