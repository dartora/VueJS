<template>
  <div>
    <div class="row">
      <div class="col">
        <h3>Transformers</h3>
        <ul>
          <li v-for="item in transformers" :key="item.slug">
            <router-link
              :to="{
                name: 'transformersContent',
                params: { name: item.slug }
              }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transformers',
  data() {
    return {
      transformers: [
        { name: 'Optmus Prime', slug: 'optimus-prime' },
        { name: 'Bumble Bee', slug: 'bumble-bee' },
        { name: 'Megatron', slug: 'megatron' },
      ],
    };
  },
};
</script>
