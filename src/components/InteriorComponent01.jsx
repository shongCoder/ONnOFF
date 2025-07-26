import React, {useRef, useState} from "react";

function InteriorComponent01() {
    const sectionRef = useRef(null);
    const [selectedMenu, setSelectedMenu] = useState('pos');
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const menues = ['pos', 'counter', 'lunch', 'work_in_cooler', 'tasting', 'ice_cream', 'smoke', 'drink'];
    const menuNames = {
        pos: 'POS',
        counter: '카운터',
        lunch: '간편식',
        work_in_cooler: '워크인쿨러',
        tasting: '시식대',
        ice_cream: '아이스크림',
        smoke: '흡연부스',
        drink: '음료'
    };

    const handleClickMenu = (selected) => {
        setSelectedMenu(selected);
    };

    return (
        <div className="w-full pt-[7.5rem] pb-[8.125rem] bg-[url('/img/interior/back.svg')] bg-cover" ref={sectionRef}>
            <div className="text-center mb-[1.875rem]">
                <h1 className="text-[3.875rem] font-extrabold text-[#5C2DBA]">온앤오프24 점포 인테리어</h1>
                <h2 className="text-[1.75rem] font-medium">
                    온앤오프24 무인편의점은 소비자의 편안한 구매를 위하여<br />
                    최상의 동선 및 공간을 활용하고 점주님의 영업 활동에 적합한 장비 및 인테리어를<br />
                    제공함으로써 안락한 구매를 창출합니다
                </h2>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="flex-col">
                    <div className="w-[1000px] h-[650px] bg-gray-400 rounded-[15px] mb-[1.25rem]" style={{ backgroundImage: `url('./img/interior/${selectedMenu}.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-[1000px] grid grid-cols-4 gap-x-[15px] gap-y-[10px]">
                        {menues.map((menu) => (
                            <div
                                key={menu}
                                className="h-[100px] rounded-[5px] cursor-pointer relative"
                                style={{ backgroundImage: `url('./img/interior/${menu}.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                onClick={() => handleClickMenu(menu)}
                                onMouseEnter={() => setHoveredMenu(menu)}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                {(selectedMenu === menu || hoveredMenu === menu) && (
                                    <div className="absolute inset-0 bg-[#8438E4]/70 rounded-[5px] flex items-center justify-center">
                                        <span className="text-white font-bold text-[2rem]">{menuNames[menu]}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InteriorComponent01;