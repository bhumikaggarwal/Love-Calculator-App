function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if(name1 === '' || name2 === ''){
        alert('Please enter both the names')
    }else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById('result');
        result.innerHTML = `${name1} and ${name2}'s love percentage : ${lovePercentage}%`;

  
    if(lovePercentage < 30){
        result.innerHTML += '<br>Not a good match. Keep trying!'

    }else if(lovePercentage>30 && lovePercentage <70){

        result.innerHTML += '<br>Pretty good match. You can give it a try!'

    }else if(lovePercentage>70) {

        result.innerHTML += '<br>You are an amazing match.Love is in the air , Enjoy!'

    }
}

}