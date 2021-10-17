import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState( null );
    const[isPending,setIsPending] = useState(true);
    const[error,setError] = useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw new Error('😓Server Error; Could find the data')
            }
            return res.json()
        })
        .then(data=> {
            setIsPending(false);
            setData(data);
            setError(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError'){}
            else{
            setIsPending(false);
            setError('😓Server Error; Could find the data');
        }})
        return ()=> abortCont.abort();
    },[url]);

    return {data,isPending,error}
}
export default useFetch;