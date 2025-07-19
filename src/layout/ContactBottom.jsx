import {useState} from "react";

function ContactBottom() {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        area: '',
        agree: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <>
            <div className="w-full h-20 z-10 fixed bottom-0 flex justify-center items-center bg-on_purple_400">
                <div className="w-[95rem] flex justify-between">
                    <div>
                        <img src="./img/contact-bottom/title.svg" />
                    </div>
                    <div className="flex">
                        <div className="flex gap-[0.625rem]">
                            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="이름" />
                            <input name="tel" value={formData.tel} onChange={handleChange} type="text" placeholder="연락처" />
                            <input name="area" value={formData.area} onChange={handleChange} type="text" placeholder="희망지역" />
                        </div>
                        <div className="ml-[0.625rem]">
                            <div className="flex items-center">
                                <label htmlFor="agree">
                                    <p className="font-extrabold text-[1.25rem] text-white">약관동의</p>
                                </label>
                                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} id="agree" className="ml-4 w-5 h-5 rounded-[2px]" />

                            </div>
                            <p className="font-extrabold text-[0.815rem] text-white">(전문보기)</p>
                        </div>
                        <button className="bg-[#DEC4FF] text-[#1F0047] font-extrabold w-[12.5rem] h-[3.125rem] rounded-[50px] ml-[1.375rem]">
                            문의하기
                        </button>
                    </div>

                </div>

            </div>
            <style>{`
                input {
                    width: 200px;
                    height: 50px;
                    border-radius: 10px;
                    padding-left: 10px;
                }
            `}</style>
        </>
    );
}

export default ContactBottom