import './App.css';

// import Basket from '../components/Basket';
// import BasketButton from '../components/BasketButton';
// import Card from '../components/Card';
// import Confirmation from '../components/Confirmation';
// import ContactHoursLocation from '../components/ContactHoursLocation';
// import Login from '../components/Login';
// import Logo from '../components/Logo';
import Menu from '../features/menu/Menu';
// import OrderHistory from '../components/OrderHistory';
// import Payment from '../components/Payment';
// import SignInUpButton from '../components/SignInUpButton';
// import Submission from '../components/Submission';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return(
    <Menu />
  );
}

export default App;



// {/* <Routes>
// <Route path='/' element={<Menu />} />
// <Route path='/:type/login' element={<Login />} />
// <Route path='/checkout/payment' element={<Payment />} />
// <Route path='/checkout/payment/:method' element={<> <Card /> {/* <PayPalAPI /> <GoogleAPI /> <AppleAPI /> */} </>} />
// <Route path='/checkout/submission' element={<Submission />} />
// <Route path='/checkout/confirmation' element={<Confirmation />} />
// <Route path='/customer/order_history' element={<OrderHistory />} />
// <Route path='/customer/card' element={<Card />} />
// <Route path='/contact_hours_location' element={<ContactHoursLocation />} />
// </Routes> */}