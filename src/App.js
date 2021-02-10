import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdvicePage from './components/AdvicePage';
import BeautySpecial from './components/BeautySpecial';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import SuggestionPage from './components/SuggestionPage';

const initialArray = [
  {
    headline: 'Pazite na ten',
    about:
      'Prvi savet o šminkanju početnika se najviše tiče nijanse tena. Pre nego što krenete da birate komade šminke i proizvode za hidratantnu negu, morate da odlučite šta sve na koži želite da prikrijete, koju boju tena imate i kako vaša koža reaguje na šminku.',
    image: 'https://lana999.files.wordpress.com/2012/05/suncanje1.jpg',
  },
  {
    headline: 'Hidriranost',
    about:
      'Stižemo do našeg drugog po redu saveta za početnike – hidratantna nega! Upravo zbog toga je važno da umete da prepoznate tip vaše kože! Da li imate masnu kožu? Ili kombinovanu? Kada saznate, moći ćete da odaberete savršenu hidratantnu negu za svoju kožu!',
    image:
      'https://ananasmag.com/wp-content/uploads/2020/03/koza-nega-koze-hidratacija-mleko-za-telo-losion-topless-woman-putting-moisturizer-3764170-foto-Andrea-Piacquadio-from-Pexels.jpg',
  },
  {
    headline: 'Odaberite svoju nijansu',
    about:
      'Jedan od najkorisnijih saveta o šminkanju za početnike najviše se tiče dobrog odabira adekvatne nijanse pudera! Potrebno je  da odaberete nešto što će se savršeno slagati sa bojom vaše kože, tako da prilikom nanošenja pudera ne  bude onih oštrih prelaza.',
    image:
      'https://www.specialarabia.com/uploads/articles_uploads/Donnah-Bahdon---Hung-Vanngo1.jpg',
  },
  {
    headline: 'Povećajte unos tečnosti',
    about:
      'Problem dehidratacije tokom leta je veoma uobičajen. Potrebno je u organizam unositi dovoljno tečnosti da bi vaše telo ostalo hidrirano. Voda je dar prirode koji, osim što održava kožu hidriranom, svežom i blistavom, takođe eliminiše unutrašnje toksine putem znoja.',
    image:
      'https://www.adiva.hr/wp-content/uploads/2019/07/Usvojite-zdrave-navike-Ovog-ljeta-pobrinite-se-za-hidrataciju-iznutra-i-izvana-760x530.jpg',
  },
];

function App() {
  const [advices, setAdvices] = useState(initialArray);

  function addNewAdvice(advice) {
    setAdvices((advices) => [...advices, advice]);
  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/predlog">
            <SuggestionPage addNewAdvice={addNewAdvice} />
          </Route>
          <Route exact path="/saveti">
            <AdvicePage advices={advices} />
          </Route>
          <Route exact path="/specijal">
            <BeautySpecial />
          </Route>
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
