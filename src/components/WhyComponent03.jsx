import {useState, useRef, useEffect} from "react";

function WhyComponent03() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const [selectedMenu, setSelectedMenu] = useState(1);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [animate, setAnimate] = useState(false);

    const menuArray = [
        { id: 1, before: "", colored: "신상품 및 행사상품", after: "의 신속한 도입"},
        { id: 2, before: "매 달 소비자 가격 인하 행사 실시 ", colored: "1+1, 2+1", after: ""},
        { id: 3, before: "성인인증 무인 장비 운영 ", colored: "담배, 주류 판매 가능", after: ""},
        { id: 4, before: "다양한 부가 서비스 장비 운영 ", colored: "커피기계, 라조기 등", after: ""},
        { id: 5, before: "다양한 생활 서비스 장비 운영 ", colored: "택배, 교통카드, 복권 등", after: ""}
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
        <div className="w-full flex items-center justify-center bg-on_purple_100">
            <div className="w-[95rem] pt-[13.43rem] pb-[13.25rem] flex justify-between" ref={sectionRef}>
                <div className="flex-1 mt-6">
                    <div className="font-bold text-white mb-[15px] bg-[#A788F7] px-[9px] pt-[3px] pb-[6px] inline-block rounded-[50px]">REASON<span className="text-[1.3rem]">02.</span></div>
                    <h1 ref={titleRef} className={`reason-title2 font-bold text-[3rem] ${animate ? 'animate2' : ''}`}>경쟁력 있는 상품 공급</h1>
                    <div className="text-[1.75rem] mt-[50px] mb-[60px] font-medium">
                        온앤오프24 무인편의점은 독립(개인)편의점 업계 중 물류센터를
                        운영하여{' '}
                        <span className="relative inline-block">
                            <span className="absolute inset-y-0 top-5 left-0 w-[136px] h-[23px] bg-[#BFA7FF] z-10"></span>
                            <span className="relative z-10">주류를 포함하여</span>
                        </span>
                        {' '}상온제품 3500개, 도시락을 포함하여
                        냉동냉장 상품 800개를 갖추고 있으며, 권장발주 시스템을 운영
                        하여 판매 극대화를 추구합니다
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
                    <img className="w-[42rem]" src={`./img/why/detail2/${selectedMenu}.png`} alt="" />
                </div>
            </div>
            <style>{`
                .reason-title2 {
                    position: relative;
                    z-index: 1;
                }
                .reason-title2:after {
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
                .reason-title2.animate2:after {
                    width: 430px;
                }
            `}</style>
        </div>
    );
}

export default WhyComponent03;