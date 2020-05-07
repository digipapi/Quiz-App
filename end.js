const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScore.disabled = !username.value;
})
saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
};