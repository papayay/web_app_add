import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // 从 MUI 中导入加载中的图标
import './App.css';
import UsersList from './assets/userList';
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 添加一个新的状态，用于追踪数据是否正在加载

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzBj5LTV2HW8eWsEyt8kJYQNmoAnqisTac_3xwAOWFMgr_gZsOGmd-MsYUaQ2_ZLbBekg/exec')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false); // 数据加载完毕后，设置加载状态为 false
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); // 如果发生错误，也需要设置加载状态为 false
      });
  }, []);

  return (
    <div className="App">
      {loading ? ( // 条件渲染加载指示器或用户列表
        <CircularProgress /> // 如果数据正在加载，显示加载中的图标
      ) : (
        <UsersList users={users} /> // 数据加载完毕后，渲染用户列表
      )}
    </div>
  );
}

export default App;
