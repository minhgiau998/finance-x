<template>
  <div>
    <label class="block font-bold mb-1 text-primary" :for="name">
      {{ label }}
    </label>
    <input
      :id="name"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :class="[
        'bg-white',
        'bg-opacity-70',
        'text-primary',
        'placeholder-primary',
        'focus:ring-primary',
        'focus:border-white',
        'rounded',
        'py-2',
        'px-4',
        'w-full',
        'focus:outline-none',
        'focus:ring-2',
        error && 'border-danger',
      ]"
      @input="$emit('input', $event.target.value)"
    />
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
}
</script>
