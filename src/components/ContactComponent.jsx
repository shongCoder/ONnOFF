import React, {useState} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


function ContactComponent() {

    const [input, setInput] = useState("");
    const [isValid, setIsValid] = useState(false);

    React.useEffect(() => {
        loadCaptchaEnginge(5, "#EDEAFA"); // 5자리 보안문자 생성
    }, []);

    const handleCheck = () => {
        if (validateCaptcha(input)) {
            setIsValid(true);
            alert("✅ 인증 성공");
        } else {
            setIsValid(false);
            alert("❌ 인증 실패");
        }
    };

    return (
        <div className="w-full flex justify-center items-center bg-[url(/img/contact-page/back.png)] bg-cover">
            <div className="w-[1520px] h-[1080px] flex">
                <div className="flex-1 mr-4">
                    <div className="mt-[12.25rem]">
                        <img src="./img/contact-page/logo-white.svg" alt="logo" />
                        <h1 className="text-[3.875rem] font-extrabold text-white mt-[30px]">창업문의</h1>
                        <p className="text-[1.75rem] text-white font-medium mt-2">창업 상담 전문가가 빠르게 연락 드리겠습니.</p>
                    </div>
                    <div className="mt-[20.5rem] flex gap-5">
                        <div className="flex-1 h-[250px] bg-black/60 border-[2px] border-white rounded-[10px] pt-[30px] pl-[20px]">
                            <h2 className="text-[36px] font-extrabold text-white">전화상담</h2>
                            <h3 className="text-[28px] font-semibold text-white">02-3453-0708</h3>
                            <p className="font-semibold text-white mt-[40px]">평일 8시30분 ~ 17시30 상담 가능</p>
                        </div>
                        <div className="flex-1 h-[250px] bg-black/60 border-[2px] border-white rounded-[10px] pt-[30px] pl-[20px]">
                            <h2 className="text-[36px] font-extrabold text-white">창업설명회</h2>
                            <h3 className="text-[20px] font-semibold text-white leading-6">
                                서울특별시 송파구 충민로 10가든<br />
                                파이브 9층 S07호 (문정동)
                            </h3>
                            <p className="font-semibold text-white mt-[20px] leading-5">
                                평일 8시30분 ~ 17시30 방문 가능<br />
                                전화예약 필수
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="bg-white w-[700px] h-[880px] mt-[115px] rounded-[10px] pt-[40px] px-[50px]">
                        <div className="flex flex-col mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] font-extrabold">성함</span>
                            <input type="text" className="bg-on_purple_100/65 w-full px-[28px] pt-[19px] pb-[18px] rounded-[8px]" placeholder="이름을 입력해 주세요" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] font-extrabold">연락처</span>
                            <input type="text" className="bg-on_purple_100/65 w-full px-[28px] pt-[19px] pb-[18px] rounded-[8px]" placeholder="연락처를 입력해 주세요" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] font-extrabold">창업 희망지역</span>
                            <input type="text" className="bg-on_purple_100/65 w-full px-[28px] pt-[19px] pb-[18px] rounded-[8px]" placeholder="희망지역을 입력해 주세요" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] font-extrabold">창업 희망지역</span>
                            <input type="text" className="bg-on_purple_100/65 w-full px-[28px] pt-[19px] pb-[18px] rounded-[8px]" placeholder="희망지역을 입력해 주세요" />
                        </div>
                        <div className="flex gap-[35px] mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] font-extrabold">점포유무</span>
                            <div className="flex gap-10">
                                <label className="cursor-pointer flex gap-[7px]">
                                    <span className="font-extrabold text-[22px]">유</span>
                                    <input type="radio" name="exist" value="Y" className="peer hidden" />
                                    <div className="w-[30px] h-[30px] bg-on_purple_100/65 rounded-full peer-checked:ring-2 peer-checked:bg-on_purple_300" />
                                </label>
                                <label className="cursor-pointer flex gap-[7px]">
                                    <span className="font-extrabold text-[22px]">무</span>
                                    <input type="radio" name="exist" value="N" className="peer hidden" />
                                    <div className="w-[30px] h-[30px] bg-on_purple_100/65 rounded-full peer-checked:ring-2 peer-checked:bg-on_purple_300" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] font-extrabold">보안문자 입력</span>
                            <div className="flex items-center">
                                <div className="bg-on_purple_100/65 w-[200px] h-[50px] rounded-[8px] flex justify-center items-center"><LoadCanvasTemplate /></div>
                                <button
                                    type="button"
                                    onClick={() => loadCaptchaEnginge(5, "#EDEAFA", "black")}
                                    className="bg-[#A788F7] w-[30px] h-[30px] mx-6 rounded-[5px] flex justify-center items-center">

                                    <img src="./img/contact-page/reload.svg" className="w-[18px] h-[14px]" alt="Reload" />
                                </button>
                                <input type="text" onChange={(e) => setInput(e.target.value)} className="bg-on_purple_100/65 w-[300px] px-[28px] pt-[19px] pb-[18px] rounded-[8px]" placeholder="보안문자 입력" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className="ml-[10px] mb-[5px] text-[22px] text-center font-extrabold">개인정보취급방침</span>
                            <textarea className="bg-on_purple_100/65 rounded-[8px] w-full h-[90px]" />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-on_purple_300 rounded-[8px] w-[200px] h-[56px] text-white font-extrabold text-[28px]">문의하기</button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                #reload_href {
                    display: none !important;
                }
            `}</style>
        </div>
    );
}

export default ContactComponent;