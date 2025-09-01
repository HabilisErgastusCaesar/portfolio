import { useState } from "react"

export const Status = () => {
    const [status, setStatus] = useState([
        {name:"happiness"},
        {total:100},
    ])
    return(<div className='headResource'>
        <h3>status</h3>
    {status.map((item,index) => {
        const result = () => {
            if (item.total >= 95) {
                return("green")
            } else if (item.total >= 90) {
                return("rgb(15, 138, 15)")
            } else if (item.total >= 85) {
                return("rgb(43, 163, 43)")
            } else if (item.total >= 80) {
                return("rgb(84, 201, 84)")
            } else if (item.total >= 75) {
                return("rgb(177, 205, 50)")
            } else if (item.total >= 70) {
                return("rgb(195, 205, 50)")
            } else if (item.total >= 65) {
                return("rgb(184, 194, 46)")
            } else if (item.total >= 55) {
                return("rgb(196, 207, 31)")
            } else if (item.total >= 50) {
                return("rgb(195, 205, 50)")
            } else if (item.total >= 45) {
                return("rgb(205, 202, 50)")
            } else if (item.total >= 40) {
                return("rgb(205, 177, 50)")
            } else if (item.total >= 35) {
                return("rgb(205, 143, 50)")
            } else if (item.total >= 30) {
                return("rgb(196, 138, 104)")
            } else if (item.total >= 25) {
                return("rgb(180, 130, 130)")
            } else if (item.total >= 20) {
                return("rgb(184, 90, 90)")
            } else if (item.total >= 15) {
                return("rgb(196, 73, 73)")
            } else if (item.total >= 10) {
                return("rgb(218, 47, 47)")
            } else if (item.total >= 5) {
                return("rgb(206, 31, 31)")
            } else {
                return("red")
            }
        }
        return(<div key={index} className="headResource">
        <div className='resource'>
            <h3 className='marginRight'>{item.name}</h3>
            <h3 style={{
                background:result()
            }}>{item.total}</h3>
        </div>
        </div>)
    })}
    </div>)
}