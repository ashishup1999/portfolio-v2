const useMainLayout = () => {
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
