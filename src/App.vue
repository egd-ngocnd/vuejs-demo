<template>
  <div id="app">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <button v-on:click="randomAdd">RandomAdd</button>
    <button v-on:click="sort">Bubble Sort</button>
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
        if (that.items.length > 12) {
          clearInterval(evtInterval);
        }
      }, 800);
    },
    sort: function () {
      var that = this;
      var i, j;
      var n = this.items.length;
      alert("START");
      var evtInterval = setInterval(function () {
        for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
            if (that.items[j] > that.items[j + 1]) {
              var a, b;
              setTimeout(function () {
                a = that.items[j];
                b = that.items[j + 1];
                that.items.splice(j, 1);
                that.items.splice(j, 1);
              }, 0);
              setTimeout(function () {
                that.items.splice(j, 0, b);
                that.items.splice(j + 1, 0, a);
              }, 800);
              return;
            }
          }
        }
        alert("END");
        clearInterval(evtInterval);
      }, 1600);
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
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
