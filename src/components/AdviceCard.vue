<template>
  <div class="card">
    <div class="advice">Advice #{{ adviceId }}</div>
    <div class="quote">
      {{ advice }}
    </div>
    <div class="divider">
      <img src="../assets/pattern-divider-desktop.svg" alt="" />
    </div>
    <button
      class="buttonAdvice"
      @click="fetchAdvice"
      aria-label="Get new advice"
    >
      <img src="../assets/icon-dice.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      advice: "",
      adviceId: 1,
    };
  },

  methods: {
    fetchAdvice() {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          this.advice = data.slip.advice;
          this.adviceId = data.slip.id;
        });
    },
  },

  mounted() {
    this.fetchAdvice();
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  height: 334px;
  background: #313a48;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #cee3e9;
}

.card .advice {
  font-size: 14px;
  color: #53ffaa;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 16px 0 32px 0;
}

.card .quote {
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 28px 0;
}

.divider img {
  width: 100%;
  margin: 20px 0;
}

.buttonAdvice {
  width: 64px;
  height: 64px;
  background-color: #53ffaa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  position: absolute;
  bottom: 15.7rem;
  border: none;
}

.buttonAdvice:active {
  transform: scale(0.95);
  box-shadow: 0 0 20px 5px rgba(46, 204, 113, 0.6);
}

@media (max-width: 600px) {
  .card {
    width: 90%;
    height: 33%;
    padding: 20px;
  }

  .card .quote {
    font-size: 16px;
  }

  .buttonAdvice {
    width: 56px;
    height: 56px;
    bottom: 17.5rem;
  }

  .divider img {
    width: 100%;
    padding-bottom: 30px;
  }
}
</style>
