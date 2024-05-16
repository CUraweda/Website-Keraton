<template>
  <div class="dropdown">
    <div class="menu-item" @click="toggleMenu">
      <a href="#">
        {{ title }}
      </a>
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF">
        </path>
      </svg>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="sub-menu">
        <div v-for="(item, index) in items" :key="index" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>

    <button @click="toggleDropdown" class="dropdown-button">
      {{ selectedOption ? selectedOption.name : '▼' }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option.value">
        <a @click="selectOption(option)">{{ option.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    title: String,
    items: Array,
    selectedOption: Object,
    options: Array
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.$emit('update:selectedOption', option);
      this.isOpen = false;
    }
  }
}
</script>

<style>
.menu-item svg {
  width: 10px;
  margin-left: 10px;
}

.sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dropdown {
  background-color: white;
}

.dropdown-button {
  border: 0px;
  background-color: white;
  color: white;
  transition: color;
}

.dropdown-button:hover {
  color: black;
}

.dropdown-menu {
  gap: 9px;
  position: absolute;
  padding: 11px 40px 11px 14px;
  width: auto;
  height: auto;
  top: 50px;
  background: #FFFFFF;
  border: 1px solid #123B32;
  border-radius: 10px;
}

ul li {
  list-style-type: none;
}
</style>
