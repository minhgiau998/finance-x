<template>
  <button :class="[isDefault, isColor]" :type="isType" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    isColor() {
      switch (this.color) {
        case 'primary':
          return 'text-primary bg-success hover:text-success hover:bg-primary cursor-pointer'
        case 'secondary':
          return 'text-success bg-primary hover:text-primary hover:bg-success cursor-pointer'
        case 'transparent':
          return 'text-secondary bg-transparent hover:text-secondary hover:bg-transparent cursor-pointer'
        case 'outline':
          return 'text-primary bg-transparent hover:text-white border-2 hover:bg-primary cursor-pointer'
        case 'disabled':
          return 'bg-alto border-solid text-mine-shaft border-alto cursor-not-allowed'
        default:
          return 'bg-silver-tree border-solid text-white border-silver-tree cursor-pointer'
      }
    },
    isDefault() {
      return 'flex items-center justify-center font-normal text-20px-24px transition duration-500 ease'
    },
    isType() {
      switch (this.type) {
        case 'submit':
          return 'submit'
        case 'reset':
          return 'reset'
        default:
          return 'button'
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
