function IntroComponent01() {
    return (
        <div className="w-full flex h-[930px]">
            <div className="w-[45%] h-full bg-[url('./img/info/circle.svg')] bg-no-repeat bg-right mr-[1.125rem]">

            </div>
            <div className="w-[55%] h-full bg-[#A788F7] flex items-center">
                <div className="w-[50rem] h-[28rem] bg-white ml-[1.5625rem]">
                    <img src="./img/info/movie.svg" />
                    {/*  영상 필요  */}
                </div>
            </div>
        </div>
    );
}

export default IntroComponent01;