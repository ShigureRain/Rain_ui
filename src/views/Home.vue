<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Rain UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/ShigureRain/Rain_ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>

    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Topnav from '../components/Topnav.vue'

  export default {
    name: 'Home.vue',
    components: {Topnav},
  }
</script>

<style lang="scss" scoped>
  $color: #2d527c;
  $border-radius: 4px;
  $green: #2d527c;
  .topnavAndBanner {
    background: linear-gradient(45deg, rgba(48, 65, 81, 0.7) 0%, rgba(105, 108, 115, 0.8) 56%, rgba(186, 166, 159, 0.7) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }
  .features {
    margin: 64px auto;
    padding-left: 16px;
    @media (max-width: 564px) {
      > ul {
        justify-content: center;
      }
    }
    @media (min-width: 800px) {
      width: 800px;
      > ul {
        > li {
          width: 50%;
        }
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
      > ul {
        > li {
          width: 33.3333%;
        }
      }
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
        "icon title"
        "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        > h3 {
          grid-area: title;
          font-size: 28px;
        }
        > p {
          grid-area: text
        }
      }
    }
  }
  .banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions {
      padding: 16px 0;
      a {
        margin: 0 8px;
        background: $green;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>
