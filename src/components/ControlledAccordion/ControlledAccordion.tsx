import React from 'react';

type ItemType = {
  id: number;
  title: string;
};

export type AccordionPropsType = {
  title: string;
  items: ItemType[];
  collapsed: boolean;
  onTitleClickCallback: () => void;
  onItemClickCallback: (id: number) => void;
};

type AccordionTitlePropsType = {
  title: string;
  onTitleClickCallback: () => void;
};

type AccordionBodyPropsType = {
  items: ItemType[];
  onItemClickCallback: (id: number) => void;
};

function ControlledAccordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.title}
        onTitleClickCallback={props.onTitleClickCallback}
      />
      {!props.collapsed && (
        <AccordionBody
          onItemClickCallback={props.onItemClickCallback}
          items={props.items}
        />
      )}
    </div>
  );
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
  console.log('AccordionTitle');

  return <h3 onClick={props.onTitleClickCallback}>{props.title}</h3>;
});

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody');

  return (
    <ul>
      {props.items.map(({ id, title }) => (
        <li key={id} onClick={() => props.onItemClickCallback(id)}>
          {title}
        </li>
      ))}
    </ul>
  );
}

export default ControlledAccordion;
