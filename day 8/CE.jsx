import React ,{useState, useEffect} from ' react ';
const ReactApp =() =>
  {
    const[message, setMessage] = useState("Hello dear one , learning React");
    useEffect(()=>{
      console.log('user effect hook called');
      const timeoutId = setTimeout(()=>{
        setMessage("Great... This is time to learn about HOOKS");
      },2000);
      return() =>
        {
          clearTimeout(timeoutId);
        };
    },[]);
    return(<div>
    <p>{message}</p>
    </div>)
  };
export default ReactApp;
