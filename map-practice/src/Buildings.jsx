import { useEffect } from "react";
import Header from "./Header";
import Modal from 'react-modal';
const { kakao } = window;
export default function Buildings() {
    useEffect(() => {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(37.375, 126.631944), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        map.setMaxLevel(4);

        // 마커를 표시할 위치와 title 객체 배열입니다 
        const positions = [
            {
                title: '대학 본부',
                latlng: new kakao.maps.LatLng(37.376817, 126.634737)
            },
            {
                title: '교수회관',
                latlng: new kakao.maps.LatLng(37.377427, 126.633865)
            },
            {
                title: '홍보관',
                latlng: new kakao.maps.LatLng(37.377158, 126.634194)
            },
            {
                title: '정보정산원',
                latlng: new kakao.maps.LatLng(37.376509, 126.635557)
            },
            {
                title: '자연과학대',
                latlng: new kakao.maps.LatLng(37.375608, 126.634738)
            },
            {
                title: '도서관',
                latlng: new kakao.maps.LatLng(37.374967, 126.634402)
            },
            {
                title: '정보기술대',
                latlng: new kakao.maps.LatLng(37.374505, 126.633637)
            },
            {
                title: '공과대학',
                latlng: new kakao.maps.LatLng(37.373727, 126.632636)
            },
            {
                title: '공동실험실습관',
                latlng: new kakao.maps.LatLng(37.372723, 126.633465)
            },
            {
                title: '게스트하우스',
                latlng: new kakao.maps.LatLng(37.372871, 126.631737)
            },
            {
                title: '복지회관',
                latlng: new kakao.maps.LatLng(37.374391, 126.631726)
            },
            {
                title: '컨벤션 센터',
                latlng: new kakao.maps.LatLng(37.375568, 126.632816)
            },
            {
                title: '사회과학대학/법과대학',
                latlng: new kakao.maps.LatLng(37.376189, 126.633355)
            },
            {
                title: '동북아경제통상대학/경영대학/물류대학원',
                latlng: new kakao.maps.LatLng(37.376568, 126.632848)
            },
            {
                title: '인문대학/어학원',
                latlng: new kakao.maps.LatLng(37.3754938, 126.631966)
            },
            {
                title: '예술체육대학',
                latlng: new kakao.maps.LatLng(37.374840, 126.631258)
            },
            {
                title: '학생회관',
                latlng: new kakao.maps.LatLng(37.374311, 126.630764)
            },
            {
                title: '기숙사',
                latlng: new kakao.maps.LatLng(37.373867, 126.629866)
            },
            {
                title: '국제교류단',
                latlng: new kakao.maps.LatLng(37.630285, 126.3746799)
            },
            {
                title: '스포츠센터',
                latlng: new kakao.maps.LatLng(37.3750609, 126.629680)
            },
            {
                title: '체육관',
                latlng: new kakao.maps.LatLng(37.3755944, 126.630292)
            },
            {
                title: '학군단',
                latlng: new kakao.maps.LatLng(37.375952, 126.630844)
            },
            {
                title: '공연장',
                latlng: new kakao.maps.LatLng(37.378047, 126.6325049)
            }

        ];


        for (let i = 0; i < positions.length; i++) {

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            });
        }
    })

    return (
        <div className="h-full bg-gray-100 rounded-lg shadow-inner">
            <Header />
            <div id="map" style={{
                width: '390px',
                height: '740px'
            }}></div>
        </div>
    )

}