<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Sorting2",
   props: {
    items: Array<number>,
    nextNum: Number,
    intDelay: Number,
    isLock: Boolean,
    intMax: Number,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      nextNum: 6,
      intDelay: 1000,
      isLock: false,
      intMax: 30,
    };
  },
  beforeRouteEnter(to : any, from : any, next : any) : void{
    next();
  },
  computed: {
    checkLock: function () : Boolean {
      return this.isLock;
    },
  },
  methods: {
    randomIndex: function () : number {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      if (this.items.length > this.intMax) {
        return;
      }
      this.isLock = true;
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
      this.isLock = false;
    },
    remove: function () {
      if(this.items.length == 0){
        return;
      }
      this.isLock = true;
      this.items.splice(this.randomIndex(), 1);
      this.isLock = false;
    },
    randomAdd: function (intSize : number) {
      if (this.items.length > this.intMax - intSize) {
        return;
      }
      var that = this;
      async function bulkAdd() {
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
      }
      bulkAdd();
    },
    insertionSort: function (intType : number) {
      var that = this;
      var intDelay = this.intDelay;
      async function InsertionSort() {
        var i : number, j : number, a : number, b : number;
        var n = that.items.length;
        that.isLock = true;
        for (i = 1; i < n ; i++) {
          j = i;
          a = that.items[j];
          b = that.items[j-1];
          while(j >= 0 && that.items[j-1] > that.items[j])
          {
            a = that.items[j];
            b = that.items[j-1];
            let promise = new Promise((resolve) => {
              setTimeout(function () {
                that.items.splice(j, 1);
                that.items.splice(j-1, 1);
              }, intDelay / 2);

              setTimeout(function () {
                that.items.splice(j-1, 0, a);
                that.items.splice(j, 0, b);
                resolve("done!");
              }, intDelay);
            });
            await promise;
            j = j - 1;
          }
        }
        setTimeout(function () {
          that.isLock = false;
        }, intDelay / 2);
      }

      InsertionSort();
    }
  }
});
</script>
<template>
  <div>
    <div class="button">
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="add"
        >Add</md-button
      >
      <md-button
        class="md-raised md-accent"
        :disabled="checkLock"
        v-on:click="remove"
        >Remove</md-button
      >
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="randomAdd(5)"
        >Random Add</md-button
      >
      <md-button
        class="md-raised md-primary"
        :disabled="checkLock"
        v-on:click="insertionSort"
        >Insertion Sort</md-button
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