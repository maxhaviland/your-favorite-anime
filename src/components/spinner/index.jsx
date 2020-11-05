import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-spinners/BounceLoader';
import {css} from "@emotion/core";

export const style = css`
  position: fixed;
  display: flex;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  z-index: 100000 !important;
  margin-top: 40vh;
  left: 0;
  right: 0;
`;

const Spinner = () => {
  const loading = useSelector(state => state.animes.loading)
  return <Spinner color="#b71c1c" css={style} size={120} loading={loading} />
}

export default Spinner;