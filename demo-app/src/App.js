import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Inner from "./MyComponent/Inner";
import Additems from "./MyComponent/Additems";
import About from "./MyComponent/About";
import CustomTable from './MyComponent/CustomTable';
import Parent from "./MyComponent/parent";
import LifecycleA from "./MyComponent/LifecycleA";
import FunctionClick from "./MyComponent/functional/FunctionClick";
import ClassClick from "./MyComponent/ClassClick";
import HookObject from "./MyComponent/functional/HookObject";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './MyComponent/demo/login';
import Signup from './MyComponent/demo/signup';

function App() {
  let initlist;
  if (localStorage.getItem("lists") === null) {
    console.log("Hello2");
    initlist = [];
  } else {
    initlist = JSON.parse(localStorage.getItem("lists"));
    console.log("Hello1");
  }

  const onDeleteBtn = (todo) => {
    console.log("Hello Swikriti!", todo);
    setlists(
      lists.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("lists", JSON.stringify(lists));
  };
  const addBtn = (title, desp) => {
    console.log("add Button click>>>", title, desp);
    let sno = (lists.length +1)-1;
    console.log('snooo>>', sno);
    const AddList = {
      sNo: sno,
      Title: title,
      Discription: desp,
    };
    console.log(AddList);
    setlists([...lists, AddList]);
  };

  const [lists, setlists] = useState(
    initlist

    // {
    //   'sNo': 1,
    //   'Title': 'Street Market',
    //   'Discription': 'An open-air market often held only on a particular day of the week in a designated area'
    // },
    // {
    //   'sNo': 2,
    //   'Title': 'Mall',
    //   'Discription': 'An urban shopping area featuring a variety of shops surrounding a usually open-air concourse reserved for pedestrian traffic'
    // }
  );
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <>
    <FunctionClick/>
   
    <ClassClick/>
      {/* <Router>
            <Route exact path="/" component={Signup}/>
            <Route exact path="/login" component={Login}/>
        <Switch>
          
            <Header title="About" searchbar={false} />
            <Route exact path="/" render={()=>{
              return( 
                <>
                <Additems onAdd={addBtn} />
                <Inner list={lists} onDelete={onDeleteBtn} />
                </>
                )
                }}>
            </Route>
            <Route exact path="/about">
              <About count='count'></About>
              <LifecycleA/>
            </Route>
            <Route exact path="/CustomTable">
              <CustomTable/>
            </Route>
            <Parent/>
            <Footer/>
        </Switch>
        

      </Router> */}
      
    </>
  );
}

export default App;
