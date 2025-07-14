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
    );
}

export default SectionWrapper;