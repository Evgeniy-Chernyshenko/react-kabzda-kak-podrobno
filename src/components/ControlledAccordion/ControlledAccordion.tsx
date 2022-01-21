type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  onClickCallback: () => void;
};

type AccordionTitlePropsType = { title: string; onClickCallback: () => void };

function ControlledAccordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.title}
        onClickCallback={props.onClickCallback}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onClickCallback}>{props.title}</h3>;
}

function AccordionBody() {
  return (
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
  );
}

export default ControlledAccordion;
