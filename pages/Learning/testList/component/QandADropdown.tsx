import { useLearningContext } from "../../learningContext"
import { AcceptChanges } from "./acceptChanges";

export const QandADropdown = ({changeQandA,setQandAChange}) => {
    const { Context } = useLearningContext();
    const update = (type, index,e) => {
        setQandAChange((prev) => {
            const newArray = [...prev];
            if (index >= 0 && index < newArray.length) {
                if (type === 'question') {
                    newArray[index] = { ...newArray[index], question: e };
                } else if (type === 'answer') {
                    newArray[index] = { ...newArray[index], answer: e };
                }
            }
            return newArray;
        });
    }
    return(<>
    <AcceptChanges QandA={changeQandA} setQandA={setQandAChange}/>
    {Context.QandAData.map((item,index) => {
        return(<div key={index} className="Item-Container">
            <h4>item {index + 1}</h4>
            {item.questionType === "sentenceConstruct" && <>
                <h4>question</h4>
                {Context.logedIn.id === "Guest-User" && <h4>{item.question}</h4>}
                {Context.logedIn.id !== "Guest-User" && <input defaultValue={item.question} />}
                <h4>right answers</h4>
                <div style={{
                    display:"flex",
                    width:"100%",
                    }}>
                    {item.answer.map((answer, index) => <h4 style={{
                        width:"100%",
                        margin:"1px"
                    }} key={index}>{answer}</h4>)}
                </div>
            </>}
            <div className="Grid">
                {item.questionType === "QandA" && <>
                <h4>question</h4>
                {Context.logedIn.id === "Guest-User" && <h4>{item.question}</h4>}
                {Context.logedIn.id !== "Guest-User" && changeQandA.length > 0 && <input 
                onChange={(e) => update("question", index,e.target.value)}
                placeholder={changeQandA[index].questionPlaceholder}
                value={changeQandA[index].question} />}
                <h4>answer</h4>
                {Context.logedIn.id === "Guest-User" && <h4>{item.answer}</h4>}
                {Context.logedIn.id !== "Guest-User" && changeQandA.length > 0 && <input 
                onChange={(e) => update("answer", index,e.target.value)}
                placeholder={changeQandA[index].answerPlaceholder}
                value={changeQandA[index].answer} />}
                </>}
            <h4>right answers</h4>
            <h4>{item.right}</h4>
            <h4>wrong answers</h4>
            <h4>{item.wrong}</h4>
            <h4>total questions</h4>
            <h4>{item.total}</h4>
            </div>
            <section className="button"><h4>reset values</h4></section>
            <h4>description</h4>
            <p>{item.description}</p>
            </div>)
        })}
    <AcceptChanges QandA={changeQandA} setQandA={setQandAChange}/>
    </>)
}