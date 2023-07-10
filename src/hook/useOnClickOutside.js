import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
        // console.log("event.target", event.target)
        // 클릭 시 모달 창 안이라면 그냥 return
        if(!ref.current || ref.current.contains(e.target)) {
            return;
        }
        handler();
    };
    // 모달 창 바깥을 클릭하면 Callback 함수를 호출하는 Event 등록
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref, handler])
    
}
