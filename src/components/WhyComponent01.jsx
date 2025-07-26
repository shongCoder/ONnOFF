import {useRef} from "react";

function WhyComponent01({ scrollTo }) {
    const sectionRef = useRef(null);
    return (
        <>
            <div className="w-full text-white h-[700px] bg-[url(/img/why/back.png)] bg-cover" ref={sectionRef}>
                <div className="flex flex-col justify-center items-center w-full pt-[9rem]">
                    <div className="text-[3.875rem] font-extrabold mb-[10px]"><span className="text-[#A788F7]">WHY</span> 온앤오프24?</div>
                    <div className="text-[3rem] font-medium mb-[50px]"><a>온앤오프24와 함께라면 안심하셔도 됩니다.</a></div>
                    <div className="w-[50%] flex items-center gap-4 mb-[12px]" onClick={() => scrollTo('why')}>
                        <div className="flex justify-center items-center font-bold text-white bg-[#A788F7] h-[36px] w-[140px] text-center rounded-[50px]">
                            REASON<span className="text-[1.3rem] ml-[2px]">01.</span>
                        </div>
                        <p className="text-[2.25rem]">본사는 안정적인 무인시스템을 지원합니다</p>
                    </div>
                    <div className="w-[50%] flex items-center gap-4 mb-[12px]" onClick={() => scrollTo('why')}>
                        <div className="flex justify-center items-center font-bold text-white bg-[#A788F7] h-[36px] w-[140px] text-center rounded-[50px]">
                            REASON<span className="text-[1.3rem] ml-[2px]">02.</span>
                        </div>
                        <p className="text-[2.25rem]">경쟁력있는 상품을 공급합니다</p>
                    </div>
                    <div className="w-[50%] flex items-center gap-4" onClick={() => scrollTo('why')}>
                        <div className="flex justify-center items-center font-bold text-white bg-[#A788F7] h-[36px] w-[140px] text-center rounded-[50px]">
                            REASON<span className="text-[1.3rem] ml-[2px]">03.</span>
                        </div>
                        <p className="text-[2.25rem]">수익극대화를 위해 제안합니다</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default WhyComponent01;