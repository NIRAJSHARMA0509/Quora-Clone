import React from "react";
import '../QACard/QACard.css';


const QACard = ()=>{
    let localQuesAnsList=[];
    
    let quesAns=[
        {id:0,username:"Nakul Sharma",question:"What are the most intellectually stimulating movies?",answer:"Primer  The plot is so complex that the movie feels like a cerebral challenge. A review I read says anybody who claims he fully understands whats going on in Primer after seeing it just once is either a savant or a liar"},
        {id:1,username:"Niraj Sharma",question:"What is the meaning of life?",answer:"The meaning of life is to reach such a sensation of the universe during this lifetime, that there will be no difference between life and death in this world and existence in another world"},
        {id:2,username:"Dhun Charan",question:"What are dirty truths about Hollywood?",answer:"To those of us on the outside, Hollywood often seems like a magical place full of beautiful people with fairytale lives. In reality, it can be as seedy some of the movies it produces. Here are some secrets Tinseltown doesn't like to talk about."},
        {id:3,username:"Namrata Sharma",question:"What are some must-watch TED talks?",answer:"My favourite TED talk is by Prof. Vijay Kumar titled, 'Robots that fly ... and cooperate'. It is an ideal TED talk which exemplifies how incredible research can be presented in such a simple manner. "},
    ]
   
     localQuesAnsList=JSON.parse(localStorage.getItem('QuestionAnswer'));
    //  console.log(localQuesAnsList)

        return (
            <div className="qacard">
             { 

            
                localQuesAnsList && localQuesAnsList.map((e,index)=>
                <div className="inner-card" key={index}>
                        {/* <h2 className="h2">{data.username}</h2> */}
                        <h3 className="h3">{e.question}</h3>
                        <p className="p" >{e.answer}</p>
                </div>


            )
         
           
           }

            {
                
                quesAns && quesAns.map((data)=>
                   
                    <div className="inner-card" key={data.id}>
                        <h2 className="h2" >{data.username}</h2>
                       
                        <h3 className="h3" >{data.question}</h3>
                       
                        <p className="p"  >{data.answer}</p>
                       
                    </div>
                    
                )
            }

            </div>
        )

}
export default QACard