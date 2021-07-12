
let cards=[
    {
        image="http://static.c2w.com/uploads/question/image/01/40/54/84/N1405484/1291468752.jpg";
        value:1;
        status:"closed"

    },
    {
        image="http://static.c2w.com/uploads/question/image/01/40/54/84/N1405484/1291468752.jpg";
        value:1;
        status:"closed"

    },
    {
        image="https://i.ytimg.com/vi/9SvkWMYTXj8/hqdefault.jpg";
        value:2;
        status:"closed"

    },
    {
        image="https://i.ytimg.com/vi/9SvkWMYTXj8/hqdefault.jpg";
        value:2;
        status:"closed"

    },
    {
        image="http://static.c2w.com/uploads/question/image/01/40/54/88/N1405488/1291469502.jpg";
        value:3;
        status:"closed"

    },
    {
        image="http://static.c2w.com/uploads/question/image/01/40/54/88/N1405488/1291469502.jpg";
        value:3;
        status:"closed"

    },
    {
        image="https://i.pinimg.com/236x/23/6b/4f/236b4f370f02e512c95834b15f8443a4--takahiro-happy-birthday.jpg?nii=t";
        value:4;
        status:"closed"

    },
    {
        image="https://i.pinimg.com/236x/23/6b/4f/236b4f370f02e512c95834b15f8443a4--takahiro-happy-birthday.jpg?nii=t";
        value:4;
        status:"closed"

    },
    {
        image="https://1.bp.blogspot.com/-7DJMks0eNTk/XrABK3FAD1I/AAAAAAAAAF0/gwu02goaifQrBfU7OeMYU6zvvivKnlLIgCLcBGAsYHQ/s1600/hatori2.jpg";
        value:5;
        status:"closed"

    },
    {
        image="https://1.bp.blogspot.com/-7DJMks0eNTk/XrABK3FAD1I/AAAAAAAAAF0/gwu02goaifQrBfU7OeMYU6zvvivKnlLIgCLcBGAsYHQ/s1600/hatori2.jpg";
        value:5;
        status:"closed"

    },
]

//shuffling algorithm

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math,floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}
let  cardscopy=cards;

function display cards(data){
    let cardsString="";
    data.forEach(function(card,index)){
         cardsString+=
        <div class="card"  style="background-image:url('${card.image}')">
            <div class="overlay ${card.status} " onclick="opencard(${index})">
                </div>

        </div>
        ;
    },
    document.getElementById('cards').innerHTML=cardsString;
}

display cards(cards);
let cardcount=1;
let val1=null, val2=null;
let score=0;
function opencard(index){
    console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;
        if(val1==val2){
            score++;
            document.getElementById('score').innerText=score;
        //reset after one guess
        val1=null;
        val2=null;   
        cardCount=1; 
    }
    else{
         alert("game over");
         location.reload();
    }

}
