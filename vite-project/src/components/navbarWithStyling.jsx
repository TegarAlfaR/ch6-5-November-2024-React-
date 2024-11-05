import styles from "./navbarWithStyling.module.css";
import About from "./about/About"
import HoverButton from "./button/HoverButton";
import { useState } from "react";

function NavbarWithStyling({menu, name, address, age}) {
  console.log(menu)
  let List
  // let Biodata = {}
  const [Biodata, setBiodata] = useState({})

  if(menu){
    List = (
      <ul>
        <li>
          <a href="">{menu[0]}</a>
        </li>
        <li>
          <a href="">{menu[1]}</a>
        </li>
        <li>
          <a href="">{menu[2]}</a>
        </li>
      </ul>
    );
  }else{
    List = (
      <h1>Menu didnt exist</h1>
    );
  }

  function handleTriggerSellect(selectedStudent) {
    console.log("ke trigger " + selectedStudent)
    setBiodata ({
      ...Biodata,
      name,
      age,
      address
    })
  }

  return (
    <>
      {/* modal component */}
      <div className={styles.overlay} onClick={""}>
        <div className={styles.modal}>
            {/* <button className={styles.closeButton} onClick={""}>
              &times;
            </button> */}
          <div className={styles.content}>
            Biodata : {Biodata.name} {Biodata.age} {Biodata.address}
          </div>
        </div>
      </div>
      {/* modal component */}

      <div className={styles.navbar}>
      <h1>FSW-2 - {name}</h1>
      
      </div>
      <About name={name} age={age} address={address}/>
      <HoverButton onSelect={() => handleTriggerSellect(name)}>Click Me !!!</HoverButton>
    </>
    
  );
}

export default NavbarWithStyling;
