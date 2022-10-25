import React from "react";
import { FaBitcoin, FaEthereum, FaCaretDown } from "react-icons/fa";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
} from "react-icons/ai";
import {
  DropdownContent,
  Icon,
  StyledMenuItem,
  Currency,
} from "./Currency.styles";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const CurrencySelect = ({ currency, handleCurrency }) => {
  const currencyIcon = () => {
    switch (currency) {
      case "eur":
        return <AiFillEuroCircle size="1.6rem" />;
      case "gbp":
        return <AiFillPoundCircle size="1.6rem" />;
      case "btc":
        return <FaBitcoin size="1.45rem" />;
      case "eth":
        return <FaEthereum size="1.2rem" />;
      default:
        return <AiFillDollarCircle size="1.6rem" />;
    }
  };

  const menu = (
    <Menu
      onClick={handleCurrency}
      items={[
        {
          key: "usd",
          icon: <AiFillDollarCircle size="1.4rem" />,
          label: "USD - United States Dollar",
        },
        {
          key: "gbp",
          icon: <AiFillPoundCircle size="1.4rem" />,
          label: "GBP - British Pound Sterling",
        },
        {
          key: "eur",
          icon: <AiFillEuroCircle size="1.4rem" />,
          label: "EUR - Euro",
        },
        {
          key: "btc",
          icon: <FaBitcoin size="1.4rem" />,
          label: "BTC - Bitcoin",
        },
      ]}
    ></Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <DropdownContent>
          <Icon>{currencyIcon()}</Icon>
          <Currency className={"hide-sm"}>{currency}</Currency>
          <FaCaretDown />
        </DropdownContent>
      </Dropdown>
    </>
  );
};

export default CurrencySelect;
