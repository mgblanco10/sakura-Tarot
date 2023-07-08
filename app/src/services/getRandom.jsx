function getRandom(cards, count) {
    const shuffledCards = cards.sort(() => 0.5 - Math.random());
    return shuffledCards.slice(0, count);
  }


  export default getRandom