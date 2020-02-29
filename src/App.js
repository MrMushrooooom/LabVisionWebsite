import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import "./App.css";
import Homepage from "./components/pages/homepage";
import FeatureInspection from "./components/pages/featureInspection";
import FeatureTraining from "./components/pages/featureTraining";
import FeatureLedger from "./components/pages/featureLedger";
import FeatureEnvironment from "./components/pages/featureEnvironment";
import FeatureDataAnalysis from "./components/pages/featureDataAnalysis";
import CooperationCase from "./components/pages/cooperationCase";
import Partner from "./components/pages/partner";
import Price from "./components/pages/price";
import NotFound from "./components/pages/notFound";
import TrailApply from "./components/pages/trailApply";
import FooterForApply from "./components/pages/footerForApply";
import Footer from "./components/pages/footer";
import ContactUs from "./components/pages/contactUs";
import ServiceAgreement from "./components/pages/serviceAgreement";
import PrivacyPolicy from "./components/pages/privacyPolicy";

const TrailApplyContainer = () => (
  <div>
    <div>
      <Route path="/trail-apply" component={TrailApply} />
    </div>
  </div>
);

const DefaultContainer = () => (
  <div>
    <NavBar />
    <div>
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route path="/feature/inspection" component={FeatureInspection} />
        <Route path="/feature/training" component={FeatureTraining} />
        <Route path="/feature/ledger" component={FeatureLedger} />
        <Route path="/feature/environment" component={FeatureEnvironment} />
        <Route path="/feature/data-analysis" component={FeatureDataAnalysis} />
        <Route path="/cooperation-case" component={CooperationCase} />
        <Route path="/partner" component={Partner} />
        <Route path="/price" component={Price} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/service-agreement" component={ServiceAgreement} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/not-found" component={NotFound} />

        <Redirect from="/feature" exact to="/feature/inspection" />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
    <FooterForApply />
    <Footer />
  </div>
);

//className="App" set all content align center by default
function App() {
  return (
    <React.Fragment>
      <div>
        <Switch>
          <Route exact path="/trail-apply" component={TrailApplyContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
