import { useState } from "react";

type UncontrolledAccordionPropsType = { title: string };

type UncontrolledAccordionTitlePropsType = {
  title: string;
  onClickCallback: () => void;
};

type UncontrolledAccordionBodyProps = {
  collapsed: boolean;
};

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <UncontrolledAccordionTitle
        title={props.title}
        onClickCallback={() => setCollapsed(!collapsed)}
      />
      <UncontrolledAccordionBody collapsed={collapsed} />
    </div>
  );
}

function UncontrolledAccordionTitle(
  props: UncontrolledAccordionTitlePropsType
) {
  return <h3 onClick={props.onClickCallback}>{props.title}</h3>;
}

function UncontrolledAccordionBody(props: UncontrolledAccordionBodyProps) {
  return (
    <div>
      {!props.collapsed && (
        <ul>
          <li>
            <a href="#1">1</a>
          </li>
          <li>
            <a href="#2">2</a>
          </li>
          <li>
            <a href="#3">3</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UncontrolledAccordion;
