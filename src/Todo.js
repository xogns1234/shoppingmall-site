import React, { Component } from "react"

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { //초기데이터
            name : "cleaning",
            done : false,
            description : 'cleaning my room on weekends'
        }
    }
    // 초기 데이터
    // 이벤트 핸들러 함수
    changeName = () => {
        console.log(this)
        this.setState({ name: '변경됨 !'})
    }
    // HTML 템플릿
    render(){
        const { name, done, description } = this.state // 구조분해
        
        // HTML 템플릿
        return(
            <>
                <h3>할일 타이틀: {name}</h3>
                <h4>할일 상태 : {done ? "완료" : "진행중"}</h4>
                <p>할일에 대한 설명 : {description}</p>
                <button onClick={this.changeName}>할일 타이틀 변경</button>
            </>

        )
    }
}

export default Todo