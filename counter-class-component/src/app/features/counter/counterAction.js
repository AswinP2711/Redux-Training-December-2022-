export function Increment(){
    return{
        type:"INCREMENT"
    }
}

export function Decrement(){ 
    return{
        type:"DECREMENT"
    }
}

export function IncrementByAmount(amount){
    return{
        type:"INCREMENTBYAMOUNT",
        amount
    }
}

export function decrementByAmount(amount){
    return{
        type:"DECREMENTBYAMOUNT",
        amount
    }
}