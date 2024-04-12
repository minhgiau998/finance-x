<template>
  <div class="bg-primary bg-hero">
    <div class="flex lg:flex-row flex-col 2xl:px-96 px-[30px] overflow-hidden justify-between items-start">
      <div class="flex flex-col space-y-6 lg:w-1/4 w-full mt-4 lg:mt-0">
        <div class="text-white text-[22px] font-bold font-satoshi leading-7">FinanceX</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur </div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal"></div>
        <div class="flex flex-row space-x-3 justify-start items-center">
          <img src="~assets/svg/linkedin.svg" alt="" class="w-5 h-5">
          <img src="~assets/svg/messenger.svg" alt="" class="w-5 h-5">
          <img src="~assets/svg/twitter.svg" alt="" class="w-5 h-5">
          <img src="~assets/svg/twoo.svg" alt="" class="w-5 h-5">
        </div>
      </div>
      <div class="flex flex-col space-y-6 lg:w-1/4 w-full mt-4 lg:mt-0">
        <div class="text-white text-opacity-70 text-[22px] font-bold font-satoshi leading-normal">Company</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">About Us</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Careers</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Blog</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Pricing</div>
      </div>
      <div class="flex flex-col space-y-6 lg:w-1/4 w-full mt-4 lg:mt-0">
        <div class="text-white text-opacity-70 text-[22px] font-bold font-satoshi leading-normal">Resources</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Templates</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Tutorials</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Free resources</div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">Contract templates</div>
      </div>
      <div class="flex flex-col space-y-6 lg:w-1/4 w-full mt-4 lg:mt-0">
        <div class="text-white text-opacity-70 text-[22px] font-bold font-satoshi leading-normal">Join Our Newsletter</div>
        <div class="flex flex-row">
          <BaseInput
            v-model="form.email"
            name="email"
            placeholder="Your email address"
            label=""
            type="email"
          ></BaseInput>
          <div class="text-primary text-base font-bold font-satoshi leading-relaxed bg-success self-end flex justify-center items-center h-10 py-2 px-4 cursor-pointer">
            Subscribe
          </div>
        </div>
        <div class="text-white text-opacity-70 text-base font-normal leading-normal">
          *  Will send you weekly updates for your better finance management.
        </div>
      </div>
    </div>
    <div class="py-10 mt-20 border-white border-t-[1px] border-solid flex flex-row justify-center items-center">
      <div class="text-center text-white text-opacity-70 text-base font-medium font-satoshi leading-normal">Copyright @ Kartik Bansal 2022. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
      },
    }
  },
}
</script>

<style scoped>
.bg-hero {
  background: url('~assets/images/background.png') no-repeat center center
    fixed;
  background-size: cover;
  background-color: var(--primary-color);
}
</style>
