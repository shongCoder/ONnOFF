import {useEffect, useRef, useState} from "react";

function SectionWrapper({ id, children, sectionRef }) {
    const localRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ref = localRef.current;
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(ref);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                id={id}
                ref={(el) => {
                    localRef.current = el;
                    if (sectionRef) sectionRef.current = el;
                }}
                className={`w-full scroll-mt-[4.375rem] transition-opacity duration-700 ${
                    isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
            >
                {children}
            </section>
            <style>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(200px); /* ⬅ 여기 숫자 늘리면 더 아래에서 시작됨 */
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
            `}</style>
        </>

    );
}

export default SectionWrapper;