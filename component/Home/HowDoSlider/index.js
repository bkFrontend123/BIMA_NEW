import React, { useState, useEffect } from "react";

function CardList() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = Array.from(Array(5).keys()); // array of card data

  const nextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleArrowKey = (e) => {
      if (e.keyCode === 39) {
        nextCard(); // right arrow key
      } else if (e.keyCode === 37) {
        prevCard(); // left arrow key
      }
    };

    document.addEventListener("keydown", handleArrowKey);

    return () => {
      document.removeEventListener("keydown", handleArrowKey);
    };
  }, []);

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div
          key={index}
          className={
            "card" +
            (index === activeCardIndex ? " activeNow" : "") +
            (index === activeCardIndex - 1 || (activeCardIndex === 0 && index === cards.length - 1) ? " transformPrev" : "") +
            (index === activeCardIndex + 1 || (activeCardIndex === cards.length - 1 && index === 0) ? " transformThis" : "")
          }
        >
          <p>Card {index + 1}</p>
        </div>
      ))}
      <button className="prev" onClick={prevCard}>
        Prev
      </button>
      <button className="next" onClick={nextCard}>
        Next
      </button>
    </div>
  );
}

export default CardList;
