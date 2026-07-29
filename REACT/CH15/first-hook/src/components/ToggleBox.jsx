import useToggle from "../hooks/useToggle";

function ToggleBox(){
    const [isOpen, toggleOpen] = useToggle(false);
    return(
        <div className="demo">
            <div className="button-row">
                <button type="button" className="primary" onClick={() => toggleOpen()}>{isOpen ? "펼치기" : "접기"}</button>
            </div>

            {
               isOpen &&(
                <p className="hint">
                    이 열림/닫힘 값은 useToggle커스텀 훅이 가져오고 있습니다. 동일 혹을 메뉴, 모달, 열림창에서 사용 가능합니다.
                </p>
               )     
            }

        </div>
    )
}

export default ToggleBox;