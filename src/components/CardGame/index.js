import "./style.css";

function CardGame() {
  return `
  <div class= "CardGame flip">
      <div class="face front">
        <img src="images/logo.png">
      </div>
      <div class="face back">
      <img src="images/logo.png">
      </div>
    </div>


    `;
}
// const flipCard = document.querySelector(".CardGame");
// flipCard.addEventListener("click", (e) => {
//   flipCard.classList.toggle("flip");
// });
export default CardGame;
