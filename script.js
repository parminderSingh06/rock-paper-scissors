function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissor"];
    let random_choice = Math.floor(Math.random() * choices.length);
    let computer_choice = choices[random_choice].toLowerCase();
    return computer_choice;
}

function getPlayerChoice()
{
    while(true)
    {
        const input = prompt("Choose Rock, Paper, Scissor");
        let player_choice = input.toLowerCase()
        if(player_choice == 'rock' || player_choice == 'paper' || player_choice == 'scissor')
        {
            return player_choice;
        }
        else
        {
            alert("Invalid Input! Try Again.");
        }
    }
}

function playRound(player_choice, computer_choice)
{
    console.log(`Your Choice: ${player_choice}\nComputer Choice: ${computer_choice}`);
    if(player_choice == computer_choice)
    {
        console.log("Its a Tie");
        return 0;
    }
    else if(player_choice == "rock" && computer_choice == "scissor" || player_choice == "scissor" && computer_choice == "paper" || player_choice == "paper" && computer_choice == "rock")
    {
        console.log("You Win");
        return 1;
    }
    else
    {
        console.log("You Lost");
        return 2;
    }

}

function game()
{
    let computer_score = 0;
    let player_score = 0;
    for(let i=0;i<5;i++)
    {
        console.log(`[Player Score: ${player_score} || Computer Score:${computer_score}]`)
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if(result == 1)
        {
            player_score++;
        }
        else if(result == 2)
        {
            computer_score++;
        }
    }
}

game();