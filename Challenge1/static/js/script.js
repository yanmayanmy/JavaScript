// Challenge 1 : Your age in days
function ageInDays (){
    let birthYear = prompt("What year were you born in?")
    let thisYear = 2022;
    let days = (thisYear - birthYear) * 365;

    let h2 = document.createElement('h2')
    let ans = document.createTextNode('You are about' + days + ' days old.');
    h2.appendChild(ans);
    h2.setAttribute('id', 'answer');
    document.getElementById('answer-box').appendChild(h2);
}

function reset (){
    document.getElementById('answer').remove();
}
