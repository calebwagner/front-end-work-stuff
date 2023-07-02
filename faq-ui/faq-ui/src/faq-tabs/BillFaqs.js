import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../assets/chevron-down.svg";
import styles from "../styles/styles.module.css";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function BillFaqs() {
  return (
    <div>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="#3 What is Lorem Ipsum?">
            #3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Where does it come from?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
