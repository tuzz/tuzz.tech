const setClass = (element, klass, bool) => {
  if (!element) return;

  const list = element.classList;
  const hasClass = list.contains(klass);

  if (bool && !hasClass) list.add(klass);
  if (!bool && hasClass) list.remove(klass);
}

export default setClass;
