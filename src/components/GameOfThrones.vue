<template>
  <div>
    <h4>Game of Thrones</h4>
    <ul>
      <li v-for="item in gameOfThrones">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameOfThrones',
  data() {
    return {
      gameOfThrones: [
        { name: 'Jon Snow' },
        { name: 'Daenerys Targaryen' },
        { name: 'Tyron' },
      ],
    };
  },
};
</script>
