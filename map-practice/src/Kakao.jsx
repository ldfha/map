import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Modal from 'react-modal';
const { kakao } = window;

export default function Kakao() {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.375, 126.631944), //지도의 중심좌표.
            level: 4
            //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options);
        map.setMaxLevel(4);
        // const markerPosition = new kakao.maps.LatLng(37.375, 126.631944);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            // position: markerPosition,
            clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });
        marker.setMap(map);
        // 마커가 드래그 가능하도록 설정합니다 
        marker.setDraggable(true);

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다 
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);            // 마커 위치를 클릭한 위치로 옮깁니다


        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            // infowindow.open(map, marker);
        });
    }, [])


    return (
        <main className="flex-1 p-4">
            <div className="h-full bg-gray-100 rounded-lg shadow-inner">
                <Header />
                <div id="map" style={{
                    width: '390px',
                    height: '740px'
                }}></div>
                <Footer />
            </div>
        </main>


    );
}