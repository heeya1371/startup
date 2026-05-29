var container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
var options = { 
    // 지도의 중심좌표를 영남이공대학교 주변 대략적인 좌표(대구)로 수정했습니다.
    center: new kakao.maps.LatLng(35.8345, 128.5831), 
    level: 3 // 지도의 레벨(확대, 축소 정도)
};

// 지도 생성 및 객체 리턴
var map = new kakao.maps.Map(container, options);