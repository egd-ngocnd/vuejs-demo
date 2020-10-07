<template>
  <div id="app">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <button v-on:click="randomAdd">RandomAdd</button>
    <button v-on:click="sort(1)">Bubble Sort</button>
    <!-- <button v-on:click="sort(2)">Selection Sort</button> -->
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
    };
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
      var that = this;
      var evtInterval = setInterval(function () {
        that.items.splice(that.randomIndex(), 0, that.nextNum++);
        if (that.items.length === 10) {
          clearInterval(evtInterval);
        }
      }, 1000);
    },
    sort: function (intType) {
      var that = this;
      async function BubbleSort() {
        var i, j;
        var n = that.items.length;
        alert("START");
        for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
            if (that.items[j] > that.items[j + 1]) {
              var a, b;
              a = that.items[j];
              b = that.items[j + 1];
              let promise1 = new Promise((resolve, reject) => {
                setTimeout(function () {
                  that.items.splice(j, 1);
                  that.items.splice(j, 1);
                }, 500);
                setTimeout(function () {
                  that.items.splice(j, 0, b);
                  that.items.splice(j + 1, 0, a);
                  resolve("done2");
                }, 1000);
              });
              await promise1;
            }
          }
        }
        setTimeout(function () {
          alert("END");
        }, 500);
      }
      async function SelectionSort() {
        var i, j;
        var min_idx = 0;
        var n = that.items.length;
        alert("START");
        for (i = 0; i < n - 1; i++) {
          min_idx = i;
          for (j = i + 1; j < n; j++) {
            if (that.items[min_idx] > that.items[j]) {
              min_idx = j;
            }
          }
          var a, b;
          a = that.items[i];
          b = that.items[min_idx];
          console.log(i, min_idx);
          let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
              that.items.splice(i, 1);
              that.items.splice(min_idx, 1);
            }, 500);
            setTimeout(function () {
              that.items.splice(i, 0, b);
              that.items.splice(min_idx, 0, a);
              resolve("done2");
            }, 1000);
          });
          await promise;
        }
        setTimeout(function () {
          alert("END");
        }, 500);
      }
      if (intType === 1) {
        BubbleSort();
      }
      if (intType === 2) {
        SelectionSort();
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
