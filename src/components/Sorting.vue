<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<template>
  <div>
    <div class="button">
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="Add"
        >Add</md-button
      >
      <md-button
        class="md-raised md-accent"
        :disabled="checkLock"
        v-on:click="Remove"
        >Remove</md-button
      >
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="RandomAdd(5)"
        >Random Add</md-button
      >
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="Sort(1)"
        >Bubble Sort</md-button
      >
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="Sort(2)"
        >Selection Sort</md-button
      >
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="Sort(3)"
        >Quick Sort</md-button
      >
      <div v-show="checkLock">
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>
      </div>
    </div>
    <transition-group name="list" tag="ul">
      <li
        v-for="item in items"
        v-bind:key="item"
        class="list-item"
        v-bind:style="{ height: 20 * item + 'px' }"
      >
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Sorting",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      nextNum: 6,
      intDelay: 1000,
      isLock: false,
      intMax: 30,
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  computed: {
    checkLock: function () {
      return this.isLock;
    },
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    swap: async function(i,j){
      var a, b;
      var that = this;
      a = that.items[i];
      b = that.items[j];
      return new Promise((resolve) => {
        setTimeout(function () {
          that.items.splice(j, 1);
          that.items.splice(i, 1);
        }, that.intDelay / 2);
        setTimeout(function () {
          that.items.splice(i, 0, b);
          that.items.splice(j, 0, a);
          resolve("done2");
        }, that.intDelay);
      });
    },
    bubbleSort: async function () {
      var i, j;
      var that = this;
      var n = that.items.length;
      for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
          if (that.items[j] > that.items[j + 1]) {
            await that.swap(j,j+1);
          }
        }
      }
    },
    selectionSort: async function() {
      var i, j;
      var min_idx = 0;
      var that = this;
      var n = that.items.length;
      for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) {
          if (that.items[min_idx] > that.items[j]) {
            min_idx = j;
          }
        }
        if (min_idx === i) {
          continue;
        }
        await that.swap(i,min_idx);
      }
    },
    partition: async function(low,high){
      var pivot = this.items[high];
      var i = (low-1);
      var j = 0;
      for (j = low; j <= high - 1; j++) 
      { 
          // If current element is smaller than the pivot 
          if (this.items[j] < pivot) 
          { 
              i++; // increment index of smaller element 
              await this.swap(i, j); 
          } 
      } 
      await this.swap(i + 1, high); 
      return (i + 1); 
    },
    quickSort: async function(low,high) {
      if(low < high){
        var pi = await this.partition(low, high);
        this.quickSort(low,pi-1);
        this.quickSort(pi + 1,high); 
      }
    },
    Add: function () {
      if (this.items.length > this.intMax) {
        return;
      }
      this.isLock = true;
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
      this.isLock = false;
    },
    bulkAdd: async function(intSize) {
      var that = this;
      that.isLock = true;
      for (let idx = 0; idx < intSize; idx++) {
        let promise = new Promise((resolve) => {
          setTimeout(function () {
            that.items.splice(that.randomIndex(), 0, that.nextNum++);
            resolve("done");
          }, that.intDelay);
        });
        await promise;
      }
      setTimeout(function () {
        that.isLock = false;
      }, that.intDelay);
    },
    Remove: function () {
      if(this.items.length == 0){
        return;
      }
      this.isLock = true;
      this.items.splice(this.randomIndex(), 1);
      this.isLock = false;
    },
    RandomAdd: function (intSize) {
      if (this.items.length > this.intMax - intSize) {
        return;
      }
      this.bulkAdd(intSize);
    },
    Sort: async function (intType) {
      let that = this;
      that.isLock = true;
      switch (intType) {
        case 1:
          await that.bubbleSort();
          break;
        case 2:
          await that.selectionSort();
          break;
        case 3:
          await that.quickSort(0,that.items.length);
          break;
        default:
          break;
      }
      setTimeout(function () {
        that.isLock = false;
      }, that.intDelay);
    },
  },
};
</script>
<style>
.button {
  width: 600px;
  text-align: center;
  margin: auto;
}
.list-demo {
  vertical-align: top;
  height: auto;
}
ul {
  text-align: center;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
  background-color: red;
  width: 25px;
  text-align: center;
}

.list-enter-active,
.list-leave-active {
  transition: all 1000ms;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>