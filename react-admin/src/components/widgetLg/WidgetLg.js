import { Avatar } from "@mui/material";
import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar
              src="https://th.bing.com/th/id/OIP.Ct6bZtaMSzsOe1hHGXlETAHaHa?pid=ImgDet&w=512&h=512&rs=1"
              className="widgetLgUserAvatar"
            />
            <span className="widgetLgName">Susan Mwebia</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$23.40</td>
          <td className="widgetLgTd">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar
              src="https://th.bing.com/th/id/OIP.x4v7a7IvQG0PSjgWKxp60AHaHa?pid=ImgDet&w=600&h=600&rs=1"
              className="widgetLgUserAvatar"
            />
            <span className="widgetLgName">Moris Munene</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$23.40</td>
          <td className="widgetLgTd">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar
              src="https://th.bing.com/th/id/R.cae019d2e6169b56e6690a1c99e74f67?rik=Yvi4nyebeqOPSw&pid=ImgRaw&r=0"
              className="widgetLgUserAvatar"
            />
            <span className="widgetLgName">John Man</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$3.40</td>
          <td className="widgetLgTd">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar
              src="https://th.bing.com/th/id/R.d95d12b5f2552b4a434049a45c034980?rik=8FztnUMv6%2fVvnA&riu=http%3a%2f%2fsugarplumdesigns.jjmtechcorp.com%2fwp-admin%2fimages%2fprofile-pictures-for-facebook-male-684.jpg&ehk=UtuuJNUbGd48AvdZt8n89KJmxRqGPMJmpZnnbDrZ7IY%3d&risl=&pid=ImgRaw&r=0"
              className="widgetLgUserAvatar"
            />
            <span className="widgetLgName">Gladies Chilobe</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$79.00</td>
          <td className="widgetLgTd">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
