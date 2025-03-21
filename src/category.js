import GObject from "gi://GObject";

export const Category = GObject.registerClass(
  {
    GTypeName: "Category",
    Properties: {
      id: GObject.ParamSpec.int(
        "id",
        "Id",
        "Category Id",
        GObject.ParamFlags.READWRITE,
        0
      ),
      name: GObject.ParamSpec.string(
        "name",
        "Name",
        "Category Name",
        GObject.ParamFlags.READWRITE,
        ""
      ),
      hasChildren: GObject.ParamSpec.boolean(
        "hasChildren",
        "has_children",
        "Whether category has children",
        GObject.ParamFlags.READWRITE,
        false
      ),
      children: GObject.ParamSpec.jsobject(
        "children",
        "categoryChildren",
        "Category children",
        GObject.ParamFlags.READWRITE,
        []
      ),
    },
  },
  class Category extends GObject.Object {
    constructor({ id, name, hasChildren, children }) {
      super();
      this.id = id;
      this.name = name;
      this.hasChildren = hasChildren;
      this.children = children;
    }
  }
);
