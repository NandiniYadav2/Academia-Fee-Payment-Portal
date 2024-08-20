
import './App.css';

import { useState, useEffect } from 'react'

import loginService from './services/login'
import billService from './services/bills'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import DoctorInfoWindow from './components/DoctorInfo'
import NavBar from './components/NavBar'
import Bills from './components/Bills'

const App = () => {
  
  const [ user, setUser ] = useState(null)

 
  const [ bills, setBills ] = useState([])

   
  
  const [ notification, setNotification ] = useState(null)
  const [ notificationType,setNotificationType ] = useState(null)


  
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  
  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      console.log(user)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      
      notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')
      setBills([])
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  // Function that pays a bill using the billObject that is passed to the function
  const payBill = async (billObject) => {
    try {
      
      await billService.payBill(billObject)

      
      setBills(bills.filter(bill => bill.billId !== billObject.billId ))

      notificationHandler(`Successfully paid the ${billObject.description} bill`, 'success')
    }
    catch (exception) {
      notificationHandler(`Failed to pay the ${billObject.description} bill successfully`, 'error')
    }
  }

  const payInstallments = async (billObject) => {
    try {
      
      await billService.payInstallments(billObject)

      
      setBills(bills.filter(bill => bill.billId !== billObject.billId))

      notificationHandler(`Successfully paid the "${billObject.description}" bill`, 'success')
    }
    catch (exception) {
      notificationHandler(`Failed to pay the "${billObject.description}" bill successfully`, 'error')
    }
  }

  
  
  useEffect(() => {
      async function fetchData() {
        if (user) {
          const bills = await billService.getUserBills(user)
          setBills(bills)
        }
      }
      fetchData()
  }, [user])


  
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])
  console.log("user=",user)

 
  return (
    <div className="App">
      <header className="App-header ">
         Academia - Student Fee Payments 
         <DoctorInfoWindow/>
      </header>
     
     
      {/* Notification component that will render only when the notification state is not null */}
      <Notification notification={notification} type={notificationType} />

      {
       
        user === null && 
        <LoginForm startLogin={handleLogin}/>
      }

      {
        
        user !== null && 
        <NavBar user={user} setUser={setUser}/>
      } 


        {/* Show Bills of the User when login has happened */
        user !== null &&
        <Bills
          bills={bills}
          studentId={user.studentId}
          payBill={payBill}
          payInstallments={payInstallments}
          
        />
    } 
        
        
    </div>
  )
}

export default App;
