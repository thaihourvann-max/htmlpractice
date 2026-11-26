
function winner(vote){
    let counta=0;
    let countb=0;
    let countc=0;
    for(let i=0; i<vote.length ; i++){
       if(vote[i]=='A'){
        counta++;
       }
       else if(vote[i]=='B'){
        countb++;
       }else if(vote[i]=='C'){
        countc++;
       }
    }
    if(counta>>countb&&counta>>countc){
        console.log("A is a winner");
    }else if(countb>counta&&countb>countc){
        console.log("B is a winner");
        }else if(countc>counta&&countc>countb){
            console.log("C is a winner");
        }else if(counta==countb&&counta>countc){
            console.log("A and B is a winner");
        }else if(counta=countc&& counta>countb){
            console.log("A and C is a winner");
        }else if(countb==countc&&countb>countc){
            console.log("B and C is a winner");
        }else if(counta==countb&&counta==countc&&counta>0){
            console.log("A and B and C is a winner");
        }else if(counta==0 &&countb==0 && countc==0){
            console.log("There is not vote yet");
        }
}
let vote=['A', 'B' , 'A' , 'C', 'A' ];
winner(vote);
 vote=['A', 'B', 'B' , 'B', 'C', 'A'];
 winner(vote);
 vote=[];
 winner(vote);