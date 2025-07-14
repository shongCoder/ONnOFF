import logo from "../assets/logo.svg";

function Header({ activeId }) {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.offsetTop - 70; // 헤더 높이 고려
            window.scrollTo({
                top: y,
                behavior: "smooth", // "auto"로 바꾸면 즉시 이동
            });
        }
    };

    return (
        <>
            <div className="w-full h-[4.375rem] bg-white flex justify-center border-b border-on_purple_300 fixed z-50">
                <div className="w-[95rem] flex justify-between">
                    <div>
                        <img src={logo} alt="logo" className="mt-3" />
                    </div>
                    <div className="mt-[2.1875rem]">
                        <ul className="gnb-menu flex gap-10 text-on_black font-bold text-[1.125rem]">
                            <li className={activeId === 'intro' ? 'active' : ''}>
                                <button onClick={() => scrollTo('intro')}>온앤오프24 소개</button>
                            </li>
                            <li className={activeId === 'strategy' ? 'active' : ''}>
                                <button onClick={() => scrollTo('strategy')}>성공전략</button>
                            </li>
                            <li className={activeId === 'why' ? 'active' : ''}>
                                <button onClick={() => scrollTo('why')}>
                                    <span className="text-on_purple_300">WHY</span> 온앤오프24
                                </button>
                            </li>
                            <li className={activeId === 'interior' ? 'active' : ''}>
                                <button onClick={() => scrollTo('interior')}>인테리어</button>
                            </li>
                            <li className={activeId === 'procedure' ? 'active' : ''}>
                                <button onClick={() => scrollTo('procedure')}>창업비용·절차</button>
                            </li>
                            <li className={activeId === 'contact' ? 'active' : ''}>
                                <button onClick={() => scrollTo('contact')}>창업문의</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
        .gnb-menu li {
          position: relative;
        }
        .gnb-menu li.active::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.5rem;
          width: 100%;
          height: 5px;
          background-color: #8438E4;
        }
        .gnb-menu button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
        </>
    );
}

export default Header;