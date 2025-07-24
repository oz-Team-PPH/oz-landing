// DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
    // 카드 요소들 선택
    const featureCards = document.querySelectorAll(".feature-card");

    // 카드 호버 효과
    featureCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-4px)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });

    // 스크롤 이벤트로 카드 애니메이션 (선택사항)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // 초기 카드 상태 설정 및 Observer 적용
    featureCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";

        // 지연된 애니메이션
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100 + index * 100);

        observer.observe(card);
    });
});
