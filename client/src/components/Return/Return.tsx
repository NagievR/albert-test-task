import React from 'react';
import s from "./return.module.scss";
import arrow from "../../assets/icons/arrow.svg";
import { Link } from 'react-router-dom';

interface IProps {
  to: string
};

const Return = (props: IProps) => {
  const { to } = props;

  return (
    <section className={s.mainContainer}>
      <div className="container">
        <Link to={to} className={s.link}>
          <div className={s.btn}>
            <img src={arrow} alt="arrow" />
            <span>Return</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Return;
