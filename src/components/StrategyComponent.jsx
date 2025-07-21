import React, {useEffect, useRef, useState} from "react";

function StrategyComponent() {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    const [menu, setMenu] = useState("special");

    const handleClick = (type) => {
        setMenu(type);
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0;
        }
    };

    const imageBasePath = "./img/strategy/";

    const menuItem = {
        special: 5,
        conversion: 3,
        twojobs: 3,
        vacancy: 3,
    };

    const count = menuItem[menu] || 0;
    const imageWidth = 480; // w-[30rem] = 480px
    const gap = 40; // gap-10 = 2.5rem = 40px
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isScrollable = count > 3;

    useEffect(() => {
        if (scrollRef.current) {
            // 두 프레임 뒤에 실행
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const container = scrollRef.current;
                    const offset = (container.scrollWidth - container.clientWidth) / 2;
                    container.scrollLeft = offset > 0 ? offset : 0;
                }, 0);
            });
        }
    }, [menu]);

    const handleScroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = imageWidth + gap;
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const onMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // 드래그 민감도
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUpOrLeave = () => {
        isDragging.current = false;
    };

    const elements = isScrollable
        ? [
            // 왼쪽 여백
            <div
                key="spacer-left"
                className="shrink-0"
                style={{
                    width: `${(scrollRef.current?.clientWidth || 1740) / 2 - imageWidth / 2}px`,
                }}
            />,
            // 이미지 요소
            ...Array.from({ length: count }, (_, i) => (
                <div key={i} className="w-[30rem] h-[35.625rem] shrink-0">
                    <img
                        src={`${imageBasePath}${menu}/${i + 1}.png`}
                        alt={`${menu} 이미지 ${i + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            )),
            // 오른쪽 여백
            <div
                key="spacer-right"
                className="shrink-0"
                style={{
                    width: `${(scrollRef.current?.clientWidth || 1740) / 2 - imageWidth / 2}px`,
                }}
            />,
        ]
        : // 👇 스크롤 안 쓰고 그냥 flex로 가운데 정렬용
        Array.from({ length: count }, (_, i) => (
            <div key={i} className="w-[30rem] h-[35.625rem]">
                <img
                    src={`${imageBasePath}${menu}/${i + 1}.png`}
                    alt={`${menu} 이미지 ${i + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>
        ));


    //special, conversion, twojobs, vacancy
    return (
        <>
            <div className="w-full pt-[7.5rem] pb-[8.125rem] bg-[url(/img/strategy/back.svg)] bg-contain bg-no-repeat" ref={sectionRef}>
                <div className="text-center mb-[3.125rem]">
                    <h1 className="text-[3.875rem] font-extrabold">성공전략</h1>
                </div>

                <div className="flex gap-5 w-full justify-center mb-[3.125rem] text-[1.75rem] font-extrabold text-on_purple_400">
                    {["special", "conversion", "twojobs", "vacancy"].map((type) => (
                        <button
                            key={type}
                            className={`button_style ${menu === type ? "checked_button_style" : ""}`}
                            onClick={() => handleClick(type)}
                        >
                            {{
                                special: "특수상권점포",
                                conversion: "전환점포",
                                twojobs: "투잡점포",
                                vacancy: "신축/공실점포",
                            }[type]}
                        </button>
                    ))}
                </div>

                <div className="relative w-full">
                    {/* 좌우 버튼 */}
                    {isScrollable && (
                        <>
                            <button
                                onClick={() => handleScroll("left")}
                                className="absolute left-[13.75rem] top-1/2 -translate-y-1/2 z-10"
                            >
                                <img src={`${imageBasePath}arrow-left.svg`} alt="왼쪽" />
                            </button>
                            <button
                                onClick={() => handleScroll("right")}
                                className="absolute right-[13.75rem] top-1/2 -translate-y-1/2 z-10"
                            >
                                <img src={`${imageBasePath}arrow-right.svg`} alt="오른쪽" />
                            </button>
                        </>
                    )}

                    <div
                        ref={scrollRef}
                        className={`px-12 scroll-smooth ${
                            isScrollable ? "overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing" : ""
                        }`}
                        onMouseDown={isScrollable ? onMouseDown : undefined}
                        onMouseMove={isScrollable ? onMouseMove : undefined}
                        onMouseUp={isScrollable ? onMouseUpOrLeave : undefined}
                        onMouseLeave={isScrollable ? onMouseUpOrLeave : undefined}
                    >
                        <div className={`flex gap-10 min-w-max ${!isScrollable ? "justify-center" : ""}`}>
                            {elements}
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
                        width: 220px;
                        height: 55px;
                        border-radius: 50px;
                    }
                    .checked_button_style {
                        background: #8438E4;
                        color: white;
                    }
                    
                    .no-scrollbar::-webkit-scrollbar {
                      display: none;
                    }
                    .no-scrollbar {
                      -ms-overflow-style: none;  /* IE and Edge */
                      scrollbar-width: none;     /* Firefox */
                    }
                `}
            </style>
        </>

    );
}

export default StrategyComponent;