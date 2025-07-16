import { useEffect, useRef, useState } from "react";

function SectionWrapper({ id, children, sectionRef }) {
    const localRef = useRef(null);
    const [triggerKey, setTriggerKey] = useState(0);

    useEffect(() => {
        const ref = localRef.current;
        if (!ref) return;

        let wasIntersecting = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !wasIntersecting) {
                    setTriggerKey(prev => prev + 1); // 새로운 키로 리렌더 → 애니메이션 재실행
                    wasIntersecting = true;
                } else if (!entry.isIntersecting) {
                    wasIntersecting = false; // 다시 감지할 준비
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -120px 0px", // 감지 위치 조정 (하단 기준)
            }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                key={triggerKey}
                id={id}
                ref={(el) => {
                    localRef.current = el;
                    if (sectionRef) sectionRef.current = el;
                }}
                className="w-full scroll-mt-[4.375rem] animate-fadeInUp transition-all duration-700"
            >
                {children}
            </section>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(200px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.7s ease both;
                }
            `}</style>
        </>
    );
}

export default SectionWrapper;
