import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

// 상품 상세 페이지
function ThingDetail(props) {

    let { id } = useParams();
    let detailThing = props.machine.find((x) => x.id == id );
    let [alert, setAlert] = useState(true);
    let [탭, 탭변경] = useState(0);
    let [fade1, setFade1] = useState('');

    useEffect(()=> {
        let a = setTimeout(()=>{ }, 2000);
        return ()=> {
            clearTimeout(a);
        }
    }, [])

    useEffect(()=>{
        setFade1('end');
    return ()=>{
        setFade1('');
    }}, [])

    return (
        <div className={'container start ' + fade1}>
            {
                alert == true ? 
                <div className="coupon"> 수수료 쿠폰 확인 </div>
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={detailThing.img} width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ detailThing.title }</h4>
                    <p>{ detailThing.content }</p>
                    <p>{ detailThing.price }원</p>
                    <button className="btn btn-danger"> 임대하기 </button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭 = {탭}></TabContent>
        </div>
    )
}

function TabContent({탭}){
    let [fade, setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100);
    return ()=>{
        setFade('');
    }
    }, [탭])

    return (
        <div className={'start ' + fade}>
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
        </div>
    )
}

export default ThingDetail;
