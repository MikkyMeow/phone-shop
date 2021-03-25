import React from 'react';
import Sidebar from '../Sidebar';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </div>
    </div>
  );
};
