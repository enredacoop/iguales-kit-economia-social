<template>
  <button type="button" class="flex items-center justify-center cursor-pointer text-button-base"
    :disabled="disabled" :class="buttonClasses" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    }
  },
  computed: {
    buttonClasses() {
      return {
        "px-3.5 py-2 gap-x-2 text-sm": this.size === "sm",
        "px-5 py-2.5 gap-x-2 text-sm": this.size === "md",
        "px-6 py-4 gap-x-1 text-base": this.size === "lg",

        "bg-button hover:bg-button-hover text-white rounded-xl shadow-button":
          this.color === "button" && !this.disabled,
        "cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-400 stroke-current rounded-xl shadow-button":
          this.color === "button" && this.disabled,

        "bg-aula-base hover:bg-button hover:text-white rounded-xl shadow-button":
          this.color === "aula-base" && !this.disabled,
        "cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-400 stroke-current rounded-xl shadow-button":
          this.color === "aula-base" && this.disabled,
      };
    }
  },
  methods: {
    handleClick($ev) {
      if (this.disabled) {
        $ev.stopPropagation();
      }
    },
  },
};
</script>