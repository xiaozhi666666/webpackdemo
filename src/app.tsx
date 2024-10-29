import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import routers from '../config/routers/router'; // 路由文件
import './global.less';

interface RouterItem {
  path: string;
  name: string;
  components: React.ComponentType;
}

function App() {
  return (
    <div className="App App-header">
      {routers.map((item: RouterItem) => (
        <Link to={item.path} key={item.path}>
          {item.name}
        </Link>
      ))}
      <br />
      <Routes>
        {routers.map((item: RouterItem) => (
          <Route path={item.path} key={item.path} element={<item.components />} />
        ))}
      </Routes>
    </div>
  );
}
export default App;
