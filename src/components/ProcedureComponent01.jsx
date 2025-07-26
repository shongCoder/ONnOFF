import React, {useRef} from "react";

function ProcedureComponent01() {
    const sectionRef = useRef(null);
    return (
        <div className="w-full pt-[7.5rem] pb-[8.125rem]" ref={sectionRef}>
            <div className="text-center mb-[1.875rem]">
                <h1 className="text-[3.875rem] font-extrabold text-[#5C2DBA]">투자비용</h1>
                <div className="mt-[3.125rem] flex items-center justify-center">
                    <img className="w-[1450px]" src="./img/procedure/sheet.png" />
                </div>
            </div>
        </div>
    );
}

export default ProcedureComponent01;