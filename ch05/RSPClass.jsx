import React, { Component } from 'react';

/* 
* 클래스의 경우
constructor -> render -> ref -> componentDidMount
-> props or state 바뀔 때 -> shouldComponentUpdate -> render -> componentDidUpdate
부모가 나를 없앴을 때 -> componentWillUnmount
*/

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

class RSP extends Component {
    state = {
        result: '',
        imgCoord: '0',
        score: 0,
    };

    interval;

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 한다.
        this.interval = setInterval(() => {
            const { imgCoord } = this.state;
            if (imgCoord === rspCoords.바위) {
                this.setState({ imgCoord: rspCoords.가위 });
            } else if (imgCoord === rspCoords.가위) {
                this.setState({ imgCoord: rspCoords.보 });
            } else if (imgCoord === rspCoords.보) {
                this.setState({ imgCoord: rspCoords.바위 });
            }
        }, 1000);
    }

    componentDidUpdate() { // 리렌더링 후

    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 한다.
        clearInterval(this.interval);
    }

    render() {
        const { result, imgCoord, score } = this.state;
        return (
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
                <div>
                    <button id="rock" className="btn">바위</button>
                    <button id="scissors" className="btn">가위</button>
                    <button id="paper" className="btn">보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;