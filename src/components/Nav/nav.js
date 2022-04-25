import React, { useState } from 'react'
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp'
import PaletteSharpIcon from '@mui/icons-material/PaletteSharp'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp'
import BuildSharpIcon from '@mui/icons-material/BuildSharp'
import FolderSharpIcon from '@mui/icons-material/FolderSharp'
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp'
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp'
import './sidebar.css'

function NavBar () {
  const [Component, ShowComponent] = useState(false)
  const [Utilities, ShowUtilities] = useState(false)
  const [Pages,ShowPages]=useState(false)
  return (
    <div className='NavBar'>
      <div className='space'>
        <div className='SideBar'>
          <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'>
            <div className='d-flex main '>
              <div className='Imoji'>
                <SentimentVerySatisfiedSharpIcon
                  style={{
                    fontSize: '38px',
                    color: 'white',
                    transform: 'rotate(330deg)'
                  }}
                ></SentimentVerySatisfiedSharpIcon>
              </div>
              <div className='Text'>
                SB ADMIN <sup>2</sup>
              </div>
            </div>
            <div className='dashBoard'>
              <p>
                <span>
                  <PaletteSharpIcon
                    className='icons'
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      marginRight: '.5rem'
                    }}
                  >
                    {' '}
                  </PaletteSharpIcon>
                </span>
                DashBoard
              </p>
            </div>
            <div className='interface'>
              <p className='p'>INTERFACE</p>
              <p
                className='same icons'
                onClick={() => {
                  if (!Component) {
                    ShowComponent(true)
                  } else {
                    ShowComponent(false)
                  }
                }}
              >
                <span className='icons'>
                  <SettingsApplicationsSharpIcon
                    className='icons'
                    style={{
                      color: 'rgba(255, 255, 255, 0.449)',
                      fontSize: '18px',
                      marginRight: '.5rem'
                    }}
                  ></SettingsApplicationsSharpIcon>
                </span>
                <span className='FirstLetter'>C</span>omponents{' '}
                <span>
                  {Component ? (
                    <KeyboardArrowDownSharpIcon />
                  ) : (
                    <ChevronRightSharpIcon />
                  )}
                </span>
              </p>
              <ul
                className={
                  Component
                    ? 'Show bg-white w-75 mx-auto'
                    : 'DropDown bg-white w-75 mx-auto'
                }
              >
                <li className={Utilities&&"first"}>Custom Components:</li>
                <li> Buttons</li>
                <li>Card </li>
              </ul>
              <p className=' utilities icons' onClick={() => {
                      if (!Utilities) {
                        ShowUtilities(true)
                      } else {
                        ShowUtilities(false)
                      }
                    }}>
                <span className='icons'>
                  <BuildSharpIcon
                    className='icons'
                    
                    style={{
                      color: 'rgba(255, 255, 255, 0.449)',
                      fontSize: '18px',
                      marginRight: '.5rem'
                    }}
                  ></BuildSharpIcon>
                </span>{' '}
                <span className='FirstLetter'>U</span>tilities
                <span>
                {Utilities ? (
                    <KeyboardArrowDownSharpIcon />
                  ) : (
                    <ChevronRightSharpIcon />
                  )}
                </span>
              </p>
              <ul
                className={
                  Utilities
                    ? 'Show bg-white w-75 mx-auto'
                    : 'DropDown bg-white w-75 mx-auto'
                }
              >
                <li className={Utilities&&"first"}>Custom Utilities:</li>
                <li> Colors</li>
                <li>Borders </li>
                <li>Animation </li>
                <li>Others </li>
              </ul>
            </div>
            <div className='interface'>
              <p className='p'>ADDONS</p>
              <p className='pages icons' onClick={() => {
                  if (!Pages) {
                    ShowPages(true)
                  } else {
                    ShowPages(false)
                  }
                }}>
                <span className='icons'>
                  <FolderSharpIcon
                    className='icons'
                    style={{
                      color: 'rgba(255, 255, 255, 0.449)',
                      fontSize: '18px',
                      marginRight: '.5rem'
                    }}
                  ></FolderSharpIcon>
                </span>{' '}
                <span className='FirstLetter'>P</span>ages
                <span>
                  <ChevronRightSharpIcon></ChevronRightSharpIcon>
                </span>
              </p>
              <ul className={
                  Pages
                    ? 'Show bg-white w-75 mx-auto'
                    : 'DropDown bg-white w-75 mx-auto'
                }>
                <li className='first'>Login Screens:</li>
                <li> Login</li>
                <li>Register </li>
                <li>Forgot Password </li>
                <li className='first'>Others Pages</li>
                <li>404 Pages</li>
                <li>Blank Pages</li>
              </ul>
              <p className='pages '>
                <span className='icons'>
                  <ShowChartSharpIcon
                    className='icons'
                    style={{
                      color: 'rgba(255, 255, 255, 0.449)',
                      fontSize: '18px',
                      marginRight: '.5rem'
                    }}
                  ></ShowChartSharpIcon>
                </span>
                <span className='FirstLetter'>C</span>harts
                
              </p>
              
            </div>
            <div className='arrow rounded-circle  '>
              <ChevronLeftSharpIcon
                style={{ color: 'gray' }}
              ></ChevronLeftSharpIcon>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
