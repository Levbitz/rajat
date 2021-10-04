import React from "react";
import Topbanner from "../../components/Topbaner/Topbanner";
import Heading from "../../helpers/Headings/Heading";

function ProductsPage() {
  return (
    <div>
      <Topbanner />

      <div className="container">
        <Heading title="SMALL & MEDIUM HYDRAULIC ROCK BREAKERS" />

        <div className="row">
          <div className="col l12">
            <table className="responsive-table card z-depth-1">
              <thead>
                <tr>
                  <th>Specifications</th>
                  <th>Unit </th>
                  <th>EBR 30JS</th>
                  <th> EBR 80JS </th>
                  <th>EBR 120JS </th>
                  <th>EBR 210JS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Operating Weight </td>
                  <td>Ton </td>
                  <td> 185 </td>
                  <td> 460 </td>
                  <td> 950 </td>
                  <td> 1700</td>
                </tr>
                <tr>
                  <td>Operating Pressure</td>
                  <td>kg/cm2</td>
                  <td>90 ~ 120</td>
                  <td>120 ~ 150</td>
                  <td>150 ~ 170</td>
                  <td>160 ~ 180</td>
                </tr>
                <tr>
                  <td>Required Oil Flow</td>
                  <td>Ipm</td>
                  <td>25 ~ 50</td>
                  <td>50 ~ 90</td>
                  <td>80 ~ 110</td>
                  <td>140 ~ 170</td>
                </tr>
                <tr>
                  <td>Blow Rate</td>
                  <td>bpm</td>
                  <td>600 ~ 1100</td>
                  <td>400 ~ 800</td>
                  <td>350 ~ 700</td>
                  <td>360 ~ 460</td>
                </tr>
                <tr>
                  <td>Tool Diameter </td>
                  <td>mm </td>
                  <td>53 </td>
                  <td>80 </td>
                  <td>100 </td>
                  <td>135</td>
                </tr>

                <tr>
                  <td>Relief Valve Pressure </td>
                  <td>kg/cm2 </td>
                  <td>140 </td>
                  <td> 170 </td>
                  <td> 190 </td>
                  <td> 200</td>
                </tr>

                <tr>
                  <td>Suitable Carrier </td>
                  <td>Ton </td>
                  <td>2.5 ~ 4.5</td>
                  <td> 6 ~ 9 </td>
                  <td> 10 ~ 15 </td>
                  <td> 18 ~ 26 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
