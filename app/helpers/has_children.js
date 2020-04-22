// https://github.com/fernandopasik/react-children-utilities/blob/master/src/lib/hasChildren.ts

const hasChildren = (element) => (
  isValidElement(element) && Boolean(element.props.children)
)

export default hasChildren;
