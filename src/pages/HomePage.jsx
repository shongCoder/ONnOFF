import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header.jsx";
import IntroComponent01 from "../components/IntroComponent01.jsx";
import StrategyComponent from "../components/StrategyComponent.jsx";
import WhyComponent from "../components/WhyComponent.jsx";
import InteriorComponent from "../components/InteriorComponent.jsx";
import ProcedureComponent from "../components/ProcedureComponent.jsx";
import ContactComponent from "../components/ContactComponent.jsx";
import SectionWrapper from "../components/common/SectionWrapper.jsx";
import ContactRight from "../layout/ContactRight.jsx";
import ContactBottom from "../layout/ContactBottom.jsx";
import IntroComponent02 from "../components/IntroComponent02.jsx";

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
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        console.log("✅ 보여짐:", entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.5 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header activeId={activeId} />
            <ContactRight />
            <ContactBottom />
            <div className="w-full mt-[4.375rem]">
                <SectionWrapper id="intro" sectionRef={sectionRefs.intro}>
                    <IntroComponent01 />
                </SectionWrapper>
                <SectionWrapper sectionRef={sectionRefs.intro}>
                    <IntroComponent02 />
                </SectionWrapper>
                <SectionWrapper id="strategy" sectionRef={sectionRefs.strategy}>
                    <StrategyComponent />
                </SectionWrapper>
                <SectionWrapper id="why" sectionRef={sectionRefs.why}>
                    <WhyComponent />
                </SectionWrapper>
                <SectionWrapper id="interior" sectionRef={sectionRefs.interior}>
                    <InteriorComponent />
                </SectionWrapper>
                <SectionWrapper id="procedure" sectionRef={sectionRefs.procedure}>
                    <ProcedureComponent />
                </SectionWrapper>
                <SectionWrapper id="contact" sectionRef={sectionRefs.contact}>
                    <ContactComponent />
                </SectionWrapper>
            </div>
        </>
    );
}

export default HomePage;