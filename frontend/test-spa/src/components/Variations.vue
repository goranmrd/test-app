<template>
<section class="section">
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-offset-2">
        <table class="table is-hoverable" >
			<tr v-for="variation in variations">
				<td>{{ variation.keyword }}</td>
				<td>{{ variation.label.length }}</td>
				<td v-if="variation.label.length > 5" class="blue">Color</td>
				<td v-else class="red">Color</td>
			</tr>
          <!-- populate this table with the variations retreived from the vuex store -->
          <!-- there should be 4 columns: Keyword (keyword object field), Variation Length (length of label field), Color (background color based off Variation Length) -->
          <!-- for the color column use the css classes blue and red. assign blue if label's length is > 5 otherwise blue -->
        </table>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  computed: {
    variations () {
      return this.$store.state.variations
    }
  },
  beforeMount () {
    // once you have finished coding the loadVariations vuex / store action you will
    // be able to call it from this Vue components lifecycle hook to make sure
    // the store contains the variations data that will be displayed in the table on
    // this component's template
	this.$store.dispatch('loadVariations')
  }
}
</script>

<style lang="scss">
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
</style>