let users = 0;
let comps = 0;
const choices = document.querySelectorAll(".abc");
const msg = document.querySelector("#msg");
const usersco = document.querySelector("#user");
const compsco = document.querySelector("#comp");

const comch = () => {
    const options = ["rock", "paper", "scissor"];
    const Idx = Math.floor(Math.random() * 3);
    return options[Idx];
}

const draw = () => {
    console.log("game was draw");
    msg.innerText = "Game was a draw. Play again.";
};

const showwin = (userwin) => {
    if (userwin) {
        users++;
        console.log("You win the game");
        msg.innerText = "You win the game";
        usersco.innerText = users;
    } else {
        comps++;
        console.log("You lose the game");
        msg.innerText = "You lose the game";
        compsco.innerText = comps;
    }
};

const playGame = (user) => {
    console.log("User choice", user);
    const comchoi = comch();
    console.log("Comp choice", comchoi);

    if (user === comchoi) {
        draw();
    } else {
        let userwin = false;
        if (user === "rock") {
            userwin = comchoi === "scissor";
        } else if (user === "paper") {
            userwin = comchoi === "rock";
        } else if (user === "scissor") {
            userwin = comchoi === "paper";
        }
        showwin(userwin);
    }
};

choices.forEach((abc) => {
    abc.addEventListener("click", () => {
        const user = abc.getAttribute("id");
        playGame(user);
    });
});
