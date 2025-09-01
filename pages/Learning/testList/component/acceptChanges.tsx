import { useLearningContext } from "../../learningContext"

export const AcceptChanges = ({ QandA, setQandA }) => {
    const { Context } = useLearningContext();
    const finalyze = (type) => {
        let result = []
        const reset = () => {
            Context.QandAData.map((item) => {
                result.push({
                    question: item.question,
                    questionPlaceholder:"",
                    questionClassPlaceholder:false,
                    answer: item.answer,
                    answerPlaceholder:"",
                    answerClassPlaceholder:false
                })
            })
            setQandA(result);
        }
        if (type === "cencel") {
            reset();
        } else if (type === "oke") {
            let empty = false
            Context.QandAData.map((item,index) => {
                if (QandA[index].question === "") {
                  result.push({
                    question: "",
                    questionPlaceholder:"please enter",
                    questionClassPlaceholder:true,
                    answer: item.answer,
                    answerPlaceholder:"",
                    answerClassPlaceholder:false
                })
                empty = true
                } else if (QandA[index].answer === "") {
                    result.push({
                    question: item.question,
                    questionPlaceholder:"",
                    questionClassPlaceholder:false,
                    answer: "",
                    answerPlaceholder:"please enter",
                    answerClassPlaceholder:true
                })
                empty = true
                } else {
                    result.push({
                        question: item.question,
                        questionPlaceholder:"",
                        questionClassPlaceholder:false,
                        answer: item.answer,
                        answerPlaceholder:"",
                        answerClassPlaceholder:false
                    })
                }
            })
            if (empty) {
                console.log(result)
                setQandA(result);
            }
        }
    }
    return (<div className="accept-change">
    <h2>Accept changes</h2>
    <div className="accept-change-option">
        <section onClick={(() => finalyze("oke"))} className="button"><h4>oke</h4></section>
        <section onClick={(() => finalyze("cencel"))} className="button"><h4>cencel</h4></section>
    </div>
    </div>)
}