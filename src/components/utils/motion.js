export const container = () =>  ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  });

 export const item = (delay) =>  ({
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay,
      },
    },
  })

 export const itemUp = (delay) =>  ({
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay,
      },
    },
  })

  export const image = (x) => ({
    hidden: {
      opacity: 0,
      x,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
      }
    },
   
  })

  export const navStr = () => ({
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        stiffness: 1,
        type: "spring",e
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
      }
    },
   
  })

  export const set= {
    initial:"hidden",
    whileInView:"show",
    viewport: {once: true}
  }