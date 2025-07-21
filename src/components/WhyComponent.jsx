import {useRef} from "react";

function WhyComponent() {
    const sectionRef = useRef(null);
    return (
        <>
            <div className="w-full h-[700px] bg-[url(/img/why/back.svg)] bg-fit" ref={sectionRef}>
            </div>
        </>
    );
}

export default WhyComponent;