import {useEffect, useRef, useState} from "react";

function WhyComponent04() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[95rem] pt-[13.43rem] pb-[13.25rem]" ref={sectionRef}>
                <div className="font-bold text-white mb-[15px] bg-[#A788F7] px-[9px] pt-[3px] pb-[6px] inline-block rounded-[50px]">REASON<span className="text-[1.3rem]">03.</span></div>
                <h1 ref={titleRef} className={`reason-title3 font-bold text-[3rem] ${animate ? 'animate3' : ''}`}>수익극대화를 위한 제안</h1>
                <div className="text-[1.75rem] mt-[50px] mb-[50px] font-medium">
                    온앤오프24 무인편의점은 상가의 입지조건, 창업자의 운영형태를 진지하게 상담하고 그에 맞는<br />
                    창업비용 및 영업방식을 제공함으로써 수익극대화를 추구합니다. 또한 대기업 편의점과는 달리 수익을<br />
                    나누지 않고, 소정의 수수료만을 청구하여 운영 부담을 줄였습니다.
                </div>
                <div className="flex justify-center items-center">
                    <img src="./img/why/report.png" className="w-[90rem]" alt="" />
                </div>
            </div>
            <style>{`
                .reason-title3 {
                    position: relative;
                    z-index: 1;
                }
                .reason-title3:after {
                    content: "";
                    position: absolute;
                    top: 80%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 0;
                    height: 25px;
                    background-color: #BFA7FF;
                    z-index: -1;
                    transition: width 1s ease-in-out;
                }
                .reason-title3.animate3:after {
                    width: 460px;
                }
            `}</style>
        </div>
    );
}

export default WhyComponent04;