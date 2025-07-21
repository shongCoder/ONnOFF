import React, { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp.js';

function IntroComponent02() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // 💡 여기서 각각 따로 호출!
    const count1 = useCountUp(26, visible, 1000);
    const count2 = useCountUp(22, visible, 1000);
    const count3 = useCountUp(7, visible, 1000);
    const count4 = useCountUp(1, visible, 1000);
    const count5 = useCountUp(200, visible, 1000);

    return (
        <>
            <div className="w-full pt-[7.5rem] pb-[8.125rem]" ref={sectionRef}>
                <div className="text-center mb-[3.125rem]">
                    <h1 className="text-[3.875rem] font-extrabold text-[#5C2DBA]">무인편의점 "창업"</h1>
                    <h2 className="text-[3rem] font-medium">온앤오프24와 함께라면 안심하셔도 됩니다</h2>
                </div>
                <div className="flex gap-[1.875rem] justify-center w-full">
                    <div className="circle-1 flex flex-col items-center justify-center">
                        <h3 className="text-[2.375rem] font-extrabold">운영경력</h3>
                        <p className="text-[5rem] font-extrabold text-[#5C2DBA]">{count1}<span className="text-[3.5rem]">년</span></p>
                        <p className="text-[#5E5E73] text-[1.375rem] mt-[-1rem]">편의점 프렌차이즈</p>
                    </div>
                    <div className="circle-2 flex flex-col items-center justify-center">
                        <h3 className="text-[2rem] font-extrabold leading-10">
                            무인편의점<br/>
                            운영경력
                        </h3>
                        <p className="text-[4rem] font-extrabold text-[#5C2DBA]">
                            {count2}<span className="text-[3rem]">년</span>
                            {count3}<span className="text-[3rem]">월</span>
                        </p>
                        <p className="text-[#5E5E73] text-[1.375rem] mt-[-0.5rem] leading-7">
                            무인편의점<br />
                            업계 최초 시작일
                        </p>
                    </div>
                    <div className="circle-1 flex flex-col items-center justify-center">
                        <h3 className="text-[2rem] font-extrabold leading-10">
                            도난발생<br/>
                            보상 건 수
                        </h3>
                        <p className="text-[5rem] font-extrabold text-[#5C2DBA]">{count4}<span className="text-[3.5rem]">건</span></p>
                        <p className="text-[#5E5E73] text-[1.375rem] mt-[-1rem]">현재까지</p>
                    </div>
                    <div className="circle-2 flex flex-col items-center justify-center">
                        <h3 className="text-[2.375rem] font-extrabold">전국 가맹점</h3>
                        <p className="text-[5rem] font-extrabold text-[#5C2DBA]">{count5}<span className="text-[2.5rem]">여점포</span></p>
                        <p className="text-[#5E5E73] text-[1.375rem] mt-[-0.5rem] leading-7">
                            물류회원점<br />
                            포함
                        </p>
                    </div>
                </div>

            </div>
            <style>{`
                .circle-1, .circle-2 {
                    width: 17.5rem;
                    height: 17.5rem;
                    border-radius: 50%;
                    text-align: center;
                }
                .circle-1 {
                    border: 5px solid #A788F7
                }
                .circle-2 {
                    background-color: #EAE5FF
                }
            `}</style>
        </>

    );
}

export default IntroComponent02;