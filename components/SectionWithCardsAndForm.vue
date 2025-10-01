<template>
  <section 
  :id="id"
  class="flex flex-col gap-8 justify-center items-center rounded-3xl mb-8 px-2 md:px-4 pt-12 pb-16 md:p-16 md:pb-24 bg-gradient-iguales">
    <ul  class="grid grid-cols-12 gap-8 ">
      <li 
        v-for="(item, index) in cards" :key="`cards-${id}-${index}`" class=""
        :class="{
          'col-span-12 lg:col-span-6': display === 'col-2',
          'col-span-12 md:col-span-6 lg:col-span-4': display === 'col-3',
          'col-span-12 lg:col-span-4': display === 'col-3-transparent',
          'col-span-12 md:col-span-6 lg:col-span-3': display === 'col-4',
        }">
        <CardTool
          v-if="cardsType === 'colored' || cardsType === 'number' || cardsType === 'transparent'"
          :color="item.color"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :link="item.link"
          :number="item.number"
          class=""
        />
      </li>
    </ul>
    <div class="relative w-full min-h-96 h-[40rem] bg-background-extra-light rounded-3xl flex justify-center items-center">
      <iframe class="absolute top-0 w-full h-full rounded-3xl" src="https://form.iguales.kit-eco.social/" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    titlePosition: {
      type: String,
      default: "center",
    },
    display: {
      type: String,
      default: "col-4",
    },
    bgColor: {
      type: String,
      default: "",
    },
    cardsType: {
      type: String,
      default: "transparent", // 'colored', 'number', 'transparent'
    },
    cards: {
      type: Array,
      default: () => [],
    }
  },
  
};
</script>

<style scoped>
.bg-gradient-iguales {
  background: linear-gradient(180deg, #E9D2F9 0%, var(--Background--bg-light, #F9F4F2) 100%);
}
</style>
