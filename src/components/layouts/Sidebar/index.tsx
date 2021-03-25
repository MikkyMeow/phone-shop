import React from 'react';

import BasketCart from 'components/elements/BasketCart';
import Search from 'components/elements/Search';

const Sidebar = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <BasketCart />
      <Search />
    </div>
  );
};

export default Sidebar;
