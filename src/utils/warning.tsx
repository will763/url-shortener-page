
export function warning(input:HTMLInputElement,span:HTMLSpanElement){
    const handleShow = () => {
        if(span)
        span.style.display = "block"
      }

      const handleFaded = () => {
        if(span)
        span.style.display = "none"
      }

      input?.addEventListener("focus",handleShow)
      input?.addEventListener("blur",handleFaded)

      return () => {
        input?.removeEventListener("focus",handleShow) 
        input?.removeEventListener("blur",handleFaded)
      }
}