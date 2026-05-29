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

    // =================================================================
    // 2. 외부 restaurants.json 데이터 fetch 및 마커 표시 (7월 계획서 스펙)
    // =================================================================
    var restaurantDataDiv = document.getElementById('restaurant-data');

    // 같은 폴더에 있는 json 파일을 비동기로 읽어옵니다.
    fetch('restaurants.json')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('JSON 데이터를 불러오는 데 실패했습니다.');
            }
            return response.json();
        })
        .then(function(data) {
            // 기존 로딩 문구나 빈 내용 지우기
            restaurantDataDiv.innerHTML = ''; 

            // 데이터 배열을 돌면서 리스트와 마커 생성
            data.forEach(function(place) {
                
                // (1) 우측 패널에 보여줄 맛집 HTML 리스트 아이템 생성
                var item = document.createElement('div');
                item.className = 'restaurant-item';
                item.innerHTML = 
                    '<h4>' + place.name + ' <span style="font-size:0.75rem; color:#e67e22;">[' + place.category + ']</span></h4>' +
                    '<p>📍 위치: ' + place.address + '</p>' +
                    '<p>📝 특징: ' + place.description + '</p>';
                restaurantDataDiv.appendChild(item);

                // (2) 해당 맛집 좌표로 카카오 지도 마커 생성
                var markerPosition = new kakao.maps.LatLng(place.lat, place.lng);
                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    map: map // 이 마커를 위에서 만든 지도 위에 표시
                });

                // (3) 인터랙션 기능: 리스트 아이템을 클릭하면 지도가 해당 위치로 부드럽게 이동
                item.addEventListener('click', function() {
                    map.panTo(markerPosition);
                });
                
                // 마커를 클릭했을 때도 지도가 중심을 잡도록 설정
                kakao.maps.event.addListener(marker, 'click', function() {
                    map.panTo(markerPosition);
                });
            });
        })
        .catch(function(error) {
            console.error(error);
            restaurantDataDiv.innerHTML = '<p style="color:red; text-align:center; padding:10px;">맛집 데이터를 가져오는 중 오류가 발생했습니다.</p>';
        });
});
