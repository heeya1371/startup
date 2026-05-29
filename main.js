// =================================================================
// 1. 카카오 지도 API 안전하게 수동 로드하기
// =================================================================
// index.html에서 &autoload=false를 설정했기 때문에 load() 함수를 써야 안전합니다.
kakao.maps.load(function() {
    
    // 지도를 표시할 HTML 요소(디브) 가져오기
    var container = document.getElementById('map'); 
    
    // 지도의 중심좌표 설정 (대구 영남이공대학교 주변 좌표)
    var options = { 
        center: new kakao.maps.LatLng(35.8345, 128.5831), 
        level: 3 // 확대 레벨 (숫자가 작을수록 확대)
    };

    // 실제 지도 객체 생성 및 화면 렌더링
    var map = new kakao.maps.Map(container, options); 
    
    console.log("카카오 지도가 성공적으로 로드되었습니다.");

    
});
