import React, { useState, useRef, useEffect } from "react";
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBIcon,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Sidenav({ basicOpen, setBasicOpen }) {
  const [mode, setMode] = useState("side");
  const [backdrop, setBackdrop] = useState(false);
  const [basicCollapse1, setBasicCollapse1] = useState(false);
  const [basicCollapse2, setBasicCollapse2] = useState(false);

  const innerWidth = useRef(null);

  const checkResize = () => {
    if (window.innerWidth === innerWidth.current) {
      return;
    }

    innerWidth.current = window.innerWidth;

    if (window.innerWidth < 1400) {
      setMode("over");
      setBasicOpen(false);
      setBackdrop(true);
    } else {
      setMode("side");
      setBasicOpen(true);
      setBackdrop(false);
    }
  };

  const handleBasicCollapse1 = () => {
    if (basicCollapse2 && !basicCollapse1) setBasicCollapse2(false);

    setBasicCollapse1(!basicCollapse1);
  };

  const handleBasicCollapse2 = () => {
    if (basicCollapse1 && !basicCollapse2) setBasicCollapse1(false);

    setBasicCollapse2(!basicCollapse2);
  };

  useEffect(() => {
    checkResize();

    window.addEventListener("resize", checkResize);

    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, []);

  return (
    <>
      <MDBSideNav
        isOpen={basicOpen}
        backdrop={backdrop}
        getOpenState={(e) => setBasicOpen(e)}
      >
        <MDBRipple tag="a" className="d-flex justify-content-center py-4">
          <img
            id="MDB-logo"
            src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
            alt="MDB Logo"
            draggable="false"
          />
        </MDBRipple>
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <Link to="/" className="sidenav-link">
              <MDBIcon fas icon="chart-area" className="fa-fw me-3" />
              SEO dashboard
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <Link to="/e-commerce1" className="sidenav-link">
              <MDBIcon fas icon="chart-pie" className="fa-fw me-3" />
              eCommerce dashboard
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <Link to="/e-commerce2" className="sidenav-link">
              <MDBIcon fas icon="chart-line" className="fa-fw me-3" />
              eCommerce dashboard
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <Link to="/ads-dashboard" className="sidenav-link">
              <MDBIcon fas icon="chart-pie" className="fa-fw me-3" />
              Ads dashboard
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <Link className="sidenav-link" to="/order-dashboard">
              <MDBIcon fas icon="chart-bar" className="fa-fw me-3" />
              Order dashboard
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <Link className="sidenav-link" to="/traffic-dashboard">
              <MDBIcon fas icon="chart-area" className="fa-fw me-3" />
              Traffic dashboard
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <Link className="sidenav-link" to="/invoice-page">
              <MDBIcon fas icon="money-bill" className="fa-fw me-3" />
              Invoice page
            </Link>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon="angle-down" onClick={handleBasicCollapse1}>
              <MDBIcon fas icon="tablet-alt" className="fa-fw me-3" />
              Apps
            </MDBSideNavLink>
            <MDBSideNavCollapse show={basicCollapse1}>
              <Link to="/chat-app" className="sidenav-link">
                Chat app
              </Link>
              <Link className="sidenav-link" to="/mailbox-app">
                Mailbox app
              </Link>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon="angle-down" onClick={handleBasicCollapse2}>
              <MDBIcon fas icon="cogs" className="fa-fw me-3" />
              Management
            </MDBSideNavLink>
            <MDBSideNavCollapse show={basicCollapse2}>
              <Link className="sidenav-link" to="/user-profile">
                User profile
              </Link>
              <Link className="sidenav-link" to="/user-management">
                User management
              </Link>
              <Link className="sidenav-link" to="/login-register">
                Login / register page
              </Link>
              <Link className="sidenav-link" to="/forgot-password">
                Forgot password page
              </Link>
              <Link className="sidenav-link" to="/change-password">
                Change password page
              </Link>
              <Link className="sidenav-link" to="/not-found404">
                404 page
              </Link>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>
    </>
  );
}
