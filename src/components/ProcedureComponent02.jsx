import React, {useRef} from "react";

function ProcedureComponent02() {
    const sectionRef = useRef(null);
    return (
        <div className="w-full pt-[7.5rem] pb-[8.125rem]" ref={sectionRef}>
            <div className="text-center mb-[3.125rem]">
                <h1 className="text-[3.875rem] font-extrabold text-[#5C2DBA]">창업절차</h1>
                <h2 className="text-[1.75rem] font-medium">
                    온앤오프24 무인편의점은 예비창업자분들에게 가족창업이라는 마음으로 성심성의껏<br />
                    최선을 다하여 설명드리며 최상을 선택하시도록 제안드리겠습니다
                </h2>
            </div>
            <div className="flex items-center justify-center mr-[-12px]">
                <img className="w-[1027px]" src="./img/procedure/procedure.png" />
            </div>
        </div>
    );
}

export default ProcedureComponent02;