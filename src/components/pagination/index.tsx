import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import style from "./style.module.scss";

const Pagination = () => {
  return (
    <section className={style.pagination}>
      <div className={style.button_active}>1</div>
      <div className={style.button_default}>2</div>
      <div className={style.button_default}>3</div>
      <div className={style.button_default}>4</div>
      <div className={style.button_default}>5</div>

      <div className={style.button_control}>
        <p>Next</p>
        <FaAngleDoubleRight className={style.icon} />
      </div>
    </section>
  );
};

export default Pagination;
