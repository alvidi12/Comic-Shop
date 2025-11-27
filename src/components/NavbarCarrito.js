import { useRef, useEffect } from "react";
import * as bootstrap from "bootstrap";

export default function useNavbarCarritoLogic() {

  const offcanvasRef = useRef(null);
  const cartToggleRef = useRef(null);

  useEffect(() => {
    const offEl = offcanvasRef.current;
    if (!offEl) return;

    const offInstance = bootstrap.Offcanvas.getOrCreateInstance(offEl, {
      backdrop: false,
      scroll: true,
      keyboard: true,
    });

    const handler = (evt) => {
      if (!offEl.classList.contains("show")) return;

      if (offEl.contains(evt.target)) return;
      if (cartToggleRef.current?.contains(evt.target)) return;

      offInstance.hide();
    };

    document.addEventListener("pointerdown", handler);
    return () => {
      document.removeEventListener("pointerdown", handler);
      offInstance.hide();
    };
  }, []);

  return { offcanvasRef, cartToggleRef };
}
