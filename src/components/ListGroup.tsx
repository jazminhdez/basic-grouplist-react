import { Fragment, useState } from "react";
import { Group } from "../models/Group";

function ListGroup({ heading, items, onSelectItem }: Group) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
