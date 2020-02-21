import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <div style={{fontSize:"85%"}}>
          {/*[if lt IE 9]>
  <div style="text-align:center; padding: 6px 0; background: #cc0000; font-size: 18px; color: #fff; font-weight: 500;">You are using an old version of Internet Explorer. For a better experience, keep your browser up to date. <a href="http://windows.microsoft.com/ie" target="_blank" class="btn btn-sm btn-info"><i class="fa fa-edge"></i> Get the latest IE</a></div>
  <![endif]*/}
          {/* scrollToTop */}
          {/* ================ */}
          <div className="scrollToTop circle"><i className="icon-up-open-big" /></div>
          {/* page wrapper start */}
          {/* ================ */}
          <div className="page-wrapper">
            {/* header-container start */}
            <nav className="navbar  navbar-light bg-white">
  {/* <a className="navbar-brand" href="/">Sticky top</a> */}
  <a className="navbar-brand" href="/">
    <img src="../csmwhitelogo.png" alt="logo" />
</a>
  <ul className="list-inline">
<li ><i className="fa fa-phone "></i>International: +44 2035192105</li>
<li className="">&nbsp;|&nbsp;</li>
<li><a href="mailto:support@csmwealth.com" target="_blank" rel = "noopener noreferrer"><i className="fa fa-envelope"></i> support@csmwealth.com</a></li>
<li className="">&nbsp;|&nbsp;</li>
{/* <li><a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-default-login" style={{margin:"0"}}><b>LOGIN</b></a></li> */}
</ul>

<ul className="ml-auto list-inline" style={{marginRight:"40px"}}>
<li className="hidden-xs"><a href="/login" className="btn btn-sm btn-white" style={{margin:"0", padding:"8px 20px 6px 20px"}}><b>CLIENT LOGIN</b></a></li>
<li><a href="/signup" className="btn btn-sm btn-default btn-ocean-green" style={{margin:"0"}}><b>SIGN UP</b></a></li>
</ul>

</nav>
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  
  <a className="navbar-brand" href="/">
    CSM
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto" style={{marginRight:"40px"}}>
      <li className="nav-item">
        <a className="nav-link" href="/">
          HOME <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          PORTFOLIO
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/crypto">
            Crypto
          </a>
          <a className="dropdown-item" href="/forex">
            Forex
          </a>
          <a className="dropdown-item" href="/nfp">
            Trade Nfp
          </a>
          <a className="dropdown-item" href="/retirement">
            Retirement Income
          </a>
          <a className="dropdown-item" href="/tradingtools">
            Trading tools
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/whyus">
          WHY CSM
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="/ourteam">
          OUR TEAM
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ABOUT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/aboutus">
            About
          </a>
          <a className="dropdown-item" href="/contactus">
            Contact us
          </a>
          <a className="dropdown-item" href="/testimony">
            Testimonials
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/faq">
          FAQ
        </a>
      </li>
    </ul>
  </div>
</nav>
            {/* header-container end */}
            {/* <div className="breadcrumb-container" style={{borderTop: '2px solid #f1f1f1'}}>
              <div className="container">
                <ol className="breadcrumb">
                  <li><a href="../index.html"><i className="fa fa-home" /></a></li>
                  <li><a href="../trading/premium-account.html">Account Types</a></li>
                  <li className="active">Open Account</li>
                </ol>
              </div>
            </div> */}
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div style={{display:"flex", justifyContent:"center"}}>
                  {/*  */}

                  <div className="container">
  <h5 className="section-title h1">OUR TEAM</h5>
  <div className="row">
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                    alt="card imag"
                  />
                </p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="/" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
  </div>
