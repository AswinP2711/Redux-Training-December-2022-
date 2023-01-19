export function setData(data){
    return{
        type:"set-data",
        payload:data
    }
}

export function setLoading(isLoading){
    return{ 
        type:"loading",
        payload:isLoading
    }
}

export function setError(error){
    return{
        type:"error",
        payload:error
    }
}