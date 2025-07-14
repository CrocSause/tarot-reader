import React from "react";
import TarotDeck from "./TarotDeck";

export default function TarotReading() {
  return (
    <div className="tarot-reading-container">
      <p>What will the cards reveal...</p>
      <TarotDeck />
    </div>
  );
}