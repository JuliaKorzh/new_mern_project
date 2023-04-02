import {Layout} from "./components/Layout.jsx";
import {Routes, Route} from "react-router-dom";
import {MainPage} from"./pages/MainPage";
import {StayPage} from"./pages/StayPage";
import {RegisterPage} from"./pages/RegisterPage";
import {SuccessRegisterPage} from"./pages/SuccessRegisterPage";
import {PasswordRecoveryPage} from"./pages/PasswordRecoveryPage";
import {NewPasswordPage} from"./pages/NewPasswordPage";
import {PinPages} from"./pages/PinPages";
import {SuccsessRecoveryPage} from"./pages/SuccsessRecoveryPage";
import {LogInPage} from"./pages/LogInPage";
import {PersonalAccountPage} from"./pages/PersonalAccountPage";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path = "/" element={<MainPage/>}/>
        <Route path = ":id" element={<StayPage/>}/>
        <Route path = "register" element={<RegisterPage/>}/>
        <Route path = "register/success" element={<SuccessRegisterPage/>}/>
        <Route path = "recovery" element={<PasswordRecoveryPage/>}/>
        <Route path = "recovery/pin" element={<PinPages/>}/>
        <Route path = "newpass" element={<NewPasswordPage/>}/>
        <Route path = "newpass/success" element={<SuccsessRecoveryPage/>}/>
        <Route path = "login" element={<LogInPage/>}/>
        <Route path = "me" element={<PersonalAccountPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
