function showElementAnimation() {

	var element = document.getElementsByClassName('fadeIn');
	if(!element) return; // 要素がなかったら処理をキャンセル
						
	var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
	var scrollY = window.pageYOffset; //スクロール量を取得
	var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
					  
	for(var i=0;i<element.length;i++) { 
	  var elemClientRect = element[i].getBoundingClientRect(); 
	  var elemY = scrollY + elemClientRect.top; 
	  if(scrollY + windowH - showTiming > elemY) {
		element[i].classList.add('scrollin');
	  } else if(scrollY + windowH < elemY) {
	  // 上にスクロールして再度非表示にする場合はこちらを記述
		element[i].classList.remove('scrollin');
	  }
	}
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);


$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});



