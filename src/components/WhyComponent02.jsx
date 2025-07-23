import {useState, useRef, useEffect} from "react";

function WhyComponent02() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const [selectedMenu, setSelectedMenu] = useState(1);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [animate, setAnimate] = useState(false);

    const menuArray = [
        { id: 1, before: "", colored: "도난방지", after: " POS시스템"},
        { id: 2, before: "도난 발생시 100% ", colored: "보상시스템", after: ""},
        { id: 3, before: "언제, 어디서든 확인 가능한 ", colored: "점포통합관리 시스템", after: ""},
        { id: 4, before: "점포상태를 확인하고 알려주는 ", colored: "알람 시스템", after: ""},
        { id: 5, before: "고객과 점주간에 워키토키방식의 ", colored: "상호 소통 시스템", after: ""}
    ]

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
            <div className="w-[95rem] pt-[13.43rem] pb-[13.25rem] flex justify-between" ref={sectionRef}>
                <div className="flex-1 mt-6">
                    <div className="font-bold text-white mb-[15px] bg-[#A788F7] px-[9px] pt-[3px] pb-[6px] inline-block rounded-[50px]">REASON<sapn className="text-[1.3rem]">01.</sapn></div>
                    <h1  ref={titleRef} className={`reason-title font-bold text-[3rem] ${animate ? 'animate' : ''}`}>안정적인 무인시스템 지원</h1>
                    <div className="text-[1.75rem] mt-[50px] mb-[60px] font-medium">
                        RFID 도난방지와 100% 손실 보상, 모바일 스마트 매장 관리,
                        상품 권장 발주, 술/담배 성인인증 키오스크, 긴급 알림 서비스 등
                        온앤오프24는 무인 운영에 꼭 필요한 핵심 기능을 모두 갖춘
                        스마트 무인 편의점입니다.
                    </div>
                    <div>
                        <ul className="text-[1.75rem]">
                            {menuArray.map(item => (
                                <li className="mb-2 flex items-center cursor-pointer group" key={item.id} onClick={() => setSelectedMenu(item.id)} onMouseEnter={() => setHoveredMenu(item.id)} onMouseLeave={() => setHoveredMenu(null)}>
                                    <img className="w-[30px] mr-[10px]" src={`./img/why/${selectedMenu === item.id || hoveredMenu === item.id ? 'checked' : 'unchecked'}.svg`} alt="" />
                                    <span className={`${selectedMenu === item.id ? 'font-bold' : ''} group-hover:font-bold`}>
                                        {item.before}<span className="text-on_purple_400 font-bold">{item.colored}</span>{item.after}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <img className="w-[42rem]" src={`./img/why/detail1/${selectedMenu}.png`} alt="" />
                </div>
            </div>
            <style>{`
                .reason-title {
                    position: relative;
                }
                .reason-title:after {
                    content: "";
                    position: absolute;
                    top: 80%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 0px;
                    height: 25px;
                    background-color: #BFA7FF;
                    z-index: -1; /* 텍스트 뒤로 보이게 */
                    transition: width 1s ease-in-out;
                }
                .reason-title.animate:after {
                    width: 510px;
                }
            `}</style>
        </div>
    );
}

export default WhyComponent02;