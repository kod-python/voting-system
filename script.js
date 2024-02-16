const options = [
  {
    id: "option1",
    text: "JS",
    votes: 0,
  },
  {
    id: "option2",
    text: "PY",
    votes: 0,
  },
];

function submitVote() {
  const selectedOption = document.querySelector('input[name="poll"]:checked');

  // console.log(selectedOption.value);

  if (!selectedOption) {
    alert("Please select an option");

    // how does the return work
  }

  const optionId = selectedOption.value;

  const selectOptionObj = options.find((option) => option.id == optionId);

  if (selectOptionObj) {
    selectOptionObj.votes++;
    console.log(selectOptionObj);
    // display results
    displayResult()
  }
}

function displayResult() {
    const result = document.getElementById("result")
    result.innerHTML = "";

    options.forEach((option) =>{
        const percentage = ((option.votes / getTotalVotes())*100).toFixed(2) || 0;
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement("div")
        optionResult.className = "option-result"
        optionResult.innerHTML = `<span class="option-text"></span>
        <div class="bar-container">
            <div class="bar" style="width: ${barWidth}"></div>
        </div>
        <span class="percentage">${percentage}%</span>`

        result.appendChild(optionResult)
    })
}

function getTotalVotes() {
    return options.reduce((total, option) => total + option.votes, 0)
}

displayResult()
