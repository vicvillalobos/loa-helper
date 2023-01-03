<template>
  <div id="kakulsaydon-die-cheatsheet" class="cheatsheet-mechanic">
    <h2 class="cheatsheet-mechanic__title">Colored Dice</h2>
    <div class="die-table">
      <div class="die-table-column">
        <div class="die-table-column__header">
          <div class="dice">Die</div>
        </div>
        <div class="die-table-column__content">
          <div
            class="die-table-column__content__row"
            v-for="i in 4"
            :key="'header-left-' + i"
          >
            <div class="dice">{{ i }}</div>
          </div>
        </div>
      </div>
      <div
        class="die-table-column"
        :class="{ selected: selected === i }"
        v-for="(item, i) in DieCasts"
        :key="'cast-' + i"
        @click="selected = i"
      >
        <div class="die-table-column__header">
          <div class="dice" :class="getDiceClass(item.die, item.color)">
            {{ getSuitSymbol(item.die) }}
          </div>
        </div>
        <div class="die-table-column__content">
          <div
            class="die-table-column__content__row"
            v-for="(cast, j) in item.values"
            :key="'cast-' + i + '-' + j"
          >
            <div
              class="dice"
              :class="
                'dice--' +
                cast +
                (j in item.free ? ' dice--free' : ' dice--prisoner')
              "
            >
              {{ getSuitSymbol(cast) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DieCasts from "./data/die-casts";

const selected = ref(-1);

function getDiceClass(
  die: "heart" | "diamond" | "clover" | "spade",
  color: "black" | "red"
) {
  return `dice dice--${die} dice--${color}`;
}

function getSuitSymbol(suitName: "heart" | "diamond" | "clover" | "spade") {
  switch (suitName) {
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    case "clover":
      return "♣";
    case "spade":
      return "♠";
  }
}
</script>

<style lang="scss" scoped>
.die-table {
  display: flex;
  flex-direction: row;
  margin: 1em 0;
  .die-table-column {
    width: calc(100% / 9);
    text-align: center;
    cursor: pointer;
    &:hover {
      background: var(--color-background-mute);
    }
    &.selected {
      background: var(--color-background);
    }
    .die-table-column__header,
    .die-table-column__content__row {
      border-bottom: 1px solid #333;
      padding: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      &:last-child {
        border-bottom: none;
      }
      .dice {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #333334;
        box-shadow: 0 2px 3px #000;
        font-size: 2em;
        &.dice--heart,
        &.dice--diamond {
          color: rgb(189, 43, 63);
        }
        &.dice--clover,
        &.dice--spade {
          color: #000;
        }
        &.dice--black {
          color: #000;
          background-color: rgb(189, 43, 63);
        }
        &.dice--red {
          color: rgb(189, 43, 63);
          background-color: #000;
        }
        &.dice--free {
          border: 1px solid #070;
        }
        &.dice--prisoner {
          border: 1px solid #700;
        }
      }
    }
    &:first-child {
      .die-table-column__header,
      .die-table-column__content__row {
        .dice {
          font-size: 1rem;
          background-color: transparent;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
