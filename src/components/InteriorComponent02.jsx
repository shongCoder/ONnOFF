import {useRef} from "react";

function InteriorComponent01() {
    const sectionRef = useRef(null);

    return (
        <div className="w-full h-[600px] bg-[url('/img/interior/benefit.png')] bg-cover bg-center" ref={sectionRef}>

        </div>
    );
}

export default InteriorComponent01;