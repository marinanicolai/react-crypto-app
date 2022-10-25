import React from "react";
import { FaBitcoin, FaEthereum, FaCaretDown } from "react-icons/fa";
import {
  DropdownContent,
  Icon,
  StyledMenuItem,
  Currency,
} from "./Currency.styles";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
} from "react-icons/ai";

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
    <Menu onClick={handleCurrency}>
      <StyledMenuItem key="usd">
        <div>
          <AiFillDollarCircle size="1.4rem" />
        </div>
        <span>USD - United States Dollar</span>
      </StyledMenuItem>
      <StyledMenuItem key="gbp">
        <div>
          <AiFillPoundCircle size="1.4rem" />
        </div>
        <span>GBP - British Pound Sterling</span>
      </StyledMenuItem>
      <StyledMenuItem key="eur">
        <div>
          <AiFillEuroCircle size="1.4rem" />
        </div>
        <span>EUR - Euro</span>
      </StyledMenuItem>
      <StyledMenuItem key="btc">
        <div>
          <FaBitcoin size="1.25rem" />
        </div>
        <span>BTC - Bitcoin</span>
      </StyledMenuItem>
      <StyledMenuItem key="eth">
        <div>
          <FaEthereum size="1.1rem" />
        </div>
        <span>ETH - Ethereum</span>
      </StyledMenuItem>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <DropdownContent>
          <Icon>{currencyIcon()}</Icon>
          <Currency className={"hide-sm"}>{currency}</Currency>
          <FaCaretDown />
        </DropdownContent>
        {/* <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a> */}
      </Dropdown>
    </>
  );
};

export default CurrencySelect;
