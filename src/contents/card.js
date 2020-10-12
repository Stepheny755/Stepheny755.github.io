import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Card />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      expanded: false,
    }
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded(){
    this.setState({ expanded:!this.state.expanded, });
  }
  render(){
    const card_variants={
      open: { opacity: 1, height: "auto" },
      collapsed: { opacity: 0, height: 0 }
    }
    return (
      <div className = "b accordion" onClick={() => this.toggleExpanded()}>
        {this.props.title}

        <AnimatePresence>
          {this.state.expanded && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={card_variants}
              transition={{ duration: 0.5}}//, //ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {this.props.content}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    );
  }
}

export default Card
