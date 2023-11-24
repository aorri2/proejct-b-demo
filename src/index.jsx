import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';


async function enableMocking(){
  if(process.env.NODE_ENV !== 'development'){
    return
  }
  const {worker} = await import('./mocks/browser')
  console.log('development mocking enabled')
  return worker.start()
}


const config = {
  token: {
    colorPrimary: '#88CE86',
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(()=>{
  root.render(
    <React.StrictMode>
      <ConfigProvider theme={config}>
      <App />
      </ConfigProvider>
    </React.StrictMode>
  );
})

