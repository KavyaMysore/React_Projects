import './App.css';
import React from 'react';
// import Card1 from "./components/Card1"
// import Bootstrap from './components/Bootstrap';
// import Styled from './components/Styled';
// import Conditionalrendering from './components/Conditionalrendering';
// import State from './components/State';
// import TogglePara from './components/TogglePara';
// import ChangeEvent from './components/ChangeEvent';
// import SubmitEvent from './components/SubmitEvent';
import RegistrationForm from './components/RegistrationForm';
import Form from './components/Form';
// import Todo from './components/Todo';
// import FetchApi from './components/FetchApi';
// import FetchApiBoot from './components/FetchApiBoot';
// import Covid19 from './components/Covid19';
// import CovidTable from './components/CovidTable';
// import Omdb from './components/Omdb';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import SuperheroApi from './components/SuperheroApi';
import ListComponent from './components/ListComponent';
import CitiesListComponent from './components/CitiesListComponent';
import ResultComponent from './components/ResultComponent';
import Registration from './components/Registration';
import OnAndOff from './components/OnAndOff';



// import Navbar from "./components/Navbar";

function App() {
  return (
   <>

  
{/* 
   <BrowserRouter>
   <Navbar/>
        <Routes>
              <Route path="/" element={<State/>}/>
              <Route path="/CovidTable" element={<CovidTable/>}/>
              <Route path="/Covidcards" element={<Covid19/>}/>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/togglepara" element={<TogglePara/>}/>
              <Route path="/github" element={<FetchApi/>}/>

        </Routes> */}
             {/* <h1>Card Gallery</h1>
     <div className='gallery'>
     <Card1 url="https://cdn.pixabay.com/photo/2023/08/10/03/39/woman-8180638_640.jpg" heading="Women Flower" />
     <Card1 url="https://cdn.pixabay.com/photo/2023/08/11/08/11/cold-8183087_1280.jpg" heading="Cold Nature" />
     <Card1 url="https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_640.jpg" heading="Sunrise Sea" />
     <Card1 url="https://cdn.pixabay.com/photo/2023/09/12/17/59/stones-8249322_640.jpg" heading="Colorfull Stones" />
     </div>

     
    <div className="App">
     <img src="/images/croatia-8253094_640.jpg" alt="" />
     <img src="/images/yard-8254659_640.jpg" alt="" />
     <img src="/images/el-chalten-8223303_640.jpg" alt="" />
    </div> */}


   {/* <Bootstrap/> 
   <Card1/> 
   <Styled/>
   <Conditionalrendering/>
   <State/>
   <TogglePara/>
   <ChangeEvent/>
   <SubmitEvent/>
   <Todo/>
   <FetchApi/>
   <FetchApiBoot/>
   <Covid19/>
   <CovidTable/>
   <Omdb/>  */}
   <Form/>
   <RegistrationForm/>
   {/* </BrowserRouter> */}
   {/* <SuperheroApi/> */}
   <ListComponent/>
   <CitiesListComponent/>
   <ResultComponent/>
   <Registration/>
 <OnAndOff/>




   </> 
  );
}

export default App;