</div>;


                  {/*  */}
                  </div>
                  {/* sidebar starts */}
                  {/* <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar" style={{marginTop: '0px'}}>
                      <div style={{background: '#131c28', float: 'left', width: '100%', padding: '10px 20px 20px 20px'}} className="mb-30 clearfix">
                        <h4 className="color-white">Join LMFX</h4>
                        <div className="separator-2 custom-separator-2" />
                        <a href="open-account.html" className="btn btn-sm btn-default btn-ocean-green full-width"><b>OPEN LIVE ACCOUNT</b></a>
                        <a href="demo-account.html" className="btn btn-sm btn-default full-width"><b>OPEN DEMO ACCOUNT</b></a>
                      </div>
                      <a href="../funding/bonus-offerings.html"><img className="img-responsive" src="../../static/redesign/images/sidebar-pamm.jpg" alt = "" /></a>
                      <div className="pv-30 clearfix">
                        <h4 className="title">Account Types</h4>
                        <div className="separator-2" />
                        <nav>
                          <ul className="nav nav-pills nav-stacked list-style-icons">
                            <li><a href="premium-account.html"><i className="fa fa-angle-double-right" />Premium Account</a></li>
                            <li><a href="fixed-account.html"><i className="fa fa-angle-double-right" />Fixed Account</a></li>
                            <li><a href="zero-account.html"><i className="fa fa-angle-double-right" />Zero Account</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}
                  {/* sidebar ends */}
                </div>
              </div>
            </section>
            {/*================== FOOTER starts here =======================*/}
            <section className="clearfix pv-20 hidden-sm hidden-xs" id="payment-methods" style = {{backgroundColor:"#42ce7a"}}>
<div className="container">
<div className="row" style={{display:"flex",justifyContent:"space-around"}}>
<div className="owl-clients-v1" style={{display:"flex",justifyContent:"space-around",margin:"10px 0px"}}>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/wire-transfer.png" alt="wire-transfer" title="wire-transfer"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/visa.png" alt="visa" title="visa" /></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/visa-electron.png" alt="visa-electron" title="visa-electron"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/mastercard.png" alt="mastercard" title="mastercard"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/maestro.png" alt="maestro" title="maestro"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/skrill.png" alt="skrill" title="skrill"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/neteller.png" alt="neteller" title="neteller"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/fasapay.png" alt="fasapay" title="fasapay" style={{border: "1px solid #ddd"}} /></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/vload1.png" alt="vload" title="vload" style={{border: "1px solid #ddd"}}/></a>
</div>
</div>
</div>
</div>
</section>
<footer id="footer" className="clearfix dark">
<div className="footer">
<div className="container">
<div className="footer-inner">
<div className="row">

</div>
<div className="row">
<div className="col-md-12">
<div className="footer-content" style={{padding:"0px"}}>
<div className="separator-2"></div>
<div className="row">
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-lock pr-10 color-white"></i> Secured by: GeoTrust Inc
</div>
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-phone pr-10 color-white"></i> Telephone: +44 2035192105
</div>
<div className="col-md-2 color-offwhite" style = {{paddingTop:"2px",display:"flex", flexDirection:"row"}}>
<i className="fa fa-envelope-o pr-10 color-white"></i>support@csmwealth.com
</div>
<div className="col-md-4 color-offwhite">
<ul className="social-links circle animated-effect-1" style={{marginTop:"0px",marginBottom:"2px",float:"right"}}>
<li className="facebook"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-facebook"></i></a></li>
<li className="twitter"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-twitter"></i></a></li>
<li className="googleplus"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-google-plus"></i></a></li>
<li className="linkedin"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="separator-2"></div>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<b>CSM Wealth Ltd. Reg number 07659758</b>
</p>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>Registered office address</a> <br />
1 Windsor Road, Northam, Bideford, Devon, England, EX39 1EN
</p>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<b>Risk Warning:</b> Contracts for Difference (‘CFDs’) are complex financial products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.
<br/>
As a result, CFDs may not be suitable for all investors because you may lose all your invested capital. You should not risk more than you are prepared to lose. Before deciding to trade, you need to ensure that you understand the risks involved taking into account your investment objectives and level of experience. All information on this website is not directed toward soliciting citizens or residents of the United States, United Kingdom, Japan or any other jurisdiction that would be contrary to local law or regulation.
<br/>
Past performance of CFDs is not a reliable indicator of future results. Most CFDs have no set maturity date. Hence, a CFD position matures on the date you choose to close an existing open position. Seek independent advice, if necessary. Please read CSM Wealth’s full ‘Risk Disclosure Statement’.
</p>
</div>
</div>
</div>
</div>
</div>
</footer>
            {/* footer end */}
          </div>
        </div>
      );
}

export default Team;