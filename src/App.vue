<template>
  <div id="app">
    <div class="button">
      <button :disabled="isLock" v-on:click="add">Add</button>
      <button :disabled="isLock" v-on:click="remove">Remove</button>
      <button :disabled="isLock" v-on:click="randomAdd">RandomAdd</button>
      <button :disabled="isLock" v-on:click="sort(1)">Bubble Sort</button>
      <button :disabled="isLock" v-on:click="sort(2)">Selection Sort</button>
      <button :disabled="isLock" v-on:click="sort(3)">Insertion Sort</button>
    </div>
    <transition-group name="list" tag="p">
      <p
        v-for="item in items"
        v-bind:key="item"
        class="list-item"
        v-bind:style="{ height: 20 * item + 'px' }"
      >
        {{ item }}
      </p>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      nextNum: 6,
      isLock: false,
      intTime: 1000,
    };
  },
  computed: {
    isDisabled: function () {
      return this.isLock;
    },
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
    randomAdd: function () {
      let that = this;
      let intTime = this.intTime;
      let i;
      //this.isLock = true;
      async function add() {
        alert("START");
        that.items.splice(that.randomIndex(), 0, that.nextNum++);
        for (i = 1; i < 5; i++) {
          let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
              that.items.splice(that.randomIndex(), 0, that.nextNum++);
              resolve("done!");
            }, intTime);
          });
          await promise;
        }
        setTimeout(function () {
          alert("END");
        }, intTime);
        //this.isLock = false;
      }
      add();
    },
    sort: function (intType) {
      let that = this;
      let intTime = this.intTime;
      async function BubbleSort() {
        let i, j;
        let n = that.items.length;
        alert("START");
        for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
            if (that.items[j] > that.items[j + 1]) {
              let a, b;
              a = that.items[j];
              b = that.items[j + 1];
              let promise = new Promise((resolve, reject) => {
                setTimeout(function () {
                  that.items.splice(j, 1);
                  that.items.splice(j, 1);
                }, intTime / 2);
                setTimeout(function () {
                  that.items.splice(j, 0, b);
                  that.items.splice(j + 1, 0, a);
                  resolve("done!");
                }, intTime);
              });
              await promise;
            }
          }
        }
        setTimeout(function () {
          alert("END");
        }, intTime);
      }
      async function SelectionSort() {
        let i, j;
        let min_idx = 0;
        let n = that.items.length;
        alert("START");
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
          let a, b;
          a = that.items[i];
          b = that.items[min_idx];
          let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
              that.items.splice(min_idx, 1);
              that.items.splice(i, 1);
            }, intTime / 2);
            setTimeout(function () {
              that.items.splice(i, 0, b);
              that.items.splice(min_idx, 0, a);
              resolve("done2");
            }, intTime);
          });
          await promise;
        }
        setTimeout(function () {
          alert("END");
        }, intTime);
      }
      async function InsertionSort() {
        let i, j;
        let n = that.items.length;
        alert("START");
        for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
            if (that.items[j] > that.items[j + 1]) {
              let a, b;
              a = that.items[j];
              b = that.items[j + 1];
              let promise = new Promise((resolve, reject) => {
                setTimeout(function () {
                  that.items.splice(j, 1);
                  that.items.splice(j, 1);
                }, intTime / 2);
                setTimeout(function () {
                  that.items.splice(j, 0, b);
                  that.items.splice(j + 1, 0, a);
                  resolve("done!");
                }, intTime);
              });
              await promise;
            }
          }
        }
        setTimeout(function () {
          alert("END");
        }, intTime);
      }
      switch (intType) {
        case 1:
          BubbleSort();
          break;
        case 2:
          SelectionSort();
          break;
        case 3:
          InsertionSort();
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
.list-demo {
  vertical-align: top;
  height: auto;
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
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>