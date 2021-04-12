import React, { useState } from "react";
import ReactDOM from "react-dom";
import CurvedCarousel from "../src/components/index";

export default function App() {
  const [curve, setCurve] = useState(50);
  const [friction, setFriction] = useState(0.95);
  const [rotation, setRotation] = useState(true);
  const [spacing, setSpacing] = useState(50);

  const _adjustRotation = (e) => {
    setRotation(e.target.checked);
  };
  const _adjustCurve = (e) => {
    setCurve(parseInt(e.target.value));
  };
  const _adjustSpacing = (e) => {
    setSpacing(parseInt(e.target.value));
  };
  const _adjustFriction = (e) => {
    setFriction(parseInt(e.target.value) / 100);
  };

  return (
    <div className="demo">
      <CurvedCarousel
        childWidth={100}
        curve={curve}
        spacing={spacing}
        rotation={rotation}
        friction={friction}
        style={{
          height: 350,
        }}
      >
        <img src="http://s30.postimg.org/r1tgqbr31/MV5_BMj_A1_MTQ3_Nz_U1_MV5_BMl5_Ban_Bn_Xk_Ft_ZTgw_MDE3_Mjg0_Mz_E.jpg" />
        <img src="http://s30.postimg.org/dra7ajpwd/MV5_BMj_Ax_Njc0_Mj_Iy_M15_BMl5_Ban_Bn_Xk_Ft_ZTcw_NTM2_NDA4_MQ.jpg" />
        <img src="http://s30.postimg.org/6180j5cyl/MV5_BMj_E5_NDU2_Mzc3_MV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_Nj_Aw_NTE5_OQ.jpg" />
        <img src="http://s30.postimg.org/gith15of1/MV5_BMTA2_OTE1_Njg4_Nj_Ve_QTJe_QWpw_Z15_Bb_WU3_MDAy_Nj_U4_MDM.jpg" />
        <img src="http://s30.postimg.org/fs0qvdm1p/MV5_BMTI3_MDc4_Nz_Uy_MV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_MTQy_MTc5_MQ.jpg" />
        <img src="http://s30.postimg.org/xaesjwonx/MV5_BMTI4_Mzk4_MDk2_NV5_BMl5_Ban_Bn_Xk_Ft_ZTYw_ODgx_Njc4_V1.jpg" />
        <img src="http://s30.postimg.org/suwdenc9p/MV5_BMTkx_Mzk2_MDkw_OV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_MDAx_ODQw_Mg.jpg" />
        <img src="http://s30.postimg.org/f51u5up5p/MV5_BMTQw_MTk3_NDU2_OV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_NTA3_MTI0_Mw.jpg" />
      </CurvedCarousel>
      <label>
        Curve:
        <input
          type="range"
          min="0"
          max="100"
          onChange={_adjustCurve}
          defaultValue="50"
        />
      </label>
      <label>
        Spacing:
        <input
          type="range"
          min="0"
          max="100"
          onChange={_adjustSpacing}
          defaultValue="50"
        />
      </label>
      <label>
        Friction:
        <input
          type="range"
          min="55"
          max="99"
          onChange={_adjustFriction}
          defaultValue="95"
        />
      </label>
      <label>
        Rotation:
        <input
          type="checkbox"
          onChange={_adjustRotation}
          defaultChecked={true}
        />
      </label>
    </div>
  );
}
