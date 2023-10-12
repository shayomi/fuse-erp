import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #8c95a1;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 14px;
  transition: all ease 300ms;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  &:hover {
    background: #2563eb;
    color: #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #ffffff;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #8c95a1;
  font-size: 12px;
  transition: all ease 300ms;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  &:hover {
    background: #2563eb;
    color: #fff;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div className='flex flex-row pt-2'>
          <div className='mt-1'>{item.icon}</div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              className='flex flex-row justify-between hover:bg-[white]'>
              <div className='flex flex-row items-center gap-x-2'>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </div>
              <div className='px-3'>
                <div className='px-2 bg-[#aabce2] rounded-sm text-[#2563eb]  '>
                  {item.total}
                </div>
              </div>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
