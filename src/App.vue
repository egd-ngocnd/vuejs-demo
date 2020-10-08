<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <span class="md-title">My Title</span>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full">
          <md-toolbar class="md-transparent" md-elevation="0">
            Navigation
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
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
              v-on:click="randomAdd"
              >Random Add</md-button
            >
            <md-button
              class="md-raised md-primary"
              :disabled="checkLock"
              v-on:click="sort(1)"
              >Bubble Sort</md-button
            >
            <md-button
              class="md-raised md-primary"
              :disabled="checkLock"
              v-on:click="sort(2)"
              >Selection Sort</md-button
            >
          <div v-show="checkLock">
            <md-progress-bar md-mode="indeterminate"></md-progress-bar>
          </div>
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
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      nextNum: 6,
      intDelay: 1000,
      isLock: false,
    };
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
    add: function () {
      this.isLock = true;
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
      this.isLock = false;
    },
    remove: function () {
      this.isLock = true;
      this.items.splice(this.randomIndex(), 1);
      this.isLock = false;
    },
    randomAdd: function () {
      var that = this;
      async function bulkAdd() {
        that.isLock = true;
        for (let idx = 0; idx < 5; idx++) {
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
    sort: function (intType) {
      var that = this;
      var intDelay = this.intDelay;
      async function BubbleSort() {
        var i, j;
        var n = that.items.length;
        that.isLock = true;
        for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
            if (that.items[j] > that.items[j + 1]) {
              var a, b;
              a = that.items[j];
              b = that.items[j + 1];
              let promise = new Promise((resolve) => {
                setTimeout(function () {
                  that.items.splice(j, 1);
                  that.items.splice(j, 1);
                }, intDelay / 2);
                setTimeout(function () {
                  that.items.splice(j, 0, b);
                  that.items.splice(j + 1, 0, a);
                  resolve("done2");
                }, intDelay);
              });
              await promise;
            }
          }
        }
        setTimeout(function () {
          that.isLock = false;
        }, intDelay / 2);
      }
      async function SelectionSort() {
        var i, j;
        var min_idx = 0;
        var n = that.items.length;
        that.isLock = true;
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
          var a, b;
          a = that.items[i];
          b = that.items[min_idx];
          let promise = new Promise((resolve) => {
            setTimeout(function () {
              that.items.splice(min_idx, 1);
              that.items.splice(i, 1);
            }, intDelay / 2);
            setTimeout(function () {
              that.items.splice(i, 0, b);
              that.items.splice(min_idx, 0, a);
              resolve("done2");
            }, intDelay);
          });
          await promise;
        }
        setTimeout(function () {
          that.isLock = false;
        }, intDelay / 2);
      }
      switch (intType) {
        case 1:
          BubbleSort();
          break;
        case 2:
          SelectionSort();
          break;
        case 2:
          SelectionSort();
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
.md-app {
  height: 100%;
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.button
{
  width: 600px;
}
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

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
