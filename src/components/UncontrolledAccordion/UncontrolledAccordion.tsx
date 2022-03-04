import { useReducer } from 'react';
import { reducer } from './reducer';

type UncontrolledAccordionPropsType = { title: string };

type UncontrolledAccordionTitlePropsType = {
  title: string;
  onClickCallback: () => void;
};

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
  console.log('RENDERED UncontrolledAccordion');

  const [state, dispatch] = useReducer(reducer, { isCollapsed: false });

  return (
    <div>
      <UncontrolledAccordionTitle
        title={props.title}
        onClickCallback={() => dispatch('TOGGLE_IS_COLLAPSED')}
      />
      {!state.isCollapsed && <UncontrolledAccordionBody />}
    </div>
  );
}

function UncontrolledAccordionTitle(
  props: UncontrolledAccordionTitlePropsType
) {
  console.log('RENDERED UncontrolledAccordionTitle');
  return <h3 onClick={props.onClickCallback}>{props.title}</h3>;
}

function UncontrolledAccordionBody() {
  console.log('RENDERED UncontrolledAccordionBody');
  return (
    <div>
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
    </div>
  );
}

export default UncontrolledAccordion;
