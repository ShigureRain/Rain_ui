<template>
  <button :class='classes' :disabled="disabled" class="rain-button">
    <span v-if="loading" class="rain-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
  import {computed} from 'vue'

  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const {theme, size, level} = props
      const classes = computed(() => {
        return {
          [`rain-theme-${theme}`]: theme,
          [`rain-size-${size}`]: size,
          [`rain-level-${level}`]: level,
        }
      })
      return {classes}
    }
  }
</script>

<style lang="scss">
  /* ui公共库不能使用scoped，必须保证选择器稳定 */
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  $red: red;
  $grey: grey;
  .rain-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.rain-theme-link {
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
      color: $blue;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.rain-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }
    &.rain-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.rain-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
    &.rain-theme-button {
      &.rain-level-main {
        background: $blue;
        color: white;
        border-color: $blue;
        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }
      &.rain-level-danger {
        background: $red;
        border-color: $red;
        color: white;
        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }
    }
    &.rain-theme-link {
      &.rain-level-danger {
        color: $red;
        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }
    &.rain-theme-text {
      &.rain-level-main {
        color: $blue;
        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }
      &.rain-level-danger {
        color: $red;
        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }
    &.rain-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
        &:hover {
          border-color: $grey;
        }
      }
    }
    &.rain-theme-link, &.rain-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }
    > .rain-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: rain-spin 1s infinite linear;
    }
  }
  @keyframes rain-spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
