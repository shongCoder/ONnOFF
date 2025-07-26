import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header.jsx";
import IntroComponent01 from "../components/IntroComponent01.jsx";
import StrategyComponent from "../components/StrategyComponent.jsx";
import WhyComponent01 from "../components/WhyComponent01.jsx";
import ContactComponent from "../components/ContactComponent.jsx";
import SectionWrapper from "../components/common/SectionWrapper.jsx";
import ContactRight from "../layout/ContactRight.jsx";
import ContactBottom from "../layout/ContactBottom.jsx";
import IntroComponent02 from "../components/IntroComponent02.jsx";
import IntroComponent03 from "../components/IntroComponent03.jsx";
import WhyComponent02 from "../components/WhyComponent02.jsx";
import WhyComponent03 from "../components/WhyComponent03.jsx";
import WhyComponent04 from "../components/WhyComponent04.jsx";
import InteriorComponent01 from "../components/InteriorComponent01.jsx";
import InteriorComponent02 from "../components/InteriorComponent02.jsx";
import ProcedureComponent01 from "../components/ProcedureComponent01.jsx";
import ProcedureComponent02 from "../components/ProcedureComponent02.jsx";
import Footer from "../layout/Footer.jsx";

function HomePage() {
    const [activeId, setActiveId] = useState("intro");

    const sectionRefs = {
        intro: useRef(null),
        strategy: useRef(null),
        why: useRef(null),
        interior: useRef(null),
        procedure: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const intersectingEntries = entries.filter(entry => entry.isIntersecting);

                if (intersectingEntries.length > 0) {
                    // 뷰포트 상단에 가장 가까운 (top 값이 가장 작은) 요소를 찾습니다.
                    intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                    // 정렬 후 첫 번째 요소가 가장 위에 있는 요소입니다.
                    setActiveId(intersectingEntries[0].target.id);
                }
            },
            {
                rootMargin: "-70px 0px 0px 0px", // 헤더 높이만큼 상단 마진을 줍니다.
                threshold: 0.1 // 요소가 10%만 보여도 감지
            }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.offsetTop - 70; // 헤더 높이 고려
            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <Header activeId={activeId} scrollTo={scrollTo} />
            <ContactRight />
            <ContactBottom />
            {/*<div className="flex-col">*/}
                <div className="w-full mt-[4.375rem]">
                    <div id="intro" ref={sectionRefs.intro}>
                        <SectionWrapper><IntroComponent01 /></SectionWrapper>
                        <SectionWrapper><IntroComponent02 /></SectionWrapper>
                        <SectionWrapper><IntroComponent03 /></SectionWrapper>
                    </div>

                    <div id="strategy" ref={sectionRefs.strategy}>
                        <SectionWrapper><StrategyComponent /></SectionWrapper>
                    </div>

                    <div id="why" ref={sectionRefs.why}>
                        <SectionWrapper><WhyComponent01 scrollTo={scrollTo} /></SectionWrapper>
                        <SectionWrapper><WhyComponent02 /></SectionWrapper>
                        <SectionWrapper><WhyComponent03 /></SectionWrapper>
                        <SectionWrapper><WhyComponent04 /></SectionWrapper>
                    </div>

                    <div id="interior" ref={sectionRefs.interior}>
                        <SectionWrapper><InteriorComponent01 /></SectionWrapper>
                        <SectionWrapper><InteriorComponent02 /></SectionWrapper>
                    </div>

                    <div id="procedure" ref={sectionRefs.procedure}>
                        <SectionWrapper><ProcedureComponent01 /></SectionWrapper>
                        <SectionWrapper><ProcedureComponent02 /></SectionWrapper>
                    </div>

                    <div id="contact" ref={sectionRefs.contact}>
                        <SectionWrapper><ContactComponent /></SectionWrapper>
                    </div>
                {/*</div>*/}
                <Footer />
            </div>

        </>
    );
}

export default HomePage;
