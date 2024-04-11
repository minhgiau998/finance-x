<template>
  <div>
    <div class="flex items-center justify-center pt-40 overflow-hidden lg:h-screen bg-hero lg:pt-0 2xl:px-96">
      <div class="flex flex-col w-full max-w-full lg:items-center lg:flex-row">
        <div class="w-full lg:w-1/2 pl-[30px] 2xl:pl-0">
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 300 }" class="text-xl font-semibold text-success">
            Welcome! Future Platform
          </div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 400 }" class="mt-3">
            <span class="font-black text-white text-7xl leading-[80px] font-satoshi">The World's Most Modern Card </span>
            <span class="font-black text-success text-7xl leading-[80px] font-satoshi">Platform</span>
          </div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 500 }" class="mt-10 text-white text-opacity-70 text-lg font-normal font-['Rubik'] leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</div>
          <BaseButton color="primary" class="px-[45px] py-[21px] mt-10">
            <span class="text-lg font-bold font-satoshi">Get Started</span>
            <img src="~assets/svg/arrow-right-black.svg" class="ml-3">
          </BaseButton>
        </div>
        <div v-scroll-reveal="{ origin: 'right', distance: '60px', delay: 600 }" class="w-full pr-0 my-20 lg:w-1/2 lg:my-0">
          <img src="~assets/images/hero-right.png" alt="" class="w-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bg-hero {
  background: url('~assets/images/background.png') no-repeat center center
    fixed;
  background-size: cover;
  background-color: var(--primary-color);
}
</style>
