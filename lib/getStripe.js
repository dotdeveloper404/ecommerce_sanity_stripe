import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51MyHY4JT2G5emloxnkmYTkdLyAG1dmz0kNnMc1KKLmG6qcXd6Xm8yhJCt5TkpRkkXZxKoMs94FV9LxuDrHuRuxPm00DdiruWkc');
    } 

    return stripePromise;
}


export default getStripe;