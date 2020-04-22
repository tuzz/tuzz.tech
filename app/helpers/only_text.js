// https://github.com/fernandopasik/react-children-utilities/blob/master/src/lib/onlyText.ts

import hasChildren from "./has_children";

const childToString = (child) => {
  if (typeof child === "undefined" || child === null || typeof child === "boolean") {
    return "";
  }

  return child.toString();
};

const onlyText = (children) => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children);
  }

  return Children.toArray(children).reduce((text, child) => {
    let newText;

    if (isValidElement(child) && hasChildren(child)) {
      newText = onlyText(child.props.children);
    } else {
      newText = childToString(child);
    }

    return text.concat(newText);
  }, "");
};

export default onlyText;
