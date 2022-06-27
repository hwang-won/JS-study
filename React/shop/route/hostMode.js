import axios from 'axios';

// 호스트 모드 페이지
function HostMode() {
    return (
        <div>
            <button className="rantalBt" onClick={()=>{
                axios.get('https://www.yanmar.com/kr/agri/').then((결과)=>{
                console.log(결과.data)
            })
            .catch(()=>{
                console.log('실패함')
            })
            }}>임대 등록</button>
        </div>
    )
}

export default HostMode;
