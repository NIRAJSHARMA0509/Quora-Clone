import React from "react";
import "../Qlist/Qlist.css"


const Qlist=(props)=>{
    let localQuesList=[];
    // let localQuesList = new Set();


    // let quesList=new Set();
    let quesList=[
          {id:0,question:"Why Kattapa killed Bahubali?"},
          {id:1,question:"Who is Father Of Economics?"},
          {id:2,question:"What are the most intellectually stimulating movies?"},
          {id:3,question:"What is the meaning of life?"},
          {id:4,question:"What are dirty truths about Hollywood?"},
          {id:5,question:"What are some must-watch TED talks?"},
        
     ]

   


    


    localQuesList=JSON.parse(localStorage.getItem('QuestionList'));
    
      
    return(
        <div className="list-card">
            <h2 className="h2-qlist">{props.title}</h2>
            <div className="list">
           { 
            
            localQuesList && localQuesList.map((e,index)=>
                <span className="sub-tags"  key={index} >
                        <p onClick={()=>props.print(e)} className="ptag" >{e}</p>
                </span>
            )
         
           
           }

            {   
                
                quesList && quesList.map((data)=>
                <span className="sub-tags" key={data.id}>
                        <p onClick={()=>props.print(data.question)} className="ptag" >{data.question}</p>
                </span>
                )
            }
            </div>   

        </div>

    )
}
export default Qlist