import { useState } from 'react'
import { FC, HTMLAttributes, ComponentPropsWithoutRef } from 'react';
import logo from './assets/BeautyHub Logo.jpg';
import './App.css'

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  services: string[];
}

function App() {
  return (
    <div className="app">
      <Header />
      <Separator/>
      <MainContent/>
      <ServicesCardList/>
    </div>
  );
}

// Компонент Header
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="BeautyHub Logo" className="logo"></img>
      </div>
      <nav className="nav">
        <a href="#">Регистрация</a>
        <a href="#">Вход</a>
      </nav>
    </header>
  );
}

function Separator() {
  return <hr className="separator" />;
}

// Компонент MainContent
function MainContent() {
  return (
    <section id="maincontent">
      <h1>Лучшие мастера красоты вашего города здесь!</h1>
      <button type="button">Мастера, салоны, услуги...</button>
    </section>
  );
}

// Компонент ServicesCardList
function ServicesCardList() {
  return (
    <section id="services">
      <h2>Выберите услугу...</h2>
      <div className="cards">
        <ServiceCard title="Брови" services={['Коррекция бровей', 'Касторовая коррекция', 'Лифтинг бровей']} />
        <ServiceCard title="Маникюр" services={['Аппаратный маникюр', 'Покрытие гель-лаком', 'Парикмахеры']} />
        <ServiceCard title="Ресницы" services={['Оформление ресниц', 'Педикюр', 'Татуаж']} />
      </div>
    </section>
  );
}

// Компонент ServiceCard

const ServiceCard: FC<ServiceCardProps> = ({ title, services }) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </article>
  );
};

export default App
