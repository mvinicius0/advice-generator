<template>
  <div class="quote-card">
    <div class="card">
      <p class="advice-title">ADVICE #{{ adviceId }}</p>
      <blockquote class="advice-text">"{{ advice }}"</blockquote>
      <div class="divider">
        <img src="../assets/pattern-divider-desktop.svg" alt="" />
      </div>
      <button class="button" @click="fetchAdvice" aria-label="Get new advice">
        <img src="../assets/icon-dice.svg" alt="" />
      </button>
    </div>
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
.quote-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  background: #202733;
}

.card {
  position: relative;
  background: #313a48;
  color: #ffff;
  padding: 50px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.advice-title {
  color: #53ffaa;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: bold;
  margin-bottom: 10px;
}

.advice-text {
  font-size: 18px;
  margin: 15px 0;
  line-height: 1.5;
}

.divider {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.divider img {
  max-width: 100%;
  width: 80%; /* Ajusta para ficar proporcional ao card */
}

.button {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: #53ffaa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 255, 153, 0.7);
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.2s;
  border: none;
}

.button:hover {
  transform: translateX(-50%) scale(1.1);
}
</style>
