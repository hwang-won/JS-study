import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 상품 상세 페이지
function ThingDetail(props) {

    let { id } = useParams();
    let detailThing = props.machine.find((x) => x.id == id );
    let [alert, setAlert] = useState(true);

    useEffect(()=> {
        setTimeout(()=>{ setAlert(false); }, 20000)
    })

    return (
        <div>
            {
                alert == true ? 
                <div className="coupon"> 20% 쿠폰 확인 </div>
                : null
            }
            <img src={'https://www.yanmar.com/ltc/kr/agri/img/' + detailThing.code + '.jpg'} width="70%"></img>
            <div className="main_products_things_detail_content">
                <h5>{ detailThing.title }</h5>
                <p>{ detailThing.content }</p>
                <p>{ detailThing.price }원</p>
            <button className="rentBt"> 임대하기 </button>
            </div>
        </div>
    )
}

export default ThingDetail;
