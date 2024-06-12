import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useMainLayout = () => {
  const pathName = usePathname().slice(1);

  useEffect(() => {
    if (pathName) {
      onClick({ currentTarget: { id: pathName } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = (e: any) => {
    const list = document.querySelectorAll("#menu>li");
    list.forEach((ele: Element) => {
      ele.classList.remove("checked");
    });
    const ele = document.getElementById(e?.currentTarget?.id);
    ele?.classList.add("checked");
  };
  return { onClick };
};

export default useMainLayout;
