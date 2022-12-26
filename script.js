function game()
{
    let player_score = 0;
    let computer_score = 0;
    let view = document.querySelector('#intro');
        let info_txt = document.createElement('div');
        info_txt.classList.toggle('info_txt');
        view.append(info_txt);
    let  buttons = document.querySelectorAll('.choices');
    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener('click',function(){
            let player_choice = buttons[i].textContent;
            let p_select = document.querySelector('#player');
            p_select.textContent = 'PLAYER CHOICE: ';
            p_select.textContent += buttons[i].textContent;
            player_choice = player_choice.toLowerCase();
            let computer_choice = getComputerChoice();
            playRound(player_choice,computer_choice);
        });
    }


    function getComputerChoice()
    {
        const choices = ["ROCK", "PAPER", "SCISSOR"];
        let random_choice = Math.floor(Math.random() * choices.length);
        let c_select = document.querySelector('#computer');
        c_select.textContent = 'COMPUTER CHOICE: ';
        c_select.textContent += choices[random_choice];
        let temp = choices[random_choice].toLowerCase();
        return temp;
    }

    function playRound(player_choice, computer_choice)
    {
        info_txt.textContent = "";
        if(player_choice == computer_choice)
        {
            info_txt.textContent = "IT'S A TIE THIS TURN";
        }
        else if(player_choice == "rock" && computer_choice == "scissor" || player_choice == "scissor" && computer_choice == "paper" || player_choice == "paper" && computer_choice == "rock")
        {
            info_txt.textContent = "YOU WIN THIS TURN";
            player_score++;
            let p_score = document.querySelector("#player_score");
            p_score.textContent = "YOUR SCORE:";
            p_score.textContent += player_score;
        }
        else
        {
            info_txt.textContent = "YOU LOSE THIS TURN"
            computer_score++;
            let c_score = document.querySelector("#computer_score");
            c_score.textContent = "COMPUTER SCORE:";
            c_score.textContent += computer_score;
        }
        if(player_score >= 5)
        {
            document.querySelector('.game').style.visibility = "hidden";
            document.querySelector("#intro").textContent = "CONGRATS YOU HAVE BEAT THE COMPUTER";
        }
        else if(computer_score >= 5)
        {
            document.querySelector('.game').style.visibility = "hidden";
            document.querySelector("#intro").textContent = 'YOU HAVE BEEN DEFEATED BY THE COMPUTER';
        }
    }
}

game();