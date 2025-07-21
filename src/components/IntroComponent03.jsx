import React, {useRef, useState} from "react";

function IntroComponent03() {
    const sectionRef = useRef(null);
    const [menu, setMenu] = useState("rfid");

    const imageBasePath = "./img/info/";

    const handleClick = (type) => {
        setMenu(type);
    };

    return (
        <>
            <div className="w-full pt-[7.5rem] pb-[8.125rem]" ref={sectionRef}>
                <div className="text-center mb-[3.125rem]">
                    <h1 className="text-[3.875rem] font-extrabold">무인편의점 유형별 창업</h1>
                    <h2 className="text-[3rem] font-medium">온앤오프24와 함께라면 안심하셔도 됩니다</h2>
                </div>
                <div className="flex gap-5 w-full justify-center mb-[3.125rem] text-[2.25rem] font-extrabold text-on_purple_400">
                    <button
                        id="rfid"
                        className={`button_style ${menu === "rfid" ? "checked_button_style" : ""}`}
                        onClick={() => handleClick("rfid")}
                    >
                        RFID
                    </button>
                    <button
                        id="self"
                        className={`button_style ${menu === "self" ? "checked_button_style" : ""}`}
                        onClick={() => handleClick("self")}
                    >
                        SELF
                    </button>
                    <button
                        id="hybrid"
                        className={`button_style ${menu === "hybrid" ? "checked_button_style" : ""}`}
                        onClick={() => handleClick("hybrid")}
                    >
                        하이브리드
                    </button>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-10 w-[95rem] h-[430px]">
                        <div className="flex-1 h-full bg-gray-400">
                            <img src={`${imageBasePath}${menu}/1.png`} alt="" />
                        </div>
                        <div className="flex-1 h-full bg-gray-400">
                            <img src={`${imageBasePath}${menu}/2.png`} alt="" />
                        </div>
                        <div className="flex-1 h-full bg-gray-400">
                            <img src={`${imageBasePath}${menu}/3.png`} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <style>
                {`
                    .button_style {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 3px solid #8438E4;
                        background: white;
                        text-align: center;
                        width: 210px;
                        height: 50px;
                        border-radius: 50px;
                    }
                    .checked_button_style {
                        background: #8438E4;
                        color: white;
                    }
                `}
            </style>
        </>

    );
}

export default IntroComponent03;